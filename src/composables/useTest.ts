/**
 * Simple test composable for verifying the independent entry point.
 */
export function useTest() {
  const message = 'Hello from useTest!'
  const timestamp = new Date().toLocaleTimeString()

  return {
    message,
    timestamp,
  }
}
