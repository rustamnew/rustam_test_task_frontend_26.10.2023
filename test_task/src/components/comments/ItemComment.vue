<script setup>
import {useCommentStore} from '../../stores/commentStore'

</script>

<template>
    
<div class="comment-item" v-if="mode == 'post-comment'">
    <div class="author-name"><span class="subtitle">Имя: </span>{{ name }}</div>
    <div class="author-name"><span class="subtitle">email: </span>{{ email }}</div>
    <div class="comment-text"><span class="subtitle">Комментарий: </span>{{ body }}</div>

</div>
    
</template>

<script>
    export default {
        props: {
            comment_id: Number,
            name: String,
            email: String,
            mode: String,
            body: String
        },
        data() {
            let commentStore = useCommentStore()

            return {
                commentStore
                //posts: []
            }
        },

        mounted() {
            //console.log(this.name)
            
        },

        methods: {

        },
    }
</script>

<style scoped lang="scss">
    
    .comment-item {
        border: 1px solid lightgray;
        padding: 8px;
        margin-bottom: 1rem;
        background-color: #fff;

        .subtitle {
            font-size: 0.8rem;
        }
        .author-name {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .comment-text {

        }
    }
</style>