import { createStore } from 'vuex'
import {userCredentialModule} from "@/store/userCredentialModule";

export default createStore({
  state: {
    api_url:"http://planning.local/api"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userCredentialModule,
  }
})
