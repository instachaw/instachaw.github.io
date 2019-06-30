// jest.setup.js

import { setConfig } from 'next/config'
import { publicRuntimeConfig } from './next.config'

setConfig({ publicRuntimeConfig })

jest.setTimeout(30000)