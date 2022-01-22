<template>
    <div class="app">
        <div class="posts-block">
            <h1>Страница с постами</h1>
            <div class='app-buttons content-row'>
                <my-button
                    @click="dialogVisible=true"
                >Создать пост</my-button>
                <my-select v-model="selectedSort" :options="sortOptions"/>
            </div>
            <my-dialog
                v-model:show="dialogVisible"
                :show="true"
            ><post-form @update:autoclosable="updateAutoclosable" @create="createPost"/>
            </my-dialog>
            <post-list v-if="!isPostsLoading" :posts="posts" @remove="removePost"/>
            <div class="content-row" v-else>Идёт загрузка...</div>
        </div>
    </div>
</template>

<script>
    import PostForm from "./components/PostForm"
    import PostList from "@/components/PostList"
    import axios from "axios"

    export default {
        components: {
            PostForm, PostList,
        },
        // Секция методов компонента
        methods: {
            createPost(post) {
                this.posts.push(post);
                if (this.autoclosable === true) {
                    this.dialogVisible = false;
                }
            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id != post.id);
                console.log('remove event handled!');
            },
            updateAutoclosable(checked) {
                console.log('autolosable event catched!');
                this.autoclosable = checked;
            },
            async fetchPosts() {
                try {
                    this.isPostsLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;
                    console.log(response.data);
                } catch (e) {
                    alert('Ошибка обращения к API!');
                } finally {
                    this.isPostsLoading = false;
                }
            }
        },
        // Секция глобальных функций
        data() {
            return {
                posts: [
                    {id: '1', title: 'Title 1', body: 'Body 1'}
                ],
                dialogVisible: false,
                autoclosable: false,
                isPostsLoading: true,
                selectedSort: '',
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]
            }
        },
        mounted() {
            this.fetchPosts();
        }
    }
    </script>
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .posts-block {
            width: 100%;
        }

        .content-row {
            margin-top: 15px;
        }

        .app {
            padding: 20px;
            display: flex;
        }

        .app-buttons {
            display: flex;
            justify-content: space-between;
        }
</style>
