<template>
    <div>
        <h1>Nested {{$route.params.id}}</h1>
        <router-link to="/nested">Nested</router-link> | 
        <router-link to="/nested/one">Nested One</router-link> | 
        <router-link to="/nested/two">Nested Two</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Nested'
}
</script>