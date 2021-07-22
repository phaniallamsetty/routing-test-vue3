<template>
    <div>
        <h2>Hello {{user.firstName}} {{user.lastName}}</h2>
        <h3>Email: {{user.email}}</h3>
    </div>
</template>

<script>
import userData from '../../userdata.json';

export default {
    name: 'User',
    computed: {
        userId() {
            return parseInt(this.$route.params.id);
        },
        user() {
            return userData.users.find(user => user.id === this.userId);
        }
    }
}
</script>