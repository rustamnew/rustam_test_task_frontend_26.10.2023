<script setup>
import {usePostStore} from '../../stores/postStore';
import Loading from '../Loading.vue';
import ItemPost from './ItemPost.vue';
import {useUserStore} from '../../stores/userStore';

</script>

<template>
<Loading />

<div class="post-list user-posts" v-if="userStore.show_user_posts == true">
    <div class="user-posts-header">
        <h5>Посты пользователя
            <a :href="`https://jsonplaceholder.typicode.com/users/${userStore.id_user_showed_posts}`" target="_blank" > {{ userStore.users_names[userStore.id_user_showed_posts] }}</a>  
        </h5>

        <button class="cross-button" @click="closeUserPosts()">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="red" version="1.1" id="Capa_1" viewBox="0 0 490 490" xml:space="preserve">
                <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 "/>
            </svg>
        </button>
    </div>
    

    <ItemPost v-for="item in this.postStore.user_posts"
        :title="item.title"
        :body="item.body"
        :id="item.id"
        :user_id="item.userId"
    />
</div>
<div class="post-list" v-if="userStore.show_user_posts == false" >

    <ItemPost v-for="item in this.postStore.posts_pages.sorted"
        :title="item.title"
        :body="item.body"
        :id="item.id"
        :user_id="item.userId"
    />
</div>
    
    
</template>

<script>
    export default {
        props: {
            mode: String,
        },
        data() {
            const postStore = usePostStore()
            const userStore = useUserStore()

            let page = 1;

            return {
                page,
                postStore,
                userStore,
            }
        },

        mounted() {
            //Не нашёл в api реализацию пагинации, поэтому получаем сразу все посты
            this.postStore.loadData()
            
        },

        methods: {
            closeUserPosts() {
                this.userStore.show_user_posts = false
            }
        },
    }
</script>

<style scoped lang="scss">
    .post-list {
        display: flex;
        flex-direction: column;

        .user-posts-header {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;

            h5 {
                font-size: 1rem;
                margin-right: 0.5rem;
            }

            .cross-button {
                text-align: unset;
                
                color: unset;
                justify-content: unset;
                align-items: unset;
                
                border: none;
                background-color: #fff;
                border-radius: 50%;
                padding: 0.5rem;

                svg {
                    height: 1rem;
                }

            }
        }
    }
</style>