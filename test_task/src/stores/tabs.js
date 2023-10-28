import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTabStore = defineStore('tabs', {

    state: () => {
        
        return {
            tab: 'posts' //posts, users
        }
    },

    actions: {
        
        changeTab(tab_name) {
            this.tab = tab_name
        },


    },
})