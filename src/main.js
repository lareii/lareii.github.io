import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDiscord, faSpotify } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faDiscord, faSpotify, faStar, faCodeBranch)

const cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px",
  cursor.style.top = e.clientY + "px";
});

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')