import List from "../../../components/List";
import { IExperiences } from "../../../types/Experiences";

import style from './SideProjects.module.css';

const personalProjects: IExperiences[] = [
    {
        title: 'CRUD com Spring Boot',
        description: 'Aplicação CRUD simples para gerenciamento de pessoas, desenvolvida com Spring Boot. Inclui operações básicas de criação, leitura, atualização e exclusão de registros.',
        tecnologies: ['Spring Boot', 'Java', 'Swagger'],
        period: 'Março 2024 - Novembro 2024',
        url: 'https://github.com/wbsfps/simple-crud-person-spring-boot'
    },
    {
        title: 'Currículo',
        description: 'Currículo digital interativo com foco em organização e performance, desenvolvido com React, TypeScript, Vite e CSS Modules.',
        tecnologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
        period: 'Outubro 2024 - Novembro 2024',
        url: 'https://github.com/wbsfps/portfolio'
    }
]

function SideProjects() {
    return (
        <>
            <section className={style.main_container}>
                <h3 className={style.title}>Projetos</h3>
            </section>
            <List experiences={personalProjects}/>
        </>
    )
}

export default SideProjects;