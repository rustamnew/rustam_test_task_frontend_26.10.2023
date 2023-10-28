import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useLoadingStore} from './loading';

export const useCommentStore = defineStore('comment', {

    state: () => {
        
        return {
            loading: useLoadingStore(),
            comments: {
                /*
                [post_id]: [
                    {
                        ..commentdata..
                    }
                ]
                */ 
            }
        }
    },

    actions: {

        async getPostComments(post_id) {
            await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`)
                .then(response => response.json())
                .then(data => {
                    this.comments[post_id] = data
                    //console.log(this.comments)
                    this.loading.loadingHide()
            });
        },

        async addCommentToPost(post_id, obj) {
            console.log(post_id)
            console.log(obj)

            await fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                body: JSON.stringify({
                    postId: post_id,
                    name: obj.name_input_value,
                    email: obj.email_input_value,
                    body: obj.text_input_value,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => {
                    this.comments[json.postId].push(json)
                });
            }

    },


})