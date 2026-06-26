import type { HomeAppSDK } from '@contentful/app-sdk';
import { useEffect, useState } from 'react';


interface HomeStats {
    spaceName: string;
    totalEntries: number;
    totalAssets: number;
    totalContentTypes: number;
}

const EMPTY_STATS: HomeStats = {
    spaceName: '',
    totalEntries: 0,
    totalAssets: 0,
    totalContentTypes: 0,
};

const useHomeStats = (sdk: HomeAppSDK): HomeStats => {
    const [stats, setStats] = useState<HomeStats>(EMPTY_STATS);
    const CMA = sdk.cma as HomeAppSDK['cma'];

    useEffect(() => {

        let isMounted = true;

        const fetchStats = async () => {
            try {
                const [space, entries, assets, contentTypes] = await Promise.all([
                    CMA.space.get({ spaceId: sdk.ids.space }),
                    CMA.entry.getMany({ spaceId: sdk.ids.space }),
                    CMA.asset.getMany({ spaceId: sdk.ids.space }),
                    CMA.contentType.getMany({ spaceId: sdk.ids.space }),
                ]);

                if (!isMounted) {
                    return;
                }

                setStats({
                    spaceName: space.name,
                    totalEntries: entries.items.length,
                    totalAssets: assets.items.length,
                    totalContentTypes: contentTypes.items.length,
                });
            } catch (error) {
                console.error('Error fetching home stats:', error);
            }
        };

        fetchStats();

        return () => {
            isMounted = false;
        };
    }, [sdk]);

    return stats;
};

export default useHomeStats;