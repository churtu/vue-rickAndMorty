<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue';
import { routeLinks } from './router/route-links';

</script>

<template>
  <div class="wrapper">
    <header>
      <NavBar title="BreakingBad" :routeLinks="routeLinks"/>
    </header>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
}
</style>
