import getConfig from 'next/config';

const { publicRuntimeConfig: { envSpecifics } } = getConfig();

export const host = envSpecifics.host;
export const storeUrl = `${host}/store/genesis-choba-2`;
export const searchResultsUrl = `${host}/search?q=chicken`;
export const storesUrl = `${host}/stores`;

console.log({ host })