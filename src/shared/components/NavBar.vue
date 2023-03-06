<script lang="ts" setup>
import type { RouteLink } from '@/router/route-links';

interface Props {
    title?: string;
    routeLinks?: RouteLink[];
    showIcon?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    showIcon: true,
    routeLinks: ()  => []
});
</script>

<template>
    <nav>
        <img v-if="props.showIcon" src="@/assets/logo.svg" alt="vue-logo" height="25" width="25">
        <span v-if="props.title">{{ props.title }}</span>
        <RouterLink v-for="route in props.routeLinks" :key="route.name" :to="{name: route.name }">{{ route.title }}</RouterLink>
    </nav>
</template>


<style scoped>
nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}</style>