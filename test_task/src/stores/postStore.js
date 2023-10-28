import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useLoadingStore} from './loading';

export const usePostStore = defineStore('post', {

    state: () => {
        
        return {

            posts: [],
            posts_pages: {},
            page_loaded: 1,
            user_posts: []
        }
    },

    actions: {
        
        async loadData() {
            let loading = useLoadingStore()

            loading.loadingShow()

            await fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => {
                    this.posts = data

                    let i = 0;
                    let page = 1;

                    data.forEach( (item) => {
                        if (!this.posts_pages[page]) {
                            this.posts_pages[page] = []
                        }

                        if (i < 20) {
                            this.posts_pages[page].push(item)

                            i++
                        } else {
                            i = 0
                            page++

                            if (!this.posts_pages[page]) {
                                this.posts_pages[page] = []
                            }

                            this.posts_pages[page].push(item)

                            i++
                        }
                        
                    })

                    this.posts_pages.sorted = this.posts_pages[1]
                    console.log(this.posts_pages)
                    loading.loadingHide()
                });

        },

        loadNextPage() {
            this.page_loaded++

            if (this.posts_pages[this.page_loaded]) {
                this.posts_pages[this.page_loaded].forEach( (item) => {
                    this.posts_pages.sorted.push(item)
                })
            }

        },
        
        async loadUserPosts(user_id) {
            console.log(user_id)
            let loading = useLoadingStore()

            loading.loadingShow()

            await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
                .then(response => response.json())
                .then(data => {
                    this.user_posts = data
                    console.log(this.user_posts)
                    loading.loadingHide()
                });

        },

        sortByUser(user_id) {

        }

    },

    getters: {

    },
})