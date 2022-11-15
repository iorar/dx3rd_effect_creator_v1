const isValFree = {
    data() {
        return {
            val: 'default'
        }
    },
    methods: {
        valSelect: function (e) {
            this.val = e.target.value
        }
    },
    computed: {
        isFree() {
            return this.val === 'free'
        }
    }
}

Vue.createApp(isValFree).mount('#timing-box')
Vue.createApp(isValFree).mount('#difficulty-box')
Vue.createApp(isValFree).mount('#target-box')
Vue.createApp(isValFree).mount('#range-box')
Vue.createApp(isValFree).mount('#limit-box')