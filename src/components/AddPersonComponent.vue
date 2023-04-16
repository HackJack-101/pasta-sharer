<template>
    <NCard title="Ajouter une personne">
        <NForm ref="formRef" :label-width="80" :model="formPerson" size="medium" @keydown.enter="addPerson">
            <NFormItem label="Nom" path="name">
                <NInput v-model:value="formPerson.name" placeholder="Marine" />
            </NFormItem>
            <NFormItem label="Quantité crue" path="rawQuantity">
                <NInputNumber v-model:value="formPerson.rawQuantity" placeholder="80" />
            </NFormItem>
            <NFormItem>
                <NButton @click="addPerson"> Ajouter </NButton>
            </NFormItem>
        </NForm>
    </NCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NCard, NForm, NFormItem, NInput, NInputNumber } from 'naive-ui';

import usePastaStore from '@/stores/pasta';

interface DataInterface {
    formPerson: {
        name: string | null;
        rawQuantity: number | null;
    };
}

export default defineComponent({
    components: {
        NButton,
        NCard,
        NForm,
        NFormItem,
        NInput,
        NInputNumber,
    },
    data(): DataInterface {
        return {
            formPerson: {
                name: null,
                rawQuantity: null,
            },
        };
    },
    methods: {
        addPerson() {
            if (this.formPerson.name && this.formPerson.rawQuantity) {
                const pastaStore = usePastaStore();
                pastaStore.addPerson(this.formPerson.name, this.formPerson.rawQuantity);

                this.formPerson = { name: null, rawQuantity: null };
            }
        },
    },
});
</script>

<style scoped></style>
