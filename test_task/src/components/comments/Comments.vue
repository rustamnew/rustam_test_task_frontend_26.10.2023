<script setup>
import {useCommentStore} from '../../stores/commentStore'
import ItemComment from './ItemComment.vue';
</script>

<template>

Комментарии

<div class="post-comments" v-if="mode=='post-comments'">

    <div class="list">
        <ItemComment v-for="item in commentStore.comments[post_id]" 
        :comment_id="item.id" 
        :email="item.email" 
        :name="item.name" 
        :body="item.body" 
        :mode="'post-comment'"/>
    </div>
    
</div>


    
</template>

<script>
    export default {
        props: {
            post_id: Number,
            mode: String
        },
        data() {
            let commentStore = useCommentStore()

            return {
                commentStore
                //posts: []
            }
        },

        created() { //mounted
            if (this.post_id) {
                this.commentStore.getPostComments(this.post_id)
            }
            
        },

        methods: {

        },
    }
</script>

<style scoped>

</style>