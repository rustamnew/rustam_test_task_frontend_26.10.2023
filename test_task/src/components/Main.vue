<script setup>
    import Posts from './posts/Posts.vue'
    import Users from './users/Users.vue'

    import {useTabStore} from '../stores/tabs';
    import {usePostStore} from '../stores/postStore';
</script>

<script>
    export default {
        data() {
            let tabStore = useTabStore()
            let postStore = usePostStore()

            return {
                tabStore,
                postStore
            }
        },

        created() {
            window.addEventListener('scroll', () => {
                this.onScroll()
            })
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            changeTab(e) {
                let tab = e.target.getAttribute('data-tab')
                this.tabStore.changeTab(tab)
            },


            onScroll () {

                if ( window.innerHeight + Math.round(window.scrollY) + 1 >= document.body.offsetHeight ) {
                    this.postStore.loadNextPage()
                }

            }

        },
    }
</script>

<template>
    <div class="wrapper">
        <div class="tabs-buttons">
            <button class="item" :class="{active: tabStore.tab == 'posts'}" data-tab="posts" @click="changeTab($event)">Посты</button>
            <button class="item" :class="{active: tabStore.tab == 'users'}" data-tab="users" @click="changeTab($event)">Пользователи</button>
        </div>

        <div class="tabs"> <!--реализация без роутинга и v-if, v-show -->
            <div class="tab-item posts" :class="{active: tabStore.tab == 'posts'}">
                <h3>Посты</h3> 

                <Posts :mode="tabStore.tab"/>
            </div>

            <div class="tab-item users" :class="{active: tabStore.tab == 'users'}">
                <h3>Пользователи</h3>

                <Users :mode="'users-list'"/>
            </div>
        </div>
    </div>

    

</template>

<style lang="scss"> 

    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        width: 100%;
        /*height: 100vh;

        //height: 100%;
        overflow-y: auto;*/
        

        .tabs-buttons {
            .item.active {
                border-color: blue;
                transition: border-color 0.5s;
            }
        }

        .tabs {
            max-width: 40rem;

            

            .tab-item {
                display: none;
                flex-direction: column;
                align-items: center;
                

                &.active {
                    display: flex;
                }
            }
        }
    }

</style>
