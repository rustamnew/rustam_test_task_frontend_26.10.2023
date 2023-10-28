<script setup>
    import Comments from '../comments/Comments.vue'
    import AddComment from '../comments/AddComment.vue'
    import Users from '../users/Users.vue'
    import ItemUser from '../users/ItemUser.vue'
    import imgUrl from './empty_large.jpg'
</script>

<template>

<div class="post-item">
    
    <h5 class="title"> {{ title }} </h5>

    <div class="user">
        <Users :mode="'post-author-user'" :user_id="user_id"/>
    </div>

    
    <div class="preview">
        <!-- Заглушка, если вдруг захотим в будущем добавить превью, закомментировать при необходимости -->
        <img :src="imgUrl" alt="image_sample">
    </div>

    <p class="text"> {{ body }}</p>

    

    <div class="comments">
        <Comments :post_id="id" :mode="'post-comments'"/>
    </div>

</div>
    
    
</template>

<script>
    export default {
        props: {
            title: String,
            body: String,
            id: Number,
            user_id: Number,
        },

        onMount() {

        },
    }
</script>

<style scoped lang="scss">
    .post-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 1px solid rgb(153, 153, 153);

        background-color: #fff;

        margin-bottom: 1.5rem;
        padding: 0.5rem;


        .title {
            font-size: 1rem;
            margin-bottom: 1rem;
            width: 100%;
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

        .comments {
            width: 100%;
        }
        .user {
            width: 100%;
        }
        .text {
            font-size: 0.7rem;
            margin-bottom: 1rem;
        }

        .add-comment {
            width: 100%;

            
        }
    }
</style>