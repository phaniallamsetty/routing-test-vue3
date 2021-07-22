<template>
    <div>
        <h1>Data Fetching Before</h1>
    </div>
</template>

<script>
export default {
    name: 'DataFetchingBefore',
    data() {
        return {
            post: null,
            error: null
        }
    },
    beforeRouteEnter() {
        //Logic to fetch data before the loading
    }
}
</script>