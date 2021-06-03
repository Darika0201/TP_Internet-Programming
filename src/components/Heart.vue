<template>
    <div id="heart" :style="{'--colorf':color}"></div>
</template>
<script>
export default {
    props:['color'],
}
</script>
<style scoped>
    :root{
        --colorf:yellow;
    }
    #heart {
    margin-top: 2%;
      position: relative;
      width: 100px;
      height: 90px;
    }
    #heart:before,
    #heart:after {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: var(--colorf);
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    #heart:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
</style>