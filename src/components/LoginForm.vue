<template>
    <form @submit.prevent>
        <my-input
        v-focus
        v-model="userCredential.login"
        type="text"
        placeholder="Название"
        />
        <my-input
        v-model="userCredential.credential"
        type="text"
        placeholder="Название"
        />        
        <my-button @click="loginUser" style="align-self: flex-end; margin-top: 15px" >Войти</my-button>
        <my-button @click="closeForm" style="align-self: flex-end; margin-top: 15px" >Закрыть</my-button>
    </form>
</template>
<script>
import store from "@/store"
export default {
  data() {
    return {
      userCredential: {
        login: '',
        credential: ''
      }
    }
  },
  methods: {
    loginUser() {
      this.$emit('login', this.userCredential)
      store.commit('setUserCredential',this.userCredential.login)
      this.userCredential= {
        login: '',
        credential: ''
      }
    },
    closeForm(){
      this.$emit('close')
      this.userCredential= {
        login: '',
        credential: ''
      }    
    },
  },
  
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
