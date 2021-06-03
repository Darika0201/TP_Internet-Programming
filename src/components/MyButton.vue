<template>
    <div>
        <button v-if="deletes=='DELETE'" class="btn delete"><em class="far fa-trash-alt"></em></button>
        
        <button v-if="add=='ADD'" class="btn plus"><em class="fas fa-plus"></em></button>
    </div>
</template>
<script>
export default {
    props:['deletes','add'],
    name:"MyButton",
    
}
</script>
<style scoped>
    button{
        box-shadow: 0 2px 4px,0 8px 16px;
    }
    button:hover,button:focus{
        box-shadow: 0 4px 8px black,0 16px 20px;
    }
    .delete{
        background-color: red;
        color: white;
    }
    .delete:hover,.delete:focus{
        color: white;
        background-color: red;
    }
    .plus{
        height: 40px;
        background-color: #8E44AD;
        color: white;
    }
    .plus:hover,.plus:focus{
        background-color: #8E44AD;
        color: white;
    }
</style>