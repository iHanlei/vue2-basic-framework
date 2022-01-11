import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/storage'

NProgress.configure({ showSpinner: false })

// 路由白名单
const whiteList = ['/login', '/register', '/home', '/404']

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  const hasToken = getToken()
  // 已登录
  if (hasToken) {
    const userInfo = store.getters.userInfo && store.getters.userInfo.userId > 0
    // 获取用户信息
    if (!userInfo) {
      NProgress.done()
      store.dispatch('user/getUserInfo')
    }
    next()
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login`);
      NProgress.done();
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})