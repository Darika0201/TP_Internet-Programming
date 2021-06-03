<template>
  <div class="form" @submit.prevent="addTodo()" @todo-list="addTodo()">
    <h4 class="fw-bold text-start">Todo App</h4>
    <form class="form-input" method="noidea">
      <input type="text" class="form-control fw-bold" placeholder="Add your new todo" v-model="task">
      <my-button add="ADD"/>
    </form>
    <div class="content-todo">
      <todo-list @onDelete-items="deleteTodo" @onStatus="changeStatus?changeStatus:''" :todos="todos"/>
    </div>
  </div>

</template>

<script>
import TodoList from './components/TodoList'
export default {
  title:'Todo App',
  name: 'App',
  data(){
    return{
		todos:[],
		task:"",
    }
  },
  components:{
    TodoList
  },
  methods:{
    addTodo(){
      if(this.task){
        const id=this.todos.length;
        this.todos.push({id:id+1,task:this.task,status:"Pending"});
        this.task=""
      }
    },
    deleteTodo(todo){
      this.todos=todo;
    },
    changeStatus(status,id){
      const todo = this.todos.filter(element=>element.id===id);
      todo[0].status=status;
    }
  }
}
</script>

<style>
  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
}
body{
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.form{
  padding: 2%;
  width: 50%;
  height: 100%;
  box-shadow:0 2px 4px rgba(0,0,0,0.1),0 8px 16px rgba(0, 0,0, 0.1);
  background-color: whitesmoke;
  border-radius: 0;
}
.form-control{
  color: gray;
  width: 90%;
  height: 40px;
  border-radius: 5px;
  border: none;
  box-shadow:0 2px 4px rgba(0,0,0,0.1),0 8px 16px rgba(0, 0,0, 0.1);
}
.form-control:hover,.form-control:focus{
  box-shadow: 0 4px 8px rgba(0,0,0,0.1),0 16px 20px rgba(0, 0,0, 0.1);
  color: black;
}
.form-input{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.content-todo{
  margin-top: 2%;
}
@media(max-width:1000px){
  .form{
    width:70%;
  }
}
@media(max-width:600px){
  .form{
    width:80%;
  }
}
</style>
