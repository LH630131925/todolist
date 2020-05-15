<template>
  <div>
    <commonhead ></commonhead>
    <section>
      <h2 onclick="save()">正在进行 <span id="todocount">{{doingList.length}}</span></h2>
      <ol id="todolist" class="demo-box" >
        <li draggable="true" v-for="item in doingList" :key = "item.id">
          <input
            type="checkbox"
            @change = "item.done = true,SETTODOS(todos)"
          />
          <p id="p-1" onclick="edit(1)">{{item.name}}</p>
          <a href="#" @click = "DELETETODOS(item.id)">-</a>
        </li>
      </ol>
      <h2>已经完成 <span id="donecount">{{doneList.length}}</span></h2>
      <ul id="donelist">
        <li draggable="true" v-for="item in doneList" :key = "item.id">
          <input
            type="checkbox"
            @change='item.done = false,SETTODOS(todos)'
            checked="checked"
          />
          <p id="p-1" onclick="edit(1)">{{item.name}}</p>
          <a href="#" @click = "DELETETODOS(item.id)">-</a>
        </li>
      </ul>
    </section>
    <commonfoot></commonfoot>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from "vuex"
import commonhead from "@/components/commonhead";
import commonfoot from "@/components/commonfoot";
export default {
  name: "mainbody",
  components: {
    commonhead,
    commonfoot,
  },
  watch:{
    todos:{
      handler(){
        this.toSave()
      },
      deep:true
    }
  },
  computed:{
    ...mapState(["todos"]),
    ...mapGetters(["doingList","doneList"])
  },
  methods:{
    ...mapMutations(["SETTODOS","DELETETODOS"]),
     toSave(){
      window.localStorage.setItem("todos",JSON.stringify(this.todos))
    }
  }
};
</script>

<style lang="scss" scoped>
section{
  width:600px;
  margin: 0 auto;
}
h2 {
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #e6e6fa;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
}
ol,
ul {
  padding: 0;
  list-style: none;
}
li input {
  position: absolute;
  top: 2px;
  left: 10px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}
p {
  margin: 0;
}
li p input {
  top: 3px;
  left: 40px;
  width: 70%;
  height: 20px;
  line-height: 14px;
  text-indent: 5px;
  font-size: 14px;
}
li {
  height: 32px;
  line-height: 32px;
  background: #fff;
  position: relative;
  margin-bottom: 10px;
  padding: 0 45px;
  border-radius: 3px;
  border-left: 5px solid #629a9c;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}
ol li {
  cursor: move;
}
ul li {
  border-left: 5px solid #999;
  opacity: 0.5;
}
li a {
  position: absolute;
  top: 2px;
  right: 5px;
  display: inline-block;
  width: 14px;
  height: 12px;
  border-radius: 14px;
  border: 6px double #fff;
  background: #ccc;
  line-height: 14px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
footer {
  color: #666;
  font-size: 14px;
  text-align: center;
}
footer a {
  color: #666;
  text-decoration: none;
  color: #999;
}
@media screen and (max-device-width: 620px) {
  section {
    width: 96%;
    padding: 0 2%;
  }
}
@media screen and (min-width: 620px) {
  section {
    width: 600px;
    padding: 0 10px;
  }
}
.unactive input {
  border: 2px solid transparent;
}
.active input {
  border: 2px solid black;
}
</style>
