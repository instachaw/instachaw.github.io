import getConfig from 'next/config';

const { publicRuntimeConfig: { envSpecifics } } = getConfig();

export const host = envSpecifics.host;