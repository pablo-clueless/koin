import { AndroidLogo, AppleLogo, ChalkboardTeacher, DiscordLogo, FacebookLogo, GithubLogo, InstagramLogo, LinuxLogo, Receipt, Rocket, RocketLaunch, TwitterLogo, WindowsLogo } from '@phosphor-icons/react'

import { intro_1, intro_2, intro_3, intro_4 } from 'assets'

export const COMMUNITY_LINKS = [
    {label: <DiscordLogo />, link: 'https://discord.gg/' },
    {label: <FacebookLogo />, link: 'https://facebook.com/pablo.clueless' },
    {label: <InstagramLogo />, link: 'https://instagram.com/pablo_clueless' },
    {label: <GithubLogo />, link: 'https://github.com/pablo-clueless' },
    {label: <TwitterLogo />, link: 'https://twitter.com/pablo_clueless' },
]

export const HERO_IMAGES = [
    {id: 1, image: intro_1 },
    {id: 2, image: intro_2 },
    {id: 3, image: intro_3 },
    {id: 4, image: intro_4 },
]

export const ROAD_MAP = [
    {
        feature: 'launch',
        status: 'in progress',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum odio labore pariatur, exercitationem fuga quisquam aliquid nihil commodi quod molestiae quas tempora enim nisi! Nostrum similique amet quod nihil est. Recusandae explicabo iusto eum commodi facere natus voluptas deserunt quod temporibus, blanditiis aliquam, doloribus animi quibusdam tenetur fugiat provident.',
        date: 'q1 2024',
        icon: <Rocket />
    },
    {
        feature: 'onboarding',
        status: 'in planning',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum odio labore pariatur, exercitationem fuga quisquam aliquid nihil commodi quod molestiae quas tempora enim nisi! Nostrum similique amet quod nihil est. Recusandae explicabo iusto eum commodi facere natus voluptas deserunt quod temporibus, blanditiis aliquam, doloribus animi quibusdam tenetur fugiat provident.',
        date: 'q2 2024',
        icon: <ChalkboardTeacher />
    },
    {
        feature: 'marketing',
        status: 'in planning',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum odio labore pariatur, exercitationem fuga quisquam aliquid nihil commodi quod molestiae quas tempora enim nisi! Nostrum similique amet quod nihil est. Recusandae explicabo iusto eum commodi facere natus voluptas deserunt quod temporibus, blanditiis aliquam, doloribus animi quibusdam tenetur fugiat provident.',
        date: 'q3 2024',
        icon: <Receipt />
    },
    {
        feature: 'upgrade',
        status: 'in planning',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum odio labore pariatur, exercitationem fuga quisquam aliquid nihil commodi quod molestiae quas tempora enim nisi! Nostrum similique amet quod nihil est. Recusandae explicabo iusto eum commodi facere natus voluptas deserunt quod temporibus, blanditiis aliquam, doloribus animi quibusdam tenetur fugiat provident.',
        date: 'q4 2024',
        icon: <RocketLaunch />
    },
]

export const OS_CLIENTS = [
    {label: 'Android', icon: <AndroidLogo />, color: '#3DDC84' },
    {label: 'iOS', icon: <AppleLogo />, color: '#555555' },
    {label: 'Linux', icon: <LinuxLogo />, color: '#333333' },
    {label: 'Windows', icon: <WindowsLogo />, color: '#0078D4' },
]