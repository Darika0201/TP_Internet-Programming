import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create vuex store
const store = createStore({
  state() {
    return {
      user: {
        name: "Chea Darika",  // string
        gender: "F",
        phone: "012345678",
        id: "basdfa-asdfa-asdfad"  // uuid()
      },
      posts: [
        {
          title: "Robert Mclntosh",
          content: "Do people born in 2000 get to choose if they are Generation Y or Generation Z? How do you decide what generation you want to belong to?",
          postedAt: "09/04/2021 15:55:20",
          postedBy: "basdfa-asdfa-asdfad",
          id: "asdfa-asdfa-asdfa"
        },
        {
          title: "Robert Mclntosh",
          content: "Do people born in 2000 get to choose if they are Generation Y or Generation Z? How do you decide what generation you want to belong to?",
          postedAt: "09/04/2021 15:55:20",
          postedBy: "basdfa-asdfa-asdfad",
          id: "asdfb-asdfa-asdfa"
        }
      ],
      comments: [
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          commentedAt: "09/04/2021 15:57:20",
          commentedBy: "asdfa-asdfa-asdfa",
          postId: "asdfa-asdfa-asdfa",
          id: "ueueus-owiiw-iwiww"
        },
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          commentedAt: "09/04/2021 15:57:20",
          commentedBy: "asdfa-asdfa-asdfa",
          postId: "asdfa-asdfa-asdfa",
          id: "ueueus-owiiw-iwiww"
        },
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          commentedAt: "09/04/2021 15:57:20",
          commentedBy: "asdfa-asdfa-asdfa",
          postId: "asdfb-asdfa-asdfa",
          id: "ueueuy-owiiw-iwiww"
        }
      ]
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getComments(state) {
      return state.comments
    },
    getCommentsByPost: (state) => (postId) => {
      return state.comments.filter(comment => comment.postId == postId)
    }
  }
})

const app = createApp(App)  // Create new vuejs instance
app.use(store)              // Attach our new store to this vuejs instance
app.mount('#app')           // mount vuejs instance with template
