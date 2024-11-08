import List from '../../../components/List';
import style from './WorkExperience.module.css';
import { IExperiences } from '../../../types/Experiences';


const experiences: IExperiences[] = [
    {
        title: 'RPA Developer - InfluirTec',
        description: 'Contributes to the development of process automation requested by the company Banese Card, using the Influir tool.',
        tecnologies: ['JavaScript', 'Python', 'Selenium'],
        period: 'March 2024 - November 2024',
        url: 'https://www.influirtec.com.br/'
    },

    {
        title: 'BackEnd Developer - Apoio Fiel',
        description: 'In partnership with Porto Digital, we created a solution to help NGOs manage donations.',
        tecnologies: ['Node.js', 'Next.js', 'Prisma', 'Fastify', 'Swagger'],
        period: 'February 2024 - June 2024',
        url: 'https://github.com/Apoio-Fiel'
    },
    {
        title: 'FrontEnd Developer - Tiradentes Group',
        description: 'In partnership with Porto Digital, we created a solution to create a Dentistry website for the Tiradentes Group.',
        tecnologies: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript'],
        period: 'June 2023 - December 2023',
        url: 'https://www.grupotiradentes.com/'
    }
];

function WorkExpercience() {

    return (
        <>
            <section className={style.main_container}>
                <h3 className={style.title}>Work Expercience</h3>
            </section>
            <List experiences={experiences}/>
        </>
    )
}


export default WorkExpercience;