<template>
  <div class="leftPanel">
    <br>
    <ul>
        <tree-item  class="item"
            v-for="(child, index) in treeData"
                :key="index"
                :item="child"
        ></tree-item>
    </ul>
  </div>
</template>
<script>
//import store from "@/store"
export default {
  data() {
    return {
        treeData:   [
                     {name:"Справочники",children:[ 
                        {name:"Список серверов del",link:"servers_del"},
                        {name:"Список серверов",link:"servers"},
                        {name:"Датацентры",link:"data_center"},
                        {name:"Клиенты",link:"client"},
                        {name:"Проекты",link:"project"},
                        {name:"Приложения",link:"application"}]},
                     {name:"Отчеты",children:[
                        {name:"1111111"},
                        {name:"2222222"}]},
                     {name:"Администрирование",children:[
                        {name:"Пользователи",link:"users"},
                        {name:"Группы пользователей",link:"group_users"}]}
                     ],

      }
  },
  methods: {
  },
  
}
</script>
<style scoped>
.leftPanel{
    position: absolute; 
    left:0px;
    right:0px;
    top:100px;
    bottom:0px;    
    width:300px;
    overflow-y:scroll;
    overflow-x:hidden;
  
}
</style>
