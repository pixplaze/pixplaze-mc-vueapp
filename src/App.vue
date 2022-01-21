<template>
    <div class="app">
        <div class="posts-block">
            <post-form @create="createPost"/>
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
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
            },
            removePost(post) {
                this.posts = this.posts.filter(p => p.id != post.id);
                console.log('remove event handled!');
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
