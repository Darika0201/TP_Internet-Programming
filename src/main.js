import { createApp } from 'vue'
import App from './App.vue'
import Traingle from './components/Traingle.vue'
import Diamond from './components/Diamond.vue'
import Heart from './components/Heart.vue'
import Star from './components/Star.vue'
import Hexagone from './components/Hexagone.vue';
const app = createApp(App);
app.mixin({
    created(){
        const {title}=this.$options
        if(title){
            document.title=title;
        }
    }
});
app.component('diamond',Diamond);
app.component('heart',Heart);
app.component('star',Star);
app.component('hexagone',Hexagone);
app.component('traingle',Traingle);
app.mount('#app')
