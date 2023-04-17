<template>
    <NLayout position="absolute">
        <NLayoutHeader>
            <h1>Pasta Sharer</h1>
        </NLayoutHeader>
        <NLayoutContent>
            <PersonComponent v-for="person in persons" :key="person.index" :person="person"></PersonComponent>

            <AddPersonComponent></AddPersonComponent>

            <CookComponent></CookComponent>
        </NLayoutContent>

        <NLayoutFooter>
            <n-card>
                <n-space>
                    <n-button @click="onSwapTheme"> Changer de thème </n-button>
                </n-space>
            </n-card>
        </NLayoutFooter>
    </NLayout>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { mapState } from 'pinia';

import AddPersonComponent from '@/components/AddPersonComponent.vue';
import CookComponent from '@/components/CookComponent.vue';
import PersonComponent from '@/components/PersonComponent.vue';
import usePastaStore from '@/stores/pasta';

import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NCard, NSpace, NButton } from 'naive-ui';

interface DataInterface {
    name?: string;
    rawQuantity?: number;
}

export default defineComponent({
    components: {
        AddPersonComponent,
        CookComponent,
        NButton,
        NCard,
        NLayout,
        NLayoutContent,
        NLayoutFooter,
        NLayoutHeader,
        NSpace,
        PersonComponent,
    },
    props: {
        onSwapTheme: Function as PropType<(e: MouseEvent) => void>,
    },
    data(): DataInterface {
        return {
            name: undefined,
            rawQuantity: undefined,
        };
    },
    computed: {
        ...mapState(usePastaStore, {
            persons: 'persons',
        }),
    },
    methods: {
        addPerson() {
            if (this.name && this.rawQuantity) {
                const pastaStore = usePastaStore();
                pastaStore.addPerson(this.name, this.rawQuantity);

                this.name = undefined;
                this.rawQuantity = undefined;
            }
        },
    },
});
</script>
