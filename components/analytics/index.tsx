/* eslint-disable @typescript-eslint/no-explicit-any */
import siteMetadata from '@/data/siteMetadata'

import Umami from './Umami'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    plausible?: (...args: any[]) => void
    sa_event?: (...args: any[]) => void
  }
}

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return <>{isProduction && <Umami />}</>
}

export default Analytics
