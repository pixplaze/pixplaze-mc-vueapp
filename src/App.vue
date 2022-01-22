<template>
    <div class="app">
        <div class="posts-block">
            <h1>Страница с постами</h1>
            <my-button
                @click="dialogVisible=true"
            >Создать пост</my-button>
            <my-dialog
                v-model:show="dialogVisible"
                :show="true"
            ><post-form @update:autoclosable="updateAutoclosable" @create="createPost"/>
            </my-dialog>
            <post-list :posts="posts" @remove="removePost"/>
        </div>
    </div>
</template>

<script>
    import PostForm from "./components/PostForm"
    import PostList from "@/components/PostList"

    export default {
        components: {
            PostForm, PostList,
        },
        data() {
            return {
                posts: [
                    {id: '1', title: 'Title 1', body: 'Body 1'}
                ],
                dialogVisible: false,
                autoclosable: false
            }
        },
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
            }
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

        .test-block {
            width: 100%;
        }

        .app {
            padding: 20px;
            display: flex;
        }
</style>
