import List from '../../../components/List';
import style from './WorkExperience.module.css';
import { IExperiences } from '../../../types/Experiences';


const experiences: IExperiences[] = [
    {
        title: 'Desenvolvedor RPA - InfluirTec',
        description: 'Automações de processos solicitados pela empresa Banese Card, utilizando a ferramenta da Influir.',
        tecnologies: ['JavaScript', 'Python', 'Selenium'],
        period: 'Março 2024 - Novembro 2024',
        url: 'https://www.influirtec.com.br/'
    },

    {
        title: 'Desenvolvedor BackEnd - Apoio Fiel',
        description: 'Em parceria com o Porto Digital, criamos uma solução para ajudar ONGs a gerenciar doações.',
        tecnologies: ['Node.js', 'Next.js', 'Prisma', 'Fastify', 'Swagger'],
        period: 'Fevereiro 2024 - Junho 2024',
        url: 'https://github.com/Apoio-Fiel'
    },
    {
        title: 'Desenvolvedor FrontEnd - Grupo Tiradentes',
        description: 'Em parceria com o Porto Digital, criamos uma solução para a criação de um site de Odontologia para o Grupo Tiradentes.',
        tecnologies: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript'],
        period: 'Julho 2023 - Dezembro 2023',
        url: 'https://www.grupotiradentes.com/'
    }
];

function WorkExpercience() {

    return (
        <>
            <section className={style.main_container}>
                <h3 className={style.title}>Experiência Profissional</h3>
            </section>
            <List experiences={experiences}/>
        </>
    )
}


export default WorkExpercience;