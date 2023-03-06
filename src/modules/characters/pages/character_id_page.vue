
<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useCharacter from '../composables/useCharacter';

defineProps<{title: string, visible:boolean}>();
const route = useRoute();
const router = useRouter();
const { id } = route.params as { id: string };

const { character, hasError, errorMessage, isLoading} = useCharacter( id );
watchEffect(() => {
    if(!isLoading.value && hasError.value){
        router.replace({name:'character-list'})
     }
})

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-else-if="hasError">{{ errorMessage }}</h1>
    <template v-else-if="character">
        <h1>{{ character.name }}</h1>
        <div class="character-container">
            <img :src="character.image" :alt="character.name">
            <ul>
                <li>Origen: {{ character.origin.name }}</li>
                <li>Genero: {{ character.gender }}</li>
                <li>Tipo: {{ character.type }}</li>
                <li>Episodio(s): {{ character.episode.join(', ') }}</li>
                <li>Locación: {{ character.location.name }}</li>
                <li>Creado en: {{ character.created }}</li>
                <li>Estado:{{ character.status }}</li>
            </ul>
        </div>
        
    </template>
</template>

<style scoped>
.character-container{
    display: flex;
    flex-direction: row;
}
img{
    height: 150px;
    width: 150px;
    border-radius: 5px;
}
</style>