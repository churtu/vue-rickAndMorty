<script setup lang="ts">
    import { toRef } from 'vue';
    import { useRouter } from 'vue-router';
    import type { Character } from '../interfaces/characters_response';

    const router = useRouter()
    const props = defineProps<{character: Character}>()
    const character = toRef(props, 'character')

    const goTo = () => {
        router.push({ name: 'character-id', params: { id: character.value.id }})
    }
</script>

<template>
    <div @click="goTo" class="character-card">
        <img :src="character.image" alt="">
        <h3>{{ character.name }}</h3>
    </div>
</template>


<style scoped>
.character-card{
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
img{
    width: 150px;
    border-radius: 5px 5px 0px 0px;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, .1);
    transition: box-shadow .5s ease-in-out;
}

img:hover{
    box-shadow: 0px 2px 10px rgba(255, 255, 255, .5);
}
</style>