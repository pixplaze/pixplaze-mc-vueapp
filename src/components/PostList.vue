<template>
    <h3>Список пользователей</h3>
    <div class="post-list">
        <post-item v-for="post in posts" :post="post"/>        
    </div>
</template>

<script>
    import PostItem from "@/components/PostItem"
    export default {
        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .post-item {
        color: teal;
        margin-top: 15px;
        padding: 15px;
        border: 2px solid teal;
    }
</style>
