<template>
    <div class="job-list">
        <p>Ordered by {{ order }}</p>
        <ul>
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{ job.title }} in {{ job.location }}</h2>
                <div class="salary">
                    <p>{{ job.salary }} rupees</p>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem omnis voluptatum eius doloremque optio
                        iusto sequi dignissimos. Pariatur earum assumenda dolores possimus quidem quam, reprehenderit
                        aliquid consequuntur amet non facere.</p>
                </div>
                <div>
                    <button @click="clickBtn">test button</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// Работает без -
import type { PropType } from 'vue'
import type Job from '@/types/Job'
import type OrderTerm from '@/types/OrderTerm';

import { ref, computed } from 'vue'
import type { Ref } from 'vue';

const props = defineProps({
    jobs: {
        // Работает без "as PropType<Job[]>"
        type: Array as PropType<Job[]>,
        required: true
    },
    order: {
        type: String as PropType<OrderTerm>,
        required: true
    }
})

const emit = defineEmits(['clickBtn'])

const clickBtn = () => {
    const click: Ref<string | number> = ref('clickStr')
    emit('clickBtn', click)
}

const orderedJobs = computed(() => {
    console.log([...props.jobs])
    return [...props.jobs].sort((a: Job, b: Job) => {
        console.log(a)
        console.log(b)
        return a[props.order] > b[props.order] ? 1 : -1
    })
})

</script>

<!-- 
<script lang="ts">
import type { PropType } from 'vue'
import type Job from '@/types/Job'

export default {
    props: {
        jobs: {
            type: Array as PropType<Job[]>,
            required: true
        }
    },
    setup(props) {
        console.log(props.jobs)
    },
}
</script>
-->

<style scoped>
.job-list {
    max-width: 960px;
    margin: 40px auto;
}

.job-list ul {
    padding: 0;
}

.job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
}

.job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
}

.salary {
    display: flex;
}

.salary img {
    width: 30px;
}

.salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
}
</style>