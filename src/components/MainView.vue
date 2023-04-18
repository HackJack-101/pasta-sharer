<template>
    <NLayout position="absolute">
        <NLayoutHeader>
            <div class="text-center text-2xl font-bold">Pasta Sharer</div>
        </NLayoutHeader>
        <NLayoutContent content-style="padding: 10px">
            <NSpace vertical>
                <PersonComponent v-for="person in persons" :key="person.index" :person="person"></PersonComponent>

                <AddPersonComponent></AddPersonComponent>

                <CookComponent></CookComponent>
            </NSpace>
        </NLayoutContent>

        <NLayoutFooter position="absolute">
            <NCard>
                <NSpace>
                    <NButton @click="onSwapTheme"> Changer de thème </NButton>
                </NSpace>
            </NCard>
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
    computed: {
        ...mapState(usePastaStore, {
            persons: 'persons',
        }),
    },
    data(): DataInterface {
        return {
            name: undefined,
            rawQuantity: undefined,
        };
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
    props: {
        onSwapTheme: Function as PropType<(e: MouseEvent) => void>,
    },
});
</script>
