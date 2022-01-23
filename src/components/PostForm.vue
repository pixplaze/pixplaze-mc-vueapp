<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <label hidden for="post-title">Название поста</label>
        <my-input
            id="post-title"
            class="content-row"
            type="text"
            placeholder="Название"
            v-model="post.title"
        />
        <label hidden for="post-body">Описание поста</label>
        <my-input
            id="post-body"
            type="text"
            class="content-row"
            placeholder="Описание"
            v-model="post.body"
        />
        <div class="form-buttons">
            <div class="content-row autoclosable-checkbox-wrapper">
                <label for="autoclosable-checkbox">Закрыть после добавления</label>
                <input id="autoclosable-checkbox" type="checkbox" :checked="autoclosable" @input="updateAutoclosable">
            </div>
            <my-button class="content-row" @click="createPost">Создать</my-button>
        </div>
    </form>
</template>

<script>
    export default {
        props: {
            autoclosable: {
                type: Boolean,
                required: true
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
            updateAutoclosable(e) {
                this.$emit('update:autoclosable', e.target.checked);
            }
        },
        watch: {},
        data() {
           return {
               post: {
                   title: '',
                   body: ''
               },
           }
       },
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

    .autoclosable-checkbox-wrapper {
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
    }

    #autoclosable-checkbox {
        margin-top: auto;
    }
</style>
