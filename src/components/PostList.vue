<template>
    <div class="content-row posts-list-wrapper" v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="posts-list">
            <post-item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>

    </div>
    <h2 v-else class="content-row" style="color: red">Список постов пуст пуст!</h2>
    <!--
    В данном случае, если условие не выполняется, элемент будет полностью удалён из DOM-дерева.
    Такое же условное представление моожет быть реализовано в виде v-show="<условие отображения>".
    Например, `v-show="posts.length === 0".
     -->
</template>

<script>
    import PostItem from "@/components/PostItem"
    export default {
        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style scoped>
    .posts-list-wrapper {
        overflow: hidden;
    }

    .posts-list-item {
        z-index: 0;
        position: relative;
        display: inline-block;
        margin-right: 10px;
    }

    /*
     * enter-active, leave-active, enter-from, leave-to, move -
     * модификаторы стилей vue,
     * Для того чтобы анимировать какой-либо элемент достаточно указать название
     * необходимого класса и через дефис модификатор его стилей, чотбы задать
     * особые стили по срабатыванию модификатора: .<classname>-<modificator>,
     * где `<classname>` название необходимого класса, а `<modificator>` -
     * название модификатора.
     * Например: `.posts-list-enter-active {}`
     */
    .posts-list-enter-active,
    .posts-list-leave-active {
        transition: all .3s ease;
    }

    .posts-list-enter-from,
    .posts-list-leave-to {
        opacity: 0;
        transform: translateX(50px);
    }

     .posts-list-move {
         transition: all 1s ease-in-out;
     }
</style>
