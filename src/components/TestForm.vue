<template>
    <form action="" @submit.prevent>
        <input id="test-number-input" v-on:input="onNumberInput" v-bind:test="this.test.number" type="text">
        <input id="test-value-input" v-on:input="onValueInput" v-bind:test="this.test.value" type="text">
    </form>
</template>

<script>
    export default {
        data() {
            return {
                test: {
                    number: '',
                    value: ''
                }
            }
        },
        methods: {
            onNumberInput(e) {
                this.test.number = e.target.value;
                this.$emit('upd', this.test);
            },
            onValueInput(e) {
                this.test.value = e.target.value;
                this.$emit('upd', this.test);
            }
        }
    }
</script>

<style></style>
