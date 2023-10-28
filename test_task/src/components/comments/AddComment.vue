<script setup>
import {useCommentStore} from '../../stores/commentStore'

</script>

<template>

    <div class="add-comment">
        <span class="subtitle">Добавить комментарий</span>

        <textarea class="add-comment-textarea"></textarea>

        <button class="send-comment" @click="addComment(this.post_id)">Отправить</button>
    </div>
    
</template>

<script>
    export default {
        props: {
            post_id: Number
        },
        data() {
            let commentStore = useCommentStore()

            return {
                commentStore
                //posts: []
            }
        },

        mounted() {
            
            
        },

        methods: {
            addComment() {
                this.commentStore.addCommentToPost(this.post_id)
            }
        },
    }
</script>

<style scoped>

</style>