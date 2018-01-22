import api from './api'

export default {
  submitUserPrefs (prefs) {
    return api().post('preferences')
  }
}
