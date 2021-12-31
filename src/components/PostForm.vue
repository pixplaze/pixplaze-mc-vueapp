<template>
    <form action="" @submit.prevent>
        <h4>Создание поста</h4>
        <label hidden for="post-title">Название поста</label>
        <input
            id="post-title"
            class="input"
            type="text"
            placeholder="Название"
            v-bind:value="post.title"
            v-on:input="post.title = $event.target.value"
        >
        <label hidden for="post-body">Описание поста</label>
        <input
            id="post-body"
            class="input"
            type="text"
            placeholder="Описание"
            :value="post.body"
            @input="post.body = $event.target.value"
        >
        <button
            class="btn"
            @click="createPost"
        >Создать</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

    .app {
        padding: 20px;
    }

    .input {
        width: 100%;
        margin-top: 15px;
        border: 1px solid teal;
        padding: 10px;
    }

    .btn {
        margin-top: 15px;
        padding: 10px;
        align-self: flex-end;
        background: none;
        border: 1px solid teal;
        color: teal;
    }
</style>
