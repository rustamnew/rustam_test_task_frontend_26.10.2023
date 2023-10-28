<script setup>
import {useCommentStore} from '../../stores/commentStore'
import ItemComment from './ItemComment.vue';
import AddComment from './AddComment.vue';
</script>

<template>

<div class="post-comments" v-if="mode=='post-comments'">
    <div class="comment-expand">
        <span class="comments-title">Комментарии</span>
        <button @click="expandComments($event)" class="comment-expand-button">(Раскрыть)</button>
    </div>
    

    <div class="list" :class="{active: this.expanded}">
        <ItemComment v-for="item in commentStore.comments[post_id]" 
        :comment_id="item.id" 
        :email="item.email" 
        :name="item.name" 
        :body="item.body" 
        :mode="'post-comment'"/>
    </div>

    <div class="add-comment" :class="{active: this.expanded}">
        <AddComment :post_id="post_id"/>
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
            let expanded = false
            return {
                expanded,
                commentStore
            }
        },

        created() {
            if (this.post_id) {
                this.commentStore.getPostComments(this.post_id)
            }
            
        },
        methods: {
            expandComments(event) {
                let button = event.target

                
                if (this.expanded === false) {
                    this.expanded = true
                    button.innerHTML = '(Скрыть)'
                } else {
                    this.expanded = false
                    button.innerHTML = '(Раскрыть)'
                }
                
            }
        },
    }
</script>

<style scoped lang="scss">

.comment-expand {
    display: flex;
    margin-bottom: 1rem;

    .comment-expand-button {
        background: none;
        border: none;
        padding: 0;
        color: #000;
        display: flex;
        border-radius: 0;
        font-size: 1rem;
        font-weight: 500;
        appearance: none;
        font-style: unset;
        line-height: 1.6;
    }
}
    .comments-title {
        display: flex;
        font-size: 1rem;
        margin-right: 0.5rem;
    }

    .add-comment {
        display: none;

        &.active {
            display: initial;
        }
    }
    .list {
        display: none;

        &.active {
            display: initial;
        }
    }
</style>