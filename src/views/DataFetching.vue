<template>
    <div>
        <h1>Data Fetching</h1>
        <router-link to="/dataFetching/before">Before</router-link> |
        <router-link to="/dataFetching/after">After</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DataFetching'
}
</script>