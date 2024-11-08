import { IExperiences } from "../../../types/Experiences";
import { GoArrowUpRight } from "react-icons/go";

import style from './Item.module.css';


function Item({ title, description, tecnologies, period, url }: IExperiences) {
    return (
        <li className={style.item}>
            <a href={url} className={style.link} target="_blank" rel="noopener noreferrer">
                <h3 className={style.title}>{title} <span className={style.icon}><GoArrowUpRight /></span></h3>
            </a>
            <p className={style.description}>{description}</p>
            <p className={style.tecnologies}>Tecnologies: {tecnologies.join(', ')}</p>
            <p className={style.period}> {period}</p>
        </li>
    );
}

export default Item;
