<script setup lang="ts">
import type { Character } from '../interfaces/characters_response';
import CharacterCard from './CharacterCard.vue';

const props = defineProps<{characters: Character[]}>();


// 1-Normal suspense
// const {data} = await rickAndMortyApi.get<CharactersResponse>('/character');
// const characters = ref<Character[]>(data.results)

// 2- Composable function
// import { useCharacters } from '../composables/useCharacters';
    // const {isLoading, characters, hasError, errorMsg} = useCharacters();

    // 3- TanStack Query
    // const getCharactersSlow = async (): Promise<Character[]> => {
    //     return new Promise((resolve) => {
    //         setTimeout(async() => {
    //             const {data} = await rickAndMortyApi.get<CharactersResponse>('/character');
    //             resolve(data.results)
    //         }, 1);

    //     })
    // }
    
    // const { isLoading, isError, data: characters, error} = useQuery(
    //     ['characters'], 
    //     getCharactersSlow
    // );

</script>

<template>
    <div class="card-list">
        <CharacterCard v-for="character of props.characters" :key="character.id" :character="character"/>
    </div>
</template>


<style scoped>
.card-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>