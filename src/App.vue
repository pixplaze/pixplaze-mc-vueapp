<template>
    <div class="app">
        <div class="posts-block">
            <h1>Страница с постами</h1>
            <div class='app-buttons content-row'>
                <div
                    class="button-select-page"
                    v-for="page_number in totalPages"
                    :key="page_number"
                    :class="{
                        'button-current-page': page_number === page
                    }"
                    @click="changePage(page_number)"
                >{{page_number}}
                </div>
                <my-input
                    v-model="searchQuery"
                    placaholder="Найти"
                />
                <my-button
                    @click="dialogVisible=true"
                >Создать пост</my-button>
                <my-select v-model="selectedSort" :options="sortOptions"/>
            </div>
            <my-dialog
                v-model:show="dialogVisible"
                :show="true"
            ><post-form v-model:autoclosable="autoclosable" @create="createPost"/>
            </my-dialog>
            <post-list v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove="removePost"/>
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
            changePage(page_number) {
                this.page = page_number;
            },
            async fetchPosts() {
                try {
                    this.isPostsLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }});
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
                    this.posts = response.data;
                    console.log(response.data);
                } catch (e) {
                    alert('Ошибка обращения к API!');
                } finally {
                    this.isPostsLoading = false;
                }
            }
        },
        // Секция свойств-наблюдателей
        // Такие свойства запускаются столько раз, сколько изменяется
        // состояние объекта слежения.
        // Названия таких свойств должны совпадать с названием полей,
        // за которыми они следят.
        watch: {
            /*
            selectedSort(newValue) {
                console.log('Sorting by watch property...');
                this.posts.sort((post1, post2) => {
                    return post1[newValue]?.localeCompare(post2[this.selectedSort]);
                    // В данном случае newValue и this.selectedSort - одно и то же
                });
            },
            // Для того чтобы следить не только за изменением значения
            // самого объекта, но и за внутренним его состоянием (содержимым),
            // необходимо создать данную конструкцию с `handler()` и значением
            // параметра `deep: true`.
            posts: {
                handler(newValue) {
                    console.log(newValue);
                },
                deep: true
            }
            */
            page() {
                this.fetchPosts();
            }
        },
        // Секция вычисляемых свойств
        // Такие свойства (функции) запускаются только один раз для вычисления
        // возвращаемого значения и кэшируют результат. Вызываются повторно
        // только в случае, если св-во от которого зависит результат функции
        // (исходные данные) изменяются.
        // Такие свойства могут иметь любые названия.
        // Такие поля могут использоваться как неизменяемые свойства
        // (вызываются как свойства а не функции)
        computed: {
            sortedPosts() {
                // Возвращается уже обработанная копия исходных данных.
                console.log('Sorting by computed property...');
                return [...this.posts].sort((post1, post2) => {
                    return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
                });
            },
            sortedAndSearchedPosts() {

                if (!this.selectedSort || this.selectedSort === 'title') {
                    return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
                } else {
                    return this.sortedPosts.filter(post => post.body.toLowerCase().includes(this.searchQuery.toLowerCase()));
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
                autoclosable: true,
                isPostsLoading: true,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]
            }
        },
        mounted() {
            this.fetchPosts();
        },
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

        .app-buttons .btn {
            min-width: 150px;
        }

        .app-buttons input {
            padding-top: 0;
            padding-bottom: 0;
        }

        .button-select-page {
            width: 40px;
            height: 40px;
            min-width: 40px;
            min-height: 40px;
            border: 1px solid teal;
            border-radius: 5px;
            padding: 10px;
            text-align: center;
            margin-right: 5px;

            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            cursor: pointer;
        }

        .button-current-page {
            background-color: teal;
            color: white;
        }
</style>
