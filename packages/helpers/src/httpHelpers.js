import fetch from 'isomorphic-unfetch';

import { ApiError, delog } from 'constants/Helpers/debugHelper';
import arrayHelpers from 'constants/Helpers/arrayHelpers';
import { makeCookieString } from 'constants/Helpers/objectHelper';
import { emptyPromise, makeTimeout } from 'constants/Helpers/promiseHelpers';
import APP_INFO from 'constants/appInfo';
import apiErrorMapper from 'constants/apiErrorMapper';

/**
 * Fetch with options and timeout
 * @param url
 * @param options
 * @param timeout
 * @returns {Promise<unknown>}
 */
export const fetchWithTimeOut = (url, options, timeout = 5000) =>
  Promise.race([fetch(url, options), makeTimeout(timeout)]);

/**
 * Call an api in universal way
 * @param url
 * @param method
 * @param credentials
 * @param data
 * @param headers
 * @param params
 * @param rest
 * @param timeout
 * @param allowedNoContent
 * @returns {Promise<any>}
 */
export const universalCall = async ({
  url,
  method = 'GET',
  credentials = 'include',
  data = {},
  headers = {},
  params = {},
  allowedNoContent = false,
  timeout = 5000,
  ...rest
  // eslint-disable-next-line consistent-return
}) => {
  /**
   * Add cookies to request header
   */
  if (process.env.SSR) {
    // eslint-disable-next-line no-param-reassign
    headers.Cookie = makeCookieString(APP_INFO.NODE_GLOBALS.cookies);
  }

  const options = {
    method: method.toUpperCase(),
    credentials,
    headers,
    ...rest,
  };

  // eslint-disable-next-line no-console
  delog(`API called with : ${options.method} ${url}`);

  /**
   * Make body of POST and PUT requests
   */
  if (!['GET', 'HEAD'].includes(options.method)) {
    options.body = JSON.stringify(data);
    delete options.data;
  }

  /**
   * Make query parameters
   */
  let callUrl = url;
  if (Object.keys(params).length > 0) {
    const queryParameters = arrayHelpers.serializeObject(params);
    callUrl += `?${queryParameters}`;
  }

  /**
   * Call universal request with options
   */
  const response = await fetchWithTimeOut(encodeURI(callUrl), options, timeout);
  const contentType = response.headers.get('content-type');

  /**
   * Handle custom response types
   */
  if (allowedNoContent && response.status === 204) {
    return emptyPromise();
  }

  /**
   * If we did not got json then throw error message
   */
  if (!contentType || !contentType.includes('application/json')) {
    console.log('URRRL ', { response, url, contentType });
    throw new ApiError(apiErrorMapper.SERVER_CONTENT_TYPE_ERROR);
  }

  /**
   * Parse server response json string
   */
  let result = {};
  try {
    result = await response.json();
  } catch (e) {
    throw new ApiError(apiErrorMapper.SERVER_CONTENT_PARSING_ERROR);
  }

  /**
   * If result is not ok throw error
   */
  if (!response.ok) {
    throw result;
  }
  return result;
};