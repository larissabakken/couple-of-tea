import { useState } from 'react';

export function useLoading() {
  const [loading, setLoading] = useState(false);

  async function withLoading(promise: Promise<any>) {
    setLoading(true);
    return promise.finally(() => setLoading(false));
  }

  return { loading, withLoading };
}