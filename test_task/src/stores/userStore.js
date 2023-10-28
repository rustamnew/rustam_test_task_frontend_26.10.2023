import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useLoadingStore} from './loading';

export const useUserStore = defineStore('user', {

    state: () => {
        
        return {
            firstLoading: true,
            users: [],
            users_names: {},
            show_user_posts: false,
            id_user_showed_posts: ''
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

                    loading.loadingHide()
                });

        },


    },

    getters: {

    },
})