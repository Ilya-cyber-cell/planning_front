<template>
  <li>
    <div class="tree-menu-item"
          :class="{bold: isFolder}"
          >
          <span v-if="isFolder">
            <p @click="toggle"> {{ item.name }}  [{{ isOpen ? '-' : '+' }}]</p>
          </span>
          <span v-else>
            <p v-if="item.link"> <router-link :to="item.link">{{ item.name }}</router-link></p>
          </span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item  class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      ></tree-item>
    </ul> 
  </li>
</template>
<script>
export default {
  name: 'tree-item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },  
  data() {
    return {
        isOpen: false
    };
  },
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }    
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },    
  },
  
}
</script>
<style scoped>
.tree-menu-item:hover  {background-color: #f0f0f0;}
</style>

