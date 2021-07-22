<template>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{error}}</div>
    <div v-if="post">
        <h1>{{post}}</h1>
    </div>
</template>

<script>
export default {
    name: 'Data Fetching After',
    data() {
        return {
            loading: true,
            post: null,
            error: null
        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData()
            },
            { immediate: true }
        )
    },
    methods: {
        fetchData() {
            this.error = null;
            this.post = 'Post';
            this.loading = false;
        }
    }
}
</script>