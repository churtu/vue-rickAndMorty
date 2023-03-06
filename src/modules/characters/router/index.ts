import type { RouteRecordRaw } from "vue-router";
import CharacterLayout from '@/modules/characters/layout/character_layout.vue'
import CharacterId from '@/modules/characters/pages/character_id_page.vue'
import CharacterList from '@/modules/characters/pages/character_list_page.vue'
import CharacterSearch from '@/modules/characters/pages/character_search_page.vue'

export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: { name: 'character-list' },
    component: CharacterLayout,
    children: [
        {
            path: 'by/:id',
            name: 'character-id',
            props:{
                title:'Por Id',
                visible: false
            },
            component: CharacterId
        },
        {
            path: 'list',
            name: 'character-list',
            props:{
                title:'Lista de Personajes',
                visible: true
            },
            component: CharacterList
        },
        {
            path: 'search',
            name: 'character-search',
            props:{
                title:'Busqueda',
                visible: true
            },
            component: CharacterSearch
        },
    ]
}
