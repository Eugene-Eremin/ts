<template>
    <div class="indent center">
        <div>----Here ts with Composition Api----</div>
        <div>{{ someNum }}</div>
        <Test />
        <p>{{ jobs[0].location }}</p>
        <div>----------------------App-----------------------</div>
    </div>
    <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
    </div>
    <JobList :jobs="jobs" :order="order" @clickBtn="clickBtn" />
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

import Test from './Test.vue'
import JobList from './JobList.vue';

import type Job from '@/types/Job';
import type OrderTerm from '@/types/OrderTerm'

const someNum = ref(3)

// someNum.value = 'sadf'
console.log(someNum.value)

const state = reactive({
    name: 'Link',
    age: 25 as number | string
})

// state.name = 999
state.age = '26'

const name = ref('Link')
const age = ref<number | string>(25)

const jobs = ref<Job[]>([
    { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
    { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
    { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
    { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
    { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
])

const clickBtn = (click: string | number): void => {
    console.log(click)
}

const order = ref<OrderTerm>('title')

const handleClick = (term: OrderTerm) => {
    order.value = term
}
</script>


<!-- Можно еще так -->
<!--
<script lang="ts">
import { ref } from 'vue';

import Test from './Test.vue'

import type Job from '@/types/Job';

export default {
    components: {
        Test
    },
    setup() {
        const some = ref(3)

        const state = reactive({
            name: 'Link',
            age: 25 as number | string
        })

        // state.name = 999
        state.age = '26' 

        const name = ref('Link')
        const age = ref<number | string>(25)

        const jobs = ref<Job[]>([
            { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
            { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
            { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
            { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
            { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
        ])

        return { some, ...toRefs(state), name, age, jobs }
    }
}
</script>
-->

<style scoped>
.center {
    text-align: center;
}

.indent {
    margin-bottom: 10px;
}

.order {
    text-align: center;
    margin-top: 20px;
}

button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}
</style>