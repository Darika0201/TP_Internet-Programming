<template>
    <heart v-if="name=='Heart'" :color="color"></heart>
    <diamond v-else-if="name=='Diamond'" :color="color"></diamond>
    <star v-else-if="name=='Star'" :color="color"></star>
    <traingle v-else-if="name=='Traingle'" :color="color"></traingle>
    <hexagone v-else-if="name=='Hexagone'" :color="color"></hexagone>
    
</template>
<script>
export default {
    name:'Shape',
    props:['name','color']
}
</script>
<style scoped>

</style>