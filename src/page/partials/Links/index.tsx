import { ISocialMedias } from '../../../types/SocialMedias';
import style from './Links.module.css';
import { GoArrowUpRight } from 'react-icons/go';

const socialMedias: ISocialMedias[] = [
    {
        platform: 'Github',
        name: '@wbsfps',
        url: 'https://github.com/wbsfps'
    },
    {
        platform: 'Linkedin',
        name: '@WilliamAndrade',
        url: 'https://www.linkedin.com/in/william-andrade-78b4a6219/'
    },
    {
        platform: 'X - Twitter',
        name: '@wbsfps',
        url: 'https://x.com/wbsfps'
    },
    {
        platform: 'Instagram',
        name: '@williamsantana_10',
        url: 'https://www.instagram.com/williamsantana_10/'
    }
]

function Links() {

    return (
        <div className={style.main_container}>
            <section >
                    <h3 className={style.title}>Links</h3>  
            </section>
            
            <div className={style.container_links}> 
            
            {socialMedias.map((socialMedia, index) => (
                <ul key={index} className={style.list}>
                    <div className={style.link_container}> {/* Contêiner flex */}
                        <li>
                            <p className={style.platform}>{socialMedia.platform}</p>
                        </li>
                        <li>
                            <a className={style.link} href={socialMedia.url} target="_blank" rel="external">
                            {socialMedia.name} <GoArrowUpRight />
                            </a>
                        </li>
                    </div>
                </ul>
                ))}
            </div>
        </div>
    )
}

export default Links;