import axios, { AxiosResponse } from 'axios';

export interface PictureData {
  id: string;
  urls: {
    full: string;
    small: string;
  }
}

export interface SearchResult {
  results: PictureData[]
}

export const onSearchSubmit: (title: string) => Promise<AxiosResponse<SearchResult>> = (title) => {
  const options = {
    params: {
      query: title,
      per_page: 30
    },
    headers: {
      Authorization: 'Client-ID 5110e0875d03049c42ef2483cf9a9ad53c6a0f46dd526e9ee18dca0c3c6a8f0b'
    }
  };

  return axios.get('https://api.unsplash.com/search/photos', options)
};
