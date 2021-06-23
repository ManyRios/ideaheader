import { 
    ArrowToggle,
    Rocket,
    Whitepaper,
    Podcast,
    Twitter,
    Discord,
    Resources
} from './'

const Icon = ({name}) => {
    switch(name){
        case 'arrow':
            return <ArrowToggle/>;
        case 'rocket':
            return <Rocket/>;
        case 'whitepaper':
            return <Whitepaper/>
        case 'podcast':
            return <Podcast/>
        case 'twitter':
            return <Twitter/>
        case 'discord':
            return <Discord/>
        case 'resources':
            return <Resources/>
        default:
            return <Twitter/>;
    }
}


export default Icon;