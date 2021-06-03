<template>
    <div v-if="statuse==='Pending'||statuse=='Done'" 
    @mouseover="mouseOver()"
    @mouseleave="mouseLeave()"
    :class="status" @click="changeStatus">
        <h5 class="fw-bold text-start">{{task}}</h5>
        <my-button @click="deleteItem" deletes="DELETE" v-show="buttonVisible"/>
    </div>
</template>
<script>
import MyButton from './MyButton.vue';
export default {
  components: { MyButton },
    props:['status','task','id'],
    name:'TodoItem',
    data(){
        return{
            statuse:"",
            buttonVisible:false
        }
    },
    mounted(){
        this.statuse=this.status
    },
    emits:['change-status','onDelete-item'],
    methods:{
        changeStatus(){
            this.$emit("change-status");
        },
        mouseOver(){
            this.buttonVisible=true;
        },
        mouseLeave(){
            this.buttonVisible=false
        },
        deleteItem(){
            this.$emit('onDelete-item',this.id);
        }

    },

}
</script>
<style scoped>
    .Done{
        padding-top: 2%;
        padding-bottom: 1%;
        padding-left:2% ;
        padding-right:1% ;
        color: white;
        background-color: #3498DB;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1),0 8px 16px rgba(0, 0,0, 0.1);
        margin-top: 4%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Pending{
        padding-top: 2%;
        padding-bottom: 1%;
        padding-left: 2%;
        padding-right:1% ;
        color: black;
        background-color: gray;
        margin-top: 4%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1),0 8px 16px rgba(0, 0,0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>