import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import VuetifyConfirm from 'vuetify-confirm'

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)



Vue.use(VuetifyConfirm, {
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет',
  title: 'Warning',
  width: 350,
  property: '$confirm'
})

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
  	let vm = this
  	firebase.auth().onAuthStateChanged(function(user) {
    vm.$store.dispatch('STATE_CHANGED', user)
                                       });
           }
}).$mount('#app')
