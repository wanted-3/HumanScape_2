import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { store } from './states'
import reportWebVitals from './reportWebVitals'

import Routes from './routes'

import './styles/index.scss'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <Routes />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)

reportWebVitals()
