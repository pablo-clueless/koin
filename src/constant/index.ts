import { COMMUNITY_LINKS, HERO_IMAGES, OS_CLIENTS, ROAD_MAP } from './data'
import { alchemy, binance, coinbase, ethereum, paradigm } from 'assets'
import { COIN_DATA } from './graph'

const NAV_LINKS = [
    {label: 'about', target: '#about'},
    {label: 'tokenomics', target: '#tokenomics'},
    {label: 'roadmap', target: '#roadmap'},
    {label: 'team', target: '#team'},
    {label: 'download', target: '#download'},
]

const FOOTER_LINKS = [
    {title: 'overview', links: [
        {label: 'koin', target: '/'},
		{label: 'careers', target: '/'},
		{label: 'developers', target: '/' },
    ]},
    {title: 'support', links: [
        {label: 'contact', target: '/'},
        {label: 'security', target: '/'},
    ]},
    {title: 'resources', links: [
        {label: 'privacy policy', target: '/'},
        {label: 'terms & conditions', target: '/'},
        {label: 'cookies', target: '/'},
    ]},
]

const SPONSORS = [
    {name: 'ethereum', logo: ethereum},
    {name: 'binance', logo: binance},
    {name: 'coinbase', logo: coinbase},
    {name: 'alchemy', logo: alchemy},
    {name: 'paradigm', logo: paradigm},
]

// "Marietta Kitchen", "Nola Tunno"

const TEAM_MEMBERS = [
    {
        role: 'team lead',
        name: 'Neely Sikorsky',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
    {
        name: 'Cinnamon Mosen',
        role: 'frontend developer',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
    {
        name: 'Leonanie Lambie',
        role: 'mobile developer',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
    {
        name: 'Ennis Tiuit',
        role: 'blockchain developer',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
    {
        name: 'Jerrylee Hanrott',
        role: 'backend developer',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
    {
        name: 'Rae Martensen',
        role: 'qa',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
    {
        name: 'Mariya Peyntue',
        role: 'ui/ux designer',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
    {
        name: 'Claude Gumm',
        role: 'product manager',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        github: 'https://github.com/pablo-clueless',
        twitter: 'https://twitter.com/pablo_clueless'
    },
]

const TOKENOMICS = {
    address: '0xaAbBcCdDeEfFgGhHiIjJkKlLmMnN1234567890',
    name: 'alt koin',
    network: 'polygon',
    supply: 150000000,
    symbol: 'AKN',
}

export {
    COIN_DATA,
    COMMUNITY_LINKS,
    FOOTER_LINKS,
    HERO_IMAGES,
    NAV_LINKS,
    OS_CLIENTS,
    ROAD_MAP,
    SPONSORS,
    TEAM_MEMBERS,
    TOKENOMICS,
}