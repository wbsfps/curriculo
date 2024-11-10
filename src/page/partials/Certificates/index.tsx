import style from './Certificates.module.css';
import { GoArrowUpRight } from 'react-icons/go';

function Certificates() {
    
    const urlDrive = 'https://drive.google.com/drive/folders/1_3V7Ops7KaFkO3rrdlsmbXlZAPyPqbov?usp=drive_link';

    return (
        <section className={style.main_container}>
            <a href={urlDrive} className={style.link} target="_blank" rel="Link certificados">
                <h3 className={style.title}>Certificados <GoArrowUpRight /></h3>
            </a>
        </section>
    )
}


export default Certificates;