
export interface RouteLink {
    name: string,
    path: string
    title: string,
}

export const routeLinks: RouteLink[] = [
    {
        name: 'home',
        path: '/',
        title: 'Inicio'
    },
    {
        name: 'about',
        path: '/about',
        title: 'Sobre'
    },
    {
        name: 'character-list',
        path: '/characters',
        title: 'Personajes'
    },
]