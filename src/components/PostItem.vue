<template>
    <div class="post-item">
        <div class="post-content">
            <div>{{index}}</div>
            <div><strong>Имя профиля: </strong>{{post.name}}</div>
            <div><strong>UUID: </strong>{{post.uuid}}</div>
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
            },
            index: [Number]
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
        background-color: #FFFFFF;
    }

    .post-buttons {
        display: flex;
    }
</style>
