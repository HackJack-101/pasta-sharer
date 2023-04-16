<template>
    <NCard title="Partager">
        <NForm ref="formRef" inline :label-width="80" :model="form" size="medium" @keydown.enter="cook">
            <NFormItem label="Résultat de la cuisson" path="cookedQuantity">
                <NInputNumber v-model:value="form.cookedQuantity" placeholder="415"></NInputNumber>
            </NFormItem>
            <NFormItem>
                <NButton @click="cook"> Partager </NButton>
            </NFormItem>
        </NForm>
    </NCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NCard, NForm, NFormItem, NInputNumber } from 'naive-ui';

import usePastaStore from '@/stores/pasta';

interface DataInterface {
    form: {
        cookedQuantity?: number;
    };
}

export default defineComponent({
    components: {
        NButton,
        NCard,
        NForm,
        NFormItem,
        NInputNumber,
    },
    data(): DataInterface {
        return {
            form: {
                cookedQuantity: undefined,
            },
        };
    },
    methods: {
        cook() {
            if (this.form.cookedQuantity) {
                const pastaStore = usePastaStore();
                pastaStore.cook(this.form.cookedQuantity);
            }
        },
    },
});
</script>

<style scoped></style>
