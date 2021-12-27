<template>
  <div class="mainPanel">
    Servers
    <table border="1">
      <tr>
        <th>
          dasdadadadas
        </th>
        <th>
          dasdadadadas
        </th>        
      </tr>
      <tr  v-for="(row,index) in servers" :key="index">
        <td>
          {{row.name}}
        </td>
        <td>
          {{index}}
        </td>        
      </tr>
    </table>
  </div>
</template>

<script>
import {useServers} from "@/hooks/useServers";
export default {
  name: 'Servers',
  components: {
  },
  data(){
    return {
    }
  },  
  setup() {
    const {servers} = useServers(10);
    console.log(servers)
    return {
      servers,
    }
  }
};
</script>

<style>
</style>