
<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { RouteLink } from '@/router/route-links';
import NavBar from '../../../shared/components/NavBar.vue'

import { characterRoute } from '../router'

const links: RouteLink[] = characterRoute.children!
.filter(route => (route.props as { visible: boolean }).visible )
.map( route => ({
    name: route.name as string,
    path: route.path,
    title: (route.props as {title: string, visible: boolean}).title
}))
</script>

<template>
    <div>
        <h1>Personajes</h1>
        <NavBar :show-icon=" false" :route-links="links"/>
        <RouterView/>
    </div>
</template>

<style scoped>

</style>