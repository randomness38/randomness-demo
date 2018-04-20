import ActivityScene from '../../Scene/ActivityScene'
import DiscoverScene from '../../Scene/DiscoverScene'
import LogScene from '../../Scene/LogScene'
import MainScene from '../../Scene/MainScene'
import ThemeScene from '../../Scene/ThemeScene'
import UserScene from '../../Scene/UserScene'
import MindScene from '../../Scene/MindScene'
import NotFound from '../../Scene/NotFound'

const routes = [
  {
    path: '/',
    component: MainScene,
  },
  {
    path: '/log/:activityId/:userId',
    component: LogScene,
  },
  {
    path: '/discovery',
    component: DiscoverScene

  },
  {
    path: '/myRandom/:userId',
    component: UserScene
  },
  {
    path: '/:category/:themeId',
    component: ThemeScene
  },
  {
    path: '/:category/:themeId/:mindId',
    component: MindScene
  },
  {
    path: '/:category/:themeId/:mindId/:activityId',
    component: ActivityScene
  },
  {
    component: NotFound
  }
]

export default routes
