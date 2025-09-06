import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import '../src/styles/globals.css'

// Lazy load analytics components
const Analytics = dynamic(() => import('@vercel/analytics/react').then(mod => mod.Analytics), {
  ssr: false
})

const SpeedInsights = dynamic(() => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights), {
  ssr: false
})

const PerformanceMonitor = dynamic(() => import('../src/components/PerformanceMonitor').then(mod => mod.PerformanceMonitor), {
  ssr: false
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
    </>
  )
}