<template>
  <header>
    <section>
      <form  id="form" @submit.prevent="addtodos">
        <label for="title">ToDoList</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="添加ToDo"
          required="required"
          autocomplete="off"
          v-model="title"
        />
      </form>
    </section>
  </header>
</template>

<script>
export default {
  name: "header",
  data(){
    return {
      title:"",
      todos:[]
    }
  },
  methods:{
    addtodos(){
      this.todos.push({id:new Date().getTime,name:this.title,done:false})
      this.title = ""
      this.$emit("abc",this.todos)
    },
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  background: rgba(47, 47, 47, 0.98);
  section {
    width: 600px;
    margin: 0 auto;

    label {
      float: left;
      width: 100px;
      line-height: 50px;
      color: #ddd;
      font-size: 24px;
      cursor: pointer;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    input {
      float: right;
      width: 60%;
      height: 24px;
      margin-top: 12px;
      text-indent: 10px;
      border-radius: 5px;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
        0 1px 6px rgba(0, 0, 0, 0.45) inset;
      border: none;
    }
  }
}
</style>
