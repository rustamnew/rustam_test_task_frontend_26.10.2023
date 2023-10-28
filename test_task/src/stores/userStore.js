import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useLoadingStore} from './loading';

export const useUserStore = defineStore('user', {

    state: () => {
        
        return {
            firstLoading: true,
            users: [],
            users_names: {},
            show_user_posts: false
        }
    },

    actions: {
        
        async loadData() {
            let loading = useLoadingStore()
            loading.loadingShow()

            this.firstLoading = false

            await fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => {
                    this.users = data

                    data.forEach( (item) => {
                        this.users_names[item.id] = item.name
                    })
                    console.log(this.users_names)
                    loading.loadingHide()
                });

        },

        /*showUserPosts(user_id) {
            this.show_user_posts = true
            this.users_id_for_post = user_id

            await fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => {
                    this.users = data
                    loading.loadingHide()
                });

        }*/

    },

    getters: {

    },
})