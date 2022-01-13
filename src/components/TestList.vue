<template>
    <div class="test-list" v-for="test in tests">
        <label for="test-number-input">{{test.number}}</label>
        <label for="test-value-input">{{test.value}}</label>
    </div>
</template>

<script>
    export default {
        props: {
            tests: {
                type: Array,
                required: true
            }
        }
    }
</script>
<style></style>
