<template>
    <div class="app">
        <div class="posts-block">
            <post-form @create="createPost"/>
            <post-list :posts="posts"/>
        </div>
        <div class="test-block">
            <test-form @update="update" @add_row="addRow"/>
            <test-list v-bind:tests="tests"/>
        </div>
    </div>
</template>

<script>
    import PostForm from "./components/PostForm"
    import PostList from "@/components/PostList"
    import TestForm from "@/components/TestForm"
    import TestList from "@/components/TestList"

    export default {
        components: {
            PostForm, PostList,
            TestForm, TestList,
        },
        data() {
            return {
                page: {rows: 0},
                posts: [
                    {id: 1, title: 'Title 1', body: 'Body 1'}
                ],
                tests: [
                    {number: 'fdg', value: 'dfg'}
                ],
            }
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
            },
            update(test) {
                console.log('updated!');
                this.tests[this.page.rows].number = test.number;
                this.tests[this.page.rows].value = test.value;
            },
            addRow(e) {
                this.page.rows += 1;
                console.log('rows: ' + this.page.rows);

                this.tests.push({number: '', value: ''});
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
