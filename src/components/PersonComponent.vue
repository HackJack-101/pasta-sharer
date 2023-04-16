<template>
    <NCard :title="person.name">
        <div>Quantité avant cuisson : {{ person.rawQuantity }} unités</div>
        <div>Quantité après cuisson : {{ person.cookedQuantity }} unités</div>
    </NCard>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Person } from '@/stores/pasta';

import { NCard } from 'naive-ui';

export default defineComponent({
    components: { NCard },
    props: {
        person: { type: Object as PropType<Person>, required: true },
    },
});
</script>
