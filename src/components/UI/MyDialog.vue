<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <!--
        @click.stop останавливает распространение события на элемент в котором объявлено
        -->
        <div @click.stop class="dialog-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'my-dialog',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false);
            }
        }
    }
</script>
<style scoped>
    .dialog {
        z-index: 1;
        position: fixed;
        display: flex;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0, 0.3);
    }

    .dialog-content {
        margin: auto;
        padding: 20px;
        background: white;
        border-radius: 15px;
        min-height: 50px;
        min-width: 300px;
    }
</style>
