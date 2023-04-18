<template>
    <NCard title="Ajouter une personne">
        <NForm ref="formRef" :label-width="80" :model="formPerson" size="large" @keydown.enter="addPerson">
            <NFormItem label="Nom" path="name">
                <NInput v-model:value="formPerson.name" placeholder="Marine" />
            </NFormItem>
            <NFormItem label="Quantité crue" path="rawQuantity">
                <NSpace>
                    <NInputNumber v-model:value="formPerson.rawQuantity" placeholder="80" />
                    <NButton @click="addPerson"> Ajouter </NButton>
                </NSpace>
            </NFormItem>
        </NForm>
    </NCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NButton, NCard, NForm, NFormItem, NInput, NInputNumber, NSpace } from 'naive-ui';

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
        NSpace,
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
