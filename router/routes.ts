import MainPage from 'pages'
import CryptoPage from 'pages/cryptos'
import CurrencyDetail from 'pages/detail'
import { RouteProps } from 'react-router'

/**
 * Cool! I see that you're adding a new page
 * Maybe you're wondering what is the purpose of the props inside each object
 * This link may help you https://reactrouter.com/web/api/Route
 */

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: MainPage
  },
  {
    path: '/cryptos',
    exact: true,
    component: CryptoPage
  },
  {
    path: '/cryptos/:id',
    exact: true,
    component: CurrencyDetail
  }
]

export default routes
