import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'tailwindcss/tailwind.css'
import GlobalStyles from '~/styles/GlobalStyles'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </div>
  )
}
