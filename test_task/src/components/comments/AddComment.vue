<script setup>
import {useCommentStore} from '../../stores/commentStore'

</script>

<template>

    <div class="add-comment-to-post">
        <span class="subtitle">Добавить комментарий</span>

        <input placeholder="Имя" type="text" :name="'comment_name_' + post_id">
        <input placeholder="Email" type="email" :name="'comment_email_' + post_id">
        <textarea placeholder="Комментарий"  :name="'comment_text_' + post_id" class="add-comment-textarea"></textarea>

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
                commentStore,
            }
        },

        mounted() {
            
            
        },

        methods: {
            addComment(post_id) {
                let name_input_value = document.querySelector(`[name="comment_name_${post_id}"]`).value
                let email_input_value = document.querySelector(`[name="comment_email_${post_id}"]`).value
                let text_input_value = document.querySelector(`[name="comment_text_${post_id}"]`).value

                this.commentStore.addCommentToPost(this.post_id, {
                    name_input_value,
                    email_input_value,
                    text_input_value,
                })
            }
        },
    }
</script>

<style scoped lang="scss">
.add-comment-to-post {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .subtitle {
        /*width: 100%;*/
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .add-comment-textarea {
        width: 50%;
        /*margin-right: 1rem;*/
    }

    input,
    textarea {
        margin-bottom: 0.5rem;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>