<template>
    <n-config-provider :theme="theme">
        <MainView :on-swap-theme="swapTheme"></MainView>
    </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { darkTheme, lightTheme, NConfigProvider, useOsTheme } from 'naive-ui';

import MainView from '@/components/MainView.vue';

interface DataInterface {
    userChoice: 'dark' | 'light' | undefined;
}

export default defineComponent({
    components: {
        MainView,
        NConfigProvider,
    },
    setup() {
        return {
            darkTheme,
            lightTheme,
        };
    },
    data(): DataInterface {
        return { userChoice: undefined };
    },
    computed: {
        theme(): any {
            const osThemeRef = useOsTheme();
            if (this.userChoice === 'light') {
                return lightTheme;
            }
            if (this.userChoice === 'dark') {
                return darkTheme;
            }

            return osThemeRef.value === 'dark' ? darkTheme : lightTheme;
        },
    },
    methods: {
        swapTheme() {
            if (this.userChoice === 'light') {
                this.userChoice = 'dark';
            } else {
                this.userChoice = 'light';
            }
        },
    },
});
</script>
