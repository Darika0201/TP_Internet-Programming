<template>
    <div id="cut-diamond" :style="{'--color':color}" ></div>
</template>
<script>
export default {
    name:'Diamond',
    props:['color'],
}
</script>
<style scoped>
    :root{
        --color:red;
    }
 #cut-diamond {
      border-style: solid;
      border-color:transparent transparent var(--color) transparent;
      border-width: 0 25px 25px 25px;
      height: 0;
      width: 50px;
      box-sizing: content-box;
      position: relative;
      margin: 20px 0 50px 0;
    }
#cut-diamond:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: var(--color) transparent transparent transparent;
    border-width: 70px 50px 0 50px;
}
</style>