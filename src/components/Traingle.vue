<template>
    <div id="traingle" :style="{'--color':color}">

    </div>
</template>
<script>
export default {
    name:'Traingle',
    props:['color'],
}
</script>
<style scoped>
:root{
    --color:red
}
#traingle {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 40px solid var(--color);
    margin-top: 2%;
}
</style>