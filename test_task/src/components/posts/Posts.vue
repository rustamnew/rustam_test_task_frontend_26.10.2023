<script setup>
import {usePostStore} from '../../stores/postStore';
import Loading from '../Loading.vue';
import ItemPost from './ItemPost.vue';
import {useUserStore} from '../../stores/userStore';

</script>

<template>
<Loading />

<div class="post-list user-posts" v-if="userStore.show_user_posts == true">
    Посты пользователя
    <button @click="closeUserPosts()">Закрыть</button>

    <ItemPost v-for="item in this.postStore.user_posts"
        :title="item.title"
        :body="item.body"
        :id="item.id"
        :user_id="item.userId"
    />
</div>
<div class="post-list" v-if="userStore.show_user_posts == false" > <!--v-if="mode == 'posts'"-->

    <!--v-for="item in this.postStore.posts"-->
    <!--v-for="item in this.postStore.posts_pages[page]"-->
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

<style scoped>
    .post-list {
        display: flex;
        flex-direction: column;

        
    }
</style>