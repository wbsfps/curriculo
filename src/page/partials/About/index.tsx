import style from './About.module.css';

function About() {

    return (

        <section className={style.main_container}>
            <h3 className={style.title}>About</h3>
            <p className={style.description}>
                IT professional with 9 months of experience in RPA, currently transitioning to back-end web development. With a solid foundation in Python and Java, I seek to deepen my knowledge in Java and Spring Boot for robust and scalable web projects.
            </p>
        </section>

    )
}

export default About;