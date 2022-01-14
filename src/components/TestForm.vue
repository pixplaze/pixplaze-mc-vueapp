<template>
    <form action="" @submit.prevent>
        <input id="test-number-input" v-model="test.number" v-on:input="onNumberInput" type="text">
        <input id="test-value-input" v-model="test.value" v-on:input="onValueInput" type="text">
        <button v-on:click="addRow">Add Row</button>
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
                this.$emit('update', this.test);
            },
            onValueInput(e) {
                this.test.value = e.target.value;
                this.$emit('update', this.test);
            },
            addRow(e) {
                this.$emit('add_row');
                this.test.number = '';
                this.test.value = '';
            }
        }
    }
</script>

<style></style>
