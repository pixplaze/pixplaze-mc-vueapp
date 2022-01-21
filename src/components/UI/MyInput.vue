<template>
    <input
        class="input"
        type="text"
        :value="value"
        @input="updateInput"
    >
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            value: [String, Number],
            myvalue: [String, Number],
        },
        methods: {
            updateInput(e) {
                //this.$emit('update:value', e.target.value);
                this.$emit('update:myvalue', e.target.value);
            }
        }
    }
</script>

<style scoped>
    .input {
        width: 100%;
        margin-top: 15px;
        border: 1px solid teal;
        padding: 10px;
    }
</style>
