import { createApp } from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'

const app = createApp(App);
app.mixin({
    created(){
        const {title}=this.$options
        if(title){
            document.title=title;
        }
    }
});
app.component("my-button",MyButton);
app.mount('#app')
