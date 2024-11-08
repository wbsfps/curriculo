import List from "../../../components/List";
import { IExperiences } from "../../../types/Experiences";

import style from './SideProjects.module.css';

const personalProjects: IExperiences[] = [
    {
        title: 'Simple CRUD With Spring Boot',
        description: 'Simple CRUD application for people management, developed with Spring Boot. Includes basic operations of creating, reading, updating and deleting records.',
        tecnologies: ['Spring Boot', 'Java', 'Swagger'],
        period: 'March 2024 - November 2024',
        url: 'https://github.com/wbsfps/simple-crud-person-spring-boot'
    },
    {
        title: 'Personal Portfolio',
        description: 'Personal portfolio developed with React and TypeScript. Includes my experiences and projects.',
        tecnologies: ['React', 'TypeScript', 'Vite'],
        period: 'October 2024 - November 2024',
        url: 'https://github.com/wbsfps/portfolio'
    }
]

function SideProjects() {
    return (
        <>
            <section className={style.main_container}>
                <h3 className={style.title}>Side Projects</h3>
            </section>
            <List experiences={personalProjects}/>
        </>
    )
}

export default SideProjects;