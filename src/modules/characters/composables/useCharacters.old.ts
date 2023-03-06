import { ref, onMounted } from 'vue'
import type { Character } from '../interfaces/characters_response';
import rickAndMortyApi from '../../../api/rickAndMortyApi';
import type { CharactersResponse } from '../interfaces/characters_response';
import axios from 'axios';


const characters = ref<Character[]>([]);

export const useCharactersOld = () => {
    
    
    const isLoading = ref<boolean>(true);
    const hasError = ref<boolean>(false);
    const errorMsg = ref<string>();
    
    onMounted(async () => await loadCharacters()); 
    const loadCharacters = async () => {
        if(characters.value.length > 0) return;
        isLoading.value = true;
        try {
            const { data } = await rickAndMortyApi.get<CharactersResponse>('/character');
            characters.value = data.results;
            isLoading.value = false;   
        } catch (error) {
            hasError.value = true;
            isLoading.value = false;
            if(axios.isAxiosError(error)){
                errorMsg.value = error.message;
                return;
            }
            errorMsg.value = JSON.stringify(error);

        }
    }
    
    return {
        characters,
        isLoading,
        hasError,
        errorMsg,
        loadCharacters
    }
}