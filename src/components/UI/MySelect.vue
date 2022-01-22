<template>
    <select name="sort-type" id="" v-model="modelValue" @change="changeOption">
        <option value="none" disabled>Выберите из списка</option>
        <option
            name="sort-type"
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >{{option.name}}</option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(e) {
                console.log(e);
                console.log(e.target.value);
                this.$emit('update:modelValue', e.target.value);
            }
        }
    }
</script>

<style></style>
