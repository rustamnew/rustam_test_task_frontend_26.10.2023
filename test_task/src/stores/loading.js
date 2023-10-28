import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {

    state: () => {
        
        return {
            loading: false
        }
    },

    actions: {
        
        loadingShow() {
            this.loading = true
        },
        loadingHide() {
            this.loading = false
        },


    },
})