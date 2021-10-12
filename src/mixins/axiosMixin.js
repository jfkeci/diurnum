

export default {
    methods: {
        async executeGetRequest(method, params, logic) {
            await this.$axios
                .get(this.$BASE_URL_API(method), {
                    params: params,
                })
                .then((res) => { logic(res) }).catch((err) => console.log(err))
        },
        async executePostRequest(method, params, logic) {
            await this.$axios
                .post(this.$BASE_URL_API(method), {
                    params: params,
                })
                .then((res) => { logic(res) }).catch((err) => console.log(err))
        }
    }
}