<template>
  <footer>
    Copyright © 2014 todolist.cn <a href="javascript:clear();">clear</a>
  </footer>
</template>

<script>
export default {
  name: "footer",
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
