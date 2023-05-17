export interface CollectionDataResult<T> {
  loading: boolean;
  error: { [key: string]: any } | undefined;
  data: T | null;
  fetchData: () => Promise<void>;
}

export interface BaseDataOptions<T> {
  collectionName: string;
  method: string;
  fetchOnLoad?: boolean;
  params?: any[];
}

export interface PBResponseError {
  url: string;
  status: number;
  data: { [key: string]: any };
  isAbort: boolean;
  originalError: any;
  }
