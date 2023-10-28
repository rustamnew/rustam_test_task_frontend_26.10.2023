<script setup>
import {useUserStore} from '../../stores/userStore';

import ItemUser from './ItemUser.vue';

</script>

<template>

<div class="post-author" v-if="mode=='post-author-user'"> <!--Брать из стора, если нет в сторе то посылать запрос по id-->
    <ItemUser
    :id="user_id"
    :name="name"
    :mode="'post-author-user'"
    />
</div>

<div class="user-list" v-if="mode=='users-list'">
    <ItemUser v-for="item in this.userStore.users"
    :name="item.name"
    :mode="'user-list-item'"
    :id="item.id"
    />
</div>

    
</template>

<script>
    export default {
        props: {
            mode: String,
            user_id: Number,
            email: String,
            name: String,
        },
        data() {
            let userStore = useUserStore()
            

            return {
                userStore
                //posts: []
            }
        },

        mounted() {
            if (this.userStore.firstLoading == true) {
                this.userStore.loadData()
            }
            
            
        },

        methods: {

        },
    }
</script>

<style scoped lang="scss">

.user-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>