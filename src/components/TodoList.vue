<template>
    <div class="content-all" >
        <template v-for="todo in todoe" :key="todo.id">
             <todo-item :id="todo.id" :status="todo.status" :task="todo.task" @change-status="changeToStatus(todo.id)" @onDelete-item="deleteItem(todo.id)"/>
        </template>
       <template v-if="pending">
            <h5 class="text-start fw-bold mt-3">You have {{pending}} pending tasks.</h5>
       </template>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
    props:['todos'],
    name:"TodoList",
    data(){
        return{
            todoe:[
                {
                    id:Number,
                    task:String,
                    status:String,
                }
            ],

        }
    },
    mounted(){
        this.todoe=this.todos;  
    },
    emits:['onDelete-items','onStatus'],
    methods:{
        pushTodo(){
            this.$emit('todolist');
        },
        changeToStatus(todo){
            const status=this.todoe.filter(element=>element.id===todo);
            try{
                if(status[0].status=="Pending")status[0].status="Done";else status[0].status="Pending";
                this.$emit('onStatus',status[0].status);
            }
            catch(err){
                console.log("just something")
            }

        },
        deleteItem(todo){
            this.todoe=this.todoe.filter(element=>element.id!==todo);
            this.$emit('onDelete-items',this.todoe);
            return this.todoe
        }
    },
    computed:{
        pending(){
            var count = this.todoe.filter(element=>element.status=="Pending").length
            return count;
        }
    },
    components:{
        TodoItem,
    },

}
</script>
<style scoped>

</style>