export const fetcher = (input: RequestInfo | URL, init?: RequestInit): Promise<any> => 
  fetch(input, init).then(res => res.json())
