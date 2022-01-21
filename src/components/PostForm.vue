<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <label hidden for="post-title">Название поста</label>
        <my-input
            id="post-title"
            type="text"
            placeholder="Название"
            v-model="post.title"
        />
        <label hidden for="post-body">Описание поста</label>
        <my-input
            id="post-body"
            type="text"
            placeholder="Описание"
            v-model="post.body"
        />
        <my-button @click="createPost">Создать</my-button>
    </form>
</template>

<script>
    export default {
         data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                if (this.post.title == '' || this.post.body == '') {
                    if (this.post.title == '') {
                        console.log('Заголовок поста не может быть пустым!');}
                    if (this.post.body == '') {
                        console.log('Тело поста не может быть пустым!');}
                    return;
                }
                this.post.id = Date.now();
                this.$emit('create', this.post);
                this.post = {
                    title: '',
                    body: ''
                };
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

    .btn {
        margin-top: 15px;
        align-self: flex-end;
    }
</style>
