import Home from 'app/core/pages/home'
import NewCoin from 'app/core/pages/new-coin'

import { AppRoute } from './types'

export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/new-coin', exact: true, component: NewCoin },
  { path: '/private', exact: true, component: Home, isPrivate: true },
]
