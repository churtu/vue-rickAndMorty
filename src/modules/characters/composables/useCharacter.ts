import rickAndMortyApi from "@/api/rickAndMortyApi";
import { useQuery } from "@tanstack/vue-query";
import { ref, computed } from 'vue';
import type { Character } from "../interfaces/characters_response";

const characterSet      = ref<{[id:string]:Character}>({});
const hasError          = ref<boolean>(false);
const errorMessage      = ref<string | null>(null);

const getCharacterCacheFirst = async (id: number):Promise<Character> => {
    if( characterSet.value[id] ) return characterSet.value[id];    

    try {
        const { data } = await rickAndMortyApi.get<Character>(`/character/${id}`);
        if(data.id) return data
        throw new Error(`No se encontro un personaje con el id ${id}`)
    } catch (error) {
        throw new Error('error');
    }
}

const loadedCharacter = (data: Character) => {
    hasError.value = false;
    errorMessage.value = null;
    characterSet.value[data.id] = data
}

const loadedWithError = (error: string) => {
    hasError.value = true;
    errorMessage.value = error;
}

const useCharacter = (id: string) => {
    // const characterSet = {}

    const {isLoading} = useQuery(
        ['character', id],
        () => getCharacterCacheFirst(parseInt(id)),
        {
            onSuccess: loadedCharacter,
            onError: loadedWithError
        }
    )

    return {
        // Properties
        list: characterSet,
        errorMessage,
        hasError,
        isLoading,
        // Getters
        character: computed<Character | null>(() => characterSet.value[id])
    }
}

export default useCharacter;