<template>
  <div class="mainPanel">
    {{uri}}
    <my-button @click="openUniversalForm('')" style="align-self: flex-end; margin-top: 15px" >Добавить запись</my-button>
    <table border="1">
      <tr>
        <th v-for="(row,index) in dictEntrys.human_readable_field_name" :key="index">
          {{row}}
        </th>     
      </tr>
      <tr  v-for="(row,index) in dictEntrys.data" :key="index">
        <td  v-for="(row2,index) in row" :key="index" @click="openUniversalForm(row[0])">
          {{row2}}
        </td>
      </tr>
    </table>
  </div>
  <modal-dialog v-model:show="dialogVisible">
     <div>
       <universal-form 
       v-model:table="table"
       v-model:id="editId"
       @save="saveForm" 
       @close="closeForm" 
       />
     </div>
  </modal-dialog>      
</template>

<script>
import axios from "axios";
import universalForm from '@/components/universalForm.vue';

export default {
  name: 'Dict',
  props: {
    uri: {
      type: String,
      default: '',
    },

  },  
  components: {
    universalForm,
  },
  data(){
    return {
      dictEntrys:{},
      dialogVisible: false,
      table:"",
      editId:null
    }
  },  
  methods: {
    async getData(dict) {
      this.table=dict
      const api_url=this.$store.state.api_url
      try {
        const response = await axios.get(api_url + '/dict/' +  dict ,{
            params: {
            }
        });
        this.dictEntrys = response.data;
      } catch (e) {
        alert('Ошибка' + e)
      } finally {
//        this.isPostsLoading = false;
      }
    }, 
    async saveData(SaveData){
      console.log(SaveData)
      const api_url=this.$store.state.api_url
      let id = ""
      if (SaveData[0].value == undefined){
        id = ""
      }else{
        id = SaveData[0].value
      }
      try {
        const response = await axios.post(api_url + '/dict/' +  this.table  + "/" + id,{
            params: {
            },
            data:{
              SaveData
            }
        });
//        this.dictEntrys = response.data;
        console.log(response.data)
      } catch (e) {
        alert('Ошибка' + e)
      } finally {
        this.dialogVisible = false;
        this.getData(this.uri)
      }
    },
    openUniversalForm(rew_id) {
      console.log(rew_id)
      this.editId=rew_id;
      this.dialogVisible = true;
    },
    closeForm(){
      this.dialogVisible = false;
    }, 
    saveForm(SaveData){
      console.log(SaveData[0].value)
      this.saveData(SaveData)
    },     
  },
  mounted() {
    this.getData(this.uri)
  },
  setup() {
//    const {dictEntrys} = useDict(props.uri);
    return {
//      dictEntrys,
    }
  },
  watch: { 
    uri: function(newVal) {
      this.getData(newVal) 
    }  
  }  
};
</script>

<style>
</style>