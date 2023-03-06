import type { CharactersResponse } from './../interfaces/characters_response';
import { ref, computed } from "vue";
import type { Character } from '../interfaces/characters_response';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import { useQuery } from '@tanstack/vue-query';


const characters    = ref<Character[]>([]);
const isLoading     = ref<boolean>(false);
const hasError      = ref<boolean>(false);
const errorMessage  = ref<string | null>(null);

const getCharactersCacheFirst = async (): Promise<Character[]> => {

    if (characters.value.length > 0) {
        return characters.value;
    }
    const { data } = await rickAndMortyApi.get<CharactersResponse>('/character');
    return data.results;
}

const loadedCharacters = ( data: Character[]) => {
    hasError.value = false;
    errorMessage.value = null;
    characters.value = data;
}

const useCharacters = () => {

    useQuery(
        ['personajes'],
        getCharactersCacheFirst,
        {
            onSuccess: loadedCharacters,
    
        }
    );

    return {
        // Properties
        characters,
        isLoading,
        hasError,
        errorMessage,
        // Getters
        count: computed(() => characters.value.length)
    }
}

export default useCharacters;