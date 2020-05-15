<template>
  <section>
    <h2 onclick="save()">正在进行 <span id="todocount">0</span></h2>
    <ol id="todolist" class="demo-box"></ol>
    <h2>已经完成 <span id="donecount">2</span></h2>
    <ul id="donelist">
      <li draggable="true">
        <input
          type="checkbox"
          onchange='update(1,"done",false)'
          checked="checked"
        />
        <p id="p-1" onclick="edit(1)">2</p>
        <a href="javascript:remove(1)">-</a>
      </li>
      <li draggable="true">
        <input
          type="checkbox"
          onchange='update(0,"done",false)'
          checked="checked"
        />
        <p id="p-0" onclick="edit(0)">1</p>
        <a href="javascript:remove(0)">-</a>
      </li>
    </ul>
  </section>
</template>

<script>
import head from "@/components/header"
import foot from "@/components/footer"
export default {
  name: "body",
  components:{
      head,
      foot
  }  
};
</script>

<style lang="scss" scoped>
section {
  margin: 0 auto;
  display: block;
  h2 {
    position: relative;
  }
  ol,
  ul {
    padding: 0;
    list-style: none;
    li {
      border-left: 5px solid #999;
      opacity: 0.5;
      height: 32px;
      line-height: 32px;
      background: #fff;
      position: relative;
      margin-bottom: 10px;
      padding: 0 45px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    }
  }
}
</style>
