/* eslint-disable no-underscore-dangle */

import axios, {AxiosRequestConfig} from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'Accept: application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
};

export const getFactory = (option?: AxiosRequestConfig) => {
  const config = {...DEFAULT_API_CONFIG, ...option};
  const instance = axios.create(config);

  const _get = async (params: unknown, path: string) => {
    try {
      const response = await instance.get(path, {params});

      return response.data;
    } catch (error) {
      if (error.response === undefined) return false;

      throw error;
    }
  };

  return _get;
};

export const postFactory = (option?: AxiosRequestConfig) => {
  const config = {...DEFAULT_API_CONFIG, ...option};
  const instance = axios.create(config);

  const _post = async (params: unknown, path: string) => {
    try {
      const response = await instance.post(path, params);

      return response.data;
    } catch (error) {
      if (error.response === undefined) return false;

      throw error;
    }
  };

  return _post;
};

export const putFactory = (option?: AxiosRequestConfig) => {
  const config = {...DEFAULT_API_CONFIG, ...option};
  const instance = axios.create(config);

  const _put = async (params: unknown, path: string) => {
    try {
      const response = await instance.put(path, params);

      return response.data;
    } catch (error) {
      if (error.response === undefined) return false;

      throw error;
    }
  };

  return _put;
};

export const patchFactory = (option?: AxiosRequestConfig) => {
  const config = {...DEFAULT_API_CONFIG, ...option};
  const instance = axios.create(config);

  const _patch = async (params: unknown, path: string) => {
    try {
      const response = await instance.patch(path, params);

      return response.data;
    } catch (error) {
      if (error.response === undefined) return false;

      throw error;
    }
  };

  return _patch;
};

export const deleteFactory = (option?: AxiosRequestConfig) => {
  const config = {...DEFAULT_API_CONFIG, ...option};
  const instance = axios.create(config);

  const _delete = async (params: unknown, path: string) => {
    try {
      const response = await instance.delete(path, {params});

      return response.data;
    } catch (error) {
      if (error.response === undefined) return false;

      throw error;
    }
  };

  return _delete;
};
