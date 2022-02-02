<template>
    <form @submit.prevent>
        <h4>Создание профиля</h4>
        <label hidden for="post-name">Имя профиля</label>
        <my-input
            id="post-name"
            class="content-row"
            type="text"
            placeholder="Название"
            v-model="post.name"
        />
        <label hidden for="post-uuid">UUID</label>
        <my-input
            id="post-uuid"
            type="text"
            class="content-row"
            placeholder="Описание"
            v-model="post.uuid"
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
                if (this.post.name == '' || this.post.uuid == '') {
                    if (this.post.name == '') {
                        console.log('Заголовок поста не может быть пустым!');}
                    if (this.post.uuid == '') {
                        console.log('Тело поста не может быть пустым!');}
                    return;
                }
                this.post.id = Date.now();
                this.$emit('create', this.post);
                this.post = {
                    name: '',
                    uuid: ''
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
                   name: '',
                   uuid: ''
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
