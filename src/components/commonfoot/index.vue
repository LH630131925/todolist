<template>
  <footer>
    Copyright © 2014 todolist.cn 
    <a href="#" @click="SETTODOS([])">clear</a>
  </footer>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  name: "footer",
  watch:{
    todos:{
      handler(){
        this.toSave()
      },
      deep:true
    }
  },
  methods:{
    ...mapMutations(["SETTODOS"]),
    toSave(){
      window.localStorage.setItem("todos",JSON.stringify(this.todos))
    }
  }
};
</script>


<style lang="scss" scoped>
footer {
  color: #666;
  font-size: 14px;
  text-align: center;
  a {
    width: 600px;
    color: #999;
  }
}
</style>
