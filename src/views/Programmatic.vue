<template>
    <div>
        <h1>Programmatic Home</h1>
        <button class="btn btn-link" @click="oneEvent()">One</button> |
        <button class="btn btn-link" @click="twoEvent()">Two</button> |
        <button class="btn btn-link" @click="threeEvent()">Three</button> |
        <button class="btn btn-link" @click="fourEvent()">Four</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'programmatic',
    methods: {
        oneEvent() {
            this.$router.push({ path: '/programmatic/one'});
        },
        twoEvent() {
            this.$router.push('/programmatic/two');
        },
        threeEvent() {
            this.$router.push('/programmatic/three');
        },
        fourEvent() {
            this.$router.push('/programmatic/four');
        }
    }
}
</script>