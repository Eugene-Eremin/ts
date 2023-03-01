<template>
    <div class="indent">
        <div>--------Here ts with Option Api--------</div>
        <p>{{ name }} - {{ age }}</p>
        <button @click="changeName('Zelda')">change name</button>
        <button @click="changeAge('30')">change age</button>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            name: 'Link',
            age: 25 as number | string
        }
    },
    methods: {
        changeName(name: string) {
            this.name = name
            return name
        },
        changeAge(age: number | string) {
            this.age = age
            return age
        }
    }
}
</script>

<style scoped>
.indent {
    margin-bottom: 10px;
}
</style>
