<template>
    <div id="hexagon" :style="{'--color':color}"></div>

</template>
<script>
export default {
    props:['color']
}
</script>
<style scoped>
:root{
    --color:blue;
    
}
#hexagon {
    margin-top: 2%;
  width: 100px;
  height: 57.735px;
  background: var(--color);
  position: relative;
}
#hexagon::before {
  content: "";
  position: absolute;
  top: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent; 
  border-right: 50px solid transparent;
  border-bottom: 28.8675px solid var(--color);
}
#hexagon::after {
  content: "";
  position: absolute;
  bottom: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 28.8675px solid var(--color);
}
</style>