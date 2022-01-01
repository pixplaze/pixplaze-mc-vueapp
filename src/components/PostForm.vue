<template>
    <form action="" @submit.prevent>
        <h4>Создание поста</h4>
        <label hidden for="post-title">Название поста</label>
        <input
            id="post-title"
            class="input"
            type="text"
            placeholder="Название"
            v-model="post.title"
        >
        <label hidden for="post-body">Описание поста</label>
        <input
            id="post-body"
            class="input"
            type="text"
            placeholder="Описание"
            v-model="post.body"
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
    },
    methods: {
        createPost() {
            if (this.post.title == '') {
                console.log('Заголовок поста не может быть пустым!');
            } else if (this.post.body == '') {
                console.log('Тело поста не может быть пустым!');
            } else {
                this.post.id = Date.now(),
                this.$emit('create', this.post),
                this.post = {
                    title: '',
                    body: ''
                }
            }
        },
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
