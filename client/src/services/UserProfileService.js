import api from './api'

export default {
  submitUserPrefs (prefs) {
    console.log(prefs)
    return api().post('profile', prefs)
  }
}
