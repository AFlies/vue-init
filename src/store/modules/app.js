import Cookies from 'js-cookie'

const app = {
  state: {
    appName: Cookies.get('appName') || ''
  },
  mutiations: {
    SET_APP_NAME: (state, appName) => {
      state.appName = appName
      Cookies.set('appName', appName)
    }
  }
}

export default app
