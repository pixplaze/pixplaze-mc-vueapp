<template>
    <div class="post-item">

        <div class="post-content">
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>
        </div>
        <div class="post-buttons">
            <my-button
                class="delete-post-button"
                @click="deletePost"
            >Удалить</my-button>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        },
        methods: {
            deletePost(e) {
                this.$emit('delete_post', e.target.id);
            }
        }
    }
</script>
<style></style>
