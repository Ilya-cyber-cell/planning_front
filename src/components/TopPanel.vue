<template>
  <div class="topPanel">
    <h1>This is an about page</h1>
    <my-button @click="openLoginForm">Открыть окно</my-button>
    <router-link to="/">Home</router-link> |
  </div>
  <modal-dialog v-model:show="dialogVisible">
     <div>
       <login-form
       @login="login" 
       @close="closeLoginForm" 
       />
     </div>
  </modal-dialog>    
</template>
<script>
//import store from "@/store"
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },    
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    openLoginForm() {
      this.dialogVisible = true;
    },
    closeLoginForm(){
      this.dialogVisible = false;
    },
    login(login, credential){
      console.log(login  +  '  ' + credential);
      this.dialogVisible = false;
    },      
  },   
  setup() {
    return {
    }
  }
}
</script>
<style scoped>
.topPanel{
    position: absolute;
    background:#f0f0f0;
    left:0px;
    top:0px;
    right:0px;
    height:100px;
    
}
</style>
