<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button',
    }
</script>

<style scoped>
    .btn {
        padding: 10px;
        background: none;
        border: 1px solid teal;
        color: teal;
    }
    /*
        color: white;
        background-color: #71E561;
        border-radius: 10px;
        border: none;
        border-bottom: 5px solid #6AD061;
    }

    .btn:active {
        border-bottom: 2px solid #6AD061;
        transform: translateY(3px);
        transition: all 0.1s ease;
    }
    */
</style>
