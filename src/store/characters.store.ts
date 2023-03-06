import rickAndMortyApi from "@/api/rickAndMortyApi";
import type { Character, CharactersResponse } from "@/modules/characters/interfaces/characters_response"
import { reactive } from "vue";

interface Store {
    characters: {
        list: Character[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage: string | null;
    },
    ids: {
        list: {
            [ id: number ]: Character
        },
        isLoading: boolean,
        hasError: boolean,
        errorMessage: string | null
    }
    startLoadingCharacters: () => void;
    loadedCharacters: ( data: Character[] ) => void;
    loadCharactersFailed: ( error: string ) => void;    
    startLoadingCharacter: () => void;
    checkIdInStore: ( id: number ) => boolean;
    loadedCharacter: ( character: Character ) => void;
}

const characterStore = reactive<Store>({
    characters: {
        count: 0,
        errorMessage: null,
        hasError: false,
        isLoading: true,
        list: [],
    },
    ids: {
        list: {},
        isLoading: false,
        hasError: false,
        errorMessage: null 
    },
    async startLoadingCharacters(){
        const { data } = await rickAndMortyApi.get<CharactersResponse>('/character');
        this.loadedCharacters(data.results);
    },
    loadedCharacters( data ){
        this.characters = {
            ...this.characters,
            count: data.length,
            isLoading: false,
            list: [ ...data ]
        }    
    },
    loadCharactersFailed( error ){
        this.characters = {
            count: 0,
            errorMessage: error,
            hasError: true,
            isLoading: false,
            list: []
        }    
    },
    startLoadingCharacter(){
        this.ids = {
            ...this.ids,
            isLoading: true,
            errorMessage: null,
            hasError: false
        }
    },
    loadedCharacter(character){
        this.ids.isLoading = false;
        this.ids.list[character.id] = character
    },
    checkIdInStore(id){
        return !!this.ids.list[id];
    },
    
});

characterStore.startLoadingCharacters();

export default characterStore;