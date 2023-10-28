<script setup>
    import Main from './components/Main.vue'
</script>

<script>
    export default {
        data() {
            return {

            }
        },

        mounted() {

        },

        methods: {

        },
    }
</script>

<template>
    <Main />

</template>

<style lang="scss"> 

    body {
        background-color: rgb(233, 221, 207);
    }

    button {
        display: inline-flex;
        text-align: center;
        padding: 12px 20px;
        background-color: coral;
        color: #fff;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        border: 1px solid transparent;
        font-size: 1rem;
        cursor: pointer;
    }


    input {
        border-radius: 10px;
        border: 1px solid #767676;
        padding: 0.5rem;

        &:focus {
            
            outline: none;
        }
    }

    textarea {
        border-radius: 10px;
        resize: vertical;
        padding: 0.5rem;
        min-width: 20rem;
        min-height: 3rem;

        font-family: 'Open Sans', sans-serif;
        
        &:focus {
            
            outline: none;
        }
    }
</style>
