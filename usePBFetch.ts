import pocketBase from '../lib/pocketBase';
import { useEffect, useState } from 'react';

import { BaseDataOptions, CollectionDataResult, PBResponseError } from '../typings/globalTypes';

export default function usePBFetch<T>({
  collectionName,
  method,
  fetchOnLoad = false,
  params = [],
}: BaseDataOptions<T>): CollectionDataResult<T> {
  const [data, setData] = useState<T | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: string }>();

  useEffect(() => {
    if (fetchOnLoad) fetchData();
  }, [collectionName]);

  async function fetchData() {
    try {
      setLoading(true);
      const collection: any = pocketBase.collection(collectionName);

      if (!(method in collection)) {
        console.error(`Method ${method} is not available in ${collectionName} collection !`);
        setLoading(false);
      }

      const result = await collection[method](...params);

      setData(result);
      setLoading(false);
    } catch (error: any) {
      const pbError = error as PBResponseError;
      console.error(`Error fetching data in collection ${collectionName}, error ${pbError}`);
      setError(pbError.data);
      setLoading(false);
    }
  }

  return { loading, error, data, fetchData };
}
