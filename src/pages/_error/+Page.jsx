// pages/_error/+Page.jsx
import { usePageContext } from 'vike/usePageContext'  // ← change to this

export default function Page() {
  const pageContext = usePageContext()
  const { is404, abortReason, abortStatusCode } = pageContext

  let message = 'Something went wrong.'
  if (is404) {
    message = 'Page not found (404)'
  } else if (abortReason) {
    message = typeof abortReason === 'string' ? abortReason : JSON.stringify(abortReason)
  } else if (abortStatusCode) {
    message = `Error ${abortStatusCode}`
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Error</h1>
      <p>{message}</p>
      <pre style={{ background: '#f8f8f8', padding: '1rem', overflow: 'auto' }}>
        {JSON.stringify(pageContext, null, 2)}
      </pre>
    </div>
  )
}
