export default function ErrorPage({ error }) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Something went wrong</h1>
      <pre style={{ color: 'red' }}>
        {error?.message || 'Unknown error'}
        {error?.stack && <div>{error.stack}</div>}
      </pre>
    </div>
  );
}
