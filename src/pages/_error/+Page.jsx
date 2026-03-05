// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => [
  { title: 'Page Error | Taifa Mobile' },
  {
    name: 'description',
    content: 'An unexpected error occurred while loading this Taifa Mobile page.'
  }
];

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
