<template>
    <n-config-provider :theme="theme">
        <MainView :on-swap-theme="swapTheme"></MainView>
    </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { darkTheme, lightTheme, NConfigProvider } from 'naive-ui';

import MainView from '@/components/MainView.vue';

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
    data() {
        return { theme: lightTheme, themeName: 'light' };
    },
    methods: {
        swapTheme() {
            if (this.themeName === 'light') {
                this.themeName = 'dark';
                this.theme = darkTheme;
            } else {
                this.themeName = 'light';
                this.theme = lightTheme;
            }
        },
    },
});
</script>
