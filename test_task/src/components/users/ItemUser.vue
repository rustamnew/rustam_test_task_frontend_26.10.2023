<script setup>
    import { isProxy, toRaw } from 'vue';
    import {useTabStore} from '../../stores/tabs';
    import {useUserStore} from '../../stores/userStore';
    import {usePostStore} from '../../stores/postStore';
    import imgUrl from './empty_small.jpg'

</script>

<template>
    <div class="post-author-user" v-if="(mode == 'post-author-user')">
        <span class="author-subtitle">Автор поста:</span>

        <h5 class="name"> 
            <a :href="`https://jsonplaceholder.typicode.com/users/${id}`" target="_blank" > {{ userStore.users_names[id] }}</a>  
        </h5>


    </div>

    <div class="user-item" v-if="mode == 'user-list-item'">

        <h5 class="name"> 
            <a :href="`https://jsonplaceholder.typicode.com/users/${id}`" target="_blank" > {{ name }}</a>  
        </h5>

        <p class="text"> {{ body }}</p>
        <div class="preview">
            <img :src="imgUrl" alt="image_sample">
        </div>

        <button class="view-user-posts" @click="viewUserPosts(id)">Посмотреть посты пользователя</button>
    </div>


    
</template>

<script>
    export default {
        props: {
            name: String,
            username: String,
            email: String,
            companyName: String,
            id: Number,
            mode: String
        },
        data() {
            let tabStore = useTabStore()
            let userStore = useUserStore()
            let postStore = usePostStore()

            return {
                tabStore,
                userStore,
                postStore,
            }
        },
        setup() {
            let user = Vue.ref(0);
            return { user }
        },

        methods: {
            viewUserPosts(user_id) {
                this.tabStore.tab = 'posts'
                this.userStore.id_user_showed_posts = user_id
                this.userStore.show_user_posts = true
                this.postStore.loadUserPosts(user_id)
                
            }
        },
    }
</script>

<style scoped lang="scss">

.user-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid rgb(153, 153, 153);

    margin-bottom: 1.5rem;
    padding: 0.5rem;


    .name {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .preview {
        width: 100%;
        margin-bottom: 1rem;

        img {
            width: 100%;
            max-height: 250px;
            object-fit: cover;
        }
    }

    .text {
        font-size: 0.7rem;
    }
}

.post-author-user {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    .author-subtitle {
        margin-right: 0.3rem;
    }
    .name {
        font-size: 1rem;

        a {
            
        }
    }
}
</style>