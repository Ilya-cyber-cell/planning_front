<template>
  <top-panel>
  </top-panel>
  <left-tree>
  </left-tree>  
  <router-view/>
</template>
<script>
import TopPanel from '@/components/TopPanel.vue';
import LeftTree from '@/components/LeftTree.vue';
export default {
  name: 'Home',
  components: {
    TopPanel,
    LeftTree,
  },
  data(){
    return {
    }
  },
  methods: {

  },  
  setup() {
//    const servers = useServers(10);
    return {
//      servers,
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.mainPanel{
    position: absolute; 
    left:300px;
    right:0px;
    top:100px;
    bottom:0px;   
    overflow-y:scroll;
    overflow-x:hidden;
    background:#FFFFFF;
}
</style>
