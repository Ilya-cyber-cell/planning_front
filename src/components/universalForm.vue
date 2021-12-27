<template>
    <form @submit.prevent>
        <div  v-for="(row,index) in Entry.data" :key="index">
          <p v-show="Entry.data[index]['hidden'] ==null">
          {{Entry.data[index]['human_readable_field_name']}}  
          <my-input  v-if="Entry.data[index]['link_table'] ==null"
            v-model="Entry.data[index]['value']"
            type="text"
            :placeholder="Entry.data[index]['human_readable_field_name']"
          /> 
          <my-select  v-else
            v-model="Entry.data[index]['value']"
            :options="Entry.parent_tables[Entry.data[index]['link_table']]"
          /> 
          </p>
        </div>  
        <my-button @click="Save" style="align-self: flex-end; margin-top: 15px" >Сохранить</my-button>
        <my-button @click="closeForm" style="align-self: flex-end; margin-top: 15px" >Закрыть</my-button>
    </form>
</template>
<script>
import axios from "axios";

export default {
  props: {
    id:{
      type: Number,
      default: null,    
    },
    table:{
      type: String,
      default: '',    
    }
  },  
  data() {
    return {
      userCredential: {
        login: '',
        credential: ''
      },
      Entry:{},
    }
  },
  methods: {
    async getData(dict,id) {
      const api_url=this.$store.state.api_url
      try {
        const response = await axios.get(api_url + '/dict/' +  dict  + '/' + id,{
            params: {
            }
        });
        this.Entry = response.data;
        console.log(this.Entry)
      } catch (e) {
        alert('Ошибка' + e)
      }
    },     
    Save() {
      this.$emit('save', this.Entry.data)
      this.Entry={}
    },
    closeForm(){
      this.$emit('close')
      this.Entry={}
    },
  },
  mounted() {
    this.getData(this.table,this.id)
  },  
  
}
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
