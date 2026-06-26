const LocalhostWarning = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Warning: Running in Localhost</h1>
        <p>This application is currently running in a localhost environment. Some features may not work as expected.</p>
        <p>Please ensure you are running this application in a proper Contentful environment for full functionality.</p>
    </div>
  );
}

export default LocalhostWarning;