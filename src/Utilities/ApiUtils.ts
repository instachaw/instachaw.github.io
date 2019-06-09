'use strict';

import getConfig from 'next/config';

const fetch = require('isomorphic-fetch');

const { publicRuntimeConfig: { envSpecifics } } = getConfig();

type callApiArgs = {
  /** Endpoint to call */
  endpoint: string,
  /** Available HTTP request methods */
  method?: "GET"|"POST"|"PUT"|"DELETE",
  /** Additional request headers */
  headers?: object
}

/**
 * Makes a parameterized API request.
 * 
 * @param {string} endpoint - Endpoint for the request.
 * @param {string} method - HTTP method for the request. "GET", "POST", "PUT", "DELETE".
 * 
 * @returns {string}
 */
export function callApi ({
  endpoint,
  method = 'GET',
  headers = {}
}: callApiArgs) {
  return fetch(`${envSpecifics.api}/${endpoint}`, {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  })
}