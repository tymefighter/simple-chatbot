export const getAPIPath = (path: string): string => process.env.REACT_APP_API_BASE_PATH + path

export const fetcher = async (path: string, init?: RequestInit): Promise<any> => {
  const _path = process.env.REACT_APP_API_BASE_PATH + path;
  const res = await fetch(_path, init);
  return res.json();
}

export const mutator = async <T> (url: string, { arg }: { arg: T }): Promise<T> => {
  const res = await fetch(getAPIPath(url), {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      'content-type': 'application/json'
    }
  });

  return res.json();
}
