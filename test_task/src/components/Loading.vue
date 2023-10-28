<script setup>

import {useLoadingStore} from '../stores/loading';

</script>



<template>

<div class="loading" :class="{active: loadingStore.loading}">

    <svg fill="#000000" viewBox="0 0 24 24" id="loading" data-name="Flat Line"
        xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
        <path id="secondary" d="M16,18v3H8V18a6,6,0,0,1,2.4-4.8L12,12l1.6,1.2A6,6,0,0,1,16,18ZM16,6V3H8V6a6,6,0,0,0,2.4,4.8L12,12l1.6-1.2A6,6,0,0,0,16,6Z" style="fill: rgb(44, 169, 188); stroke-width: 2;"></path>
        <path id="primary" d="M16,18v3H8V18a6,6,0,0,1,2.4-4.8L12,12l1.6,1.2A6,6,0,0,1,16,18ZM16,6V3H8V6a6,6,0,0,0,2.4,4.8L12,12l1.6-1.2A6,6,0,0,0,16,6ZM6,21H18M6,3H18" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
    </svg>

</div>




</template>



<script>

export default {

    data() {
        let loadingStore = useLoadingStore()

        return {
            loadingStore    
        }
    }

}

</script>

<style scoped lang="scss">


@-moz-keyframes spin { 
    100% { -moz-transform: rotate(-360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(-360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(-360deg); 
        transform:rotate(-360deg); 
    } 
}




.loading {
    height: 5rem;
    display: none;

    &.active {
        display: flex;
    }

    svg {
        -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
        height: 100%;
    }

}
</style>


  