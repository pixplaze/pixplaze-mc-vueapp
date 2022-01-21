<template>
    <div class="post-item">
        <div class="post-content">
            <div>{{post.id}}</div>
            <div><strong>Название: </strong>{{post.title}}</div>
            <div><strong>Описание: </strong>{{post.body}}</div>
        </div>
        <div class="post-buttons">
            <my-button
                class="delete-post-button"
                @click="$emit('remove', post)"
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
        }
    }
</script>
<style>
    .post-item {
        color: teal;
        margin-top: 15px;
        padding: 15px;
        border: 2px solid teal;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .post-buttons {
        display: flex;
    }
</style>
