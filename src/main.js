import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faCodeBranch, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDiscord, faSpotify, faMastodon } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faDiscord, faSpotify, faMastodon, faStar, faCodeBranch, faCode)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')