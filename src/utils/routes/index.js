import ActivityScene from '../../Scene/ActivityScene'
import DiscoverScene from '../../Scene/DiscoverScene'
import LogScene from '../../Scene/LogScene'
import MainScene from '../../Scene/MainScene'
import ThemeScene from '../../Scene/ThemeScene'
import UserScene from '../../Scene/UserScene'
import NotFound from '../../Scene/NotFound'

const routes = [
  {
    path: '/',
    component: MainScene,
  },
  {
    path: '/log/:activityId',
    component: LogScene,
  },
  {
    path: '/discovery',
    component: DiscoverScene
  },
  {
    path: '/myRandom',
    component: UserScene
  },
  {
    path: '/:category/:themeId',
    component: ThemeScene
  },
  {
    path: '/:category/:themeId/:activityId',
    component: ActivityScene
  },
  {
    component: NotFound
  }
]

export default routes
