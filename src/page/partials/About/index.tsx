import style from './About.module.css';

function About() {

    return (

        <section className={style.main_container}>
            <h3 className={style.title}>Sobre mim</h3>
            <p className={style.description}>
            Profissional de TI com 9 meses de experiência em automação de processos (RPA), em transição para o desenvolvimento web back-end. Tenho conhecimentos em Python e Java e estou focado em aprimorar habilidades em Java e Spring Boot para desenvolver soluções web escaláveis e de alta performance.
            </p>
        </section>

    )
}

export default About;