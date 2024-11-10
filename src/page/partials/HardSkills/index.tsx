import style from './HardSkills.module.css';


function HardSkills() {

    const tecnologies = 
    [
        'Java',
        'Spring Boot',
        'Python',
        'JavaScript',
        'Django',
        'Git',
        'Github'
    ]

    return (
        <section className={style.main_container}>
            <h3 className={style.title}>Habilidades chave</h3>
            <ul className={style.list}>
                {tecnologies.map((tecnology, index) => (
                    <li key={index} className={style.tecnology}>{tecnology}</li>
                ))}
            </ul>
        </section>
    )
}

export default HardSkills;