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
                if (this.tabStore.tab == 'posts') {
                    if ( window.innerHeight + Math.round(window.scrollY) + 1 >= document.body.offsetHeight ) {
                        this.postStore.loadNextPage()
                    }
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
                <h3 class="tab-header">Посты</h3> 

                <Posts :mode="tabStore.tab"/>
            </div>

            <div class="tab-item users" :class="{active: tabStore.tab == 'users'}">
                <h3 class="tab-header">Пользователи</h3>

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

        .tabs-buttons {
            position: fixed;
            background-color: bisque;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 1rem 0;


            .item {
                transition: border-color 0.5s;
                margin-right: 1rem;
                &:last-child {
                    margin-right: 0;
                }
            }
            .item.active {
                border-color: #fff;
                
            }
        }

        .tabs {
            margin-top: 6rem;
            max-width: 40rem;

            

            .tab-item {
                display: none;
                flex-direction: column;
                align-items: center;


                &.active {
                    display: flex;
                }


                .tab-header {
                    font-size: 2rem;
                    margin-bottom: 2rem;
                }
            }
        }
    }

</style>
