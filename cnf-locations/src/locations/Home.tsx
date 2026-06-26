import { HomeAppSDK } from '@contentful/app-sdk';
import useHomeStats from '../services/home';
import { useSDK } from '@contentful/react-apps-toolkit';




const Home = () => {
    const sdk = useSDK <HomeAppSDK>();
    const { spaceName, totalEntries, totalAssets, totalContentTypes } = useHomeStats(sdk);

    return (
        <div>
            <h1>Home Location</h1>
            <p>This is the content for the Home location.</p>
            <p>Space Name: {spaceName}</p>
            <p>Total Entries: {totalEntries}</p>
            <p>Total Assets: {totalAssets}</p>
            <p>Total Content Types: {totalContentTypes}</p>
        </div>
    );
}

export default Home;

