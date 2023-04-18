<template>
    <NLayout position="absolute">
        <NLayoutHeader style="height: 48px">
            <div class="flex items-center h-full">
                <span class="text-center text-2xl font-bold w-screen">Pasta Sharer</span>
            </div>
        </NLayoutHeader>
        <NLayoutContent position="absolute" style="top: 48px; bottom: 64px" content-style="padding: 10px">
            <NSpace vertical>
                <PersonComponent v-for="person in persons" :key="person.index" :person="person"></PersonComponent>

                <AddPersonComponent></AddPersonComponent>

                <CookComponent></CookComponent>
            </NSpace>
        </NLayoutContent>

        <NLayoutFooter position="absolute" style="height: 64px">
            <NCard>
                <NSpace>
                    <NButton size="small" @click="onSwapTheme">
                        <NIcon><DarkModeOutlined></DarkModeOutlined></NIcon>
                    </NButton>
                    <NButton size="small" @click="reset"> Reset </NButton>
                </NSpace>
            </NCard>
        </NLayoutFooter>
    </NLayout>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { mapState } from 'pinia';
import { DarkModeOutlined } from '@vicons/material';

import AddPersonComponent from '@/components/AddPersonComponent.vue';
import CookComponent from '@/components/CookComponent.vue';
import PersonComponent from '@/components/PersonComponent.vue';
import usePastaStore from '@/stores/pasta';

import { NIcon, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NCard, NSpace, NButton } from 'naive-ui';

interface DataInterface {
    name?: string;
    rawQuantity?: number;
}

export default defineComponent({
    components: {
        AddPersonComponent,
        CookComponent,
        DarkModeOutlined,
        NButton,
        NCard,
        NIcon,
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
        reset() {
            const pastaStore = usePastaStore();
            pastaStore.reset();
        },
    },
});
</script>
