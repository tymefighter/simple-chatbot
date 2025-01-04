export const getAPIPath = (path: string): string => process.env.REACT_APP_API_BASE_PATH + path

export const fetcher = async (path: string, init?: RequestInit): Promise<any> => {
  const _path = process.env.REACT_APP_API_BASE_PATH + path;
  const res = await fetch(_path, init);
  return res.json();
}
