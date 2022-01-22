<template>
    <select title="sort-type" name="sort-type" v-model="modelValue" @change="changeOption">
        <option value="" disabled>Выберите из списка</option>
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
                this.$emit('update:modelValue', e.target.value);
            }
        }
    }
</script>

<style></style>
