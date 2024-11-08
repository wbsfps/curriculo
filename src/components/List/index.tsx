import Item from './Item';
import { IExperiences } from "../../types/Experiences";
import style from './List.module.css'


interface Props {
    experiences: IExperiences[];
}


function List({experiences}: Props) {    
    

    return (
        <ul className={`${style.main_container} ${style.list}`}>
            {experiences.map((experience, index) => (
                <Item key={index} {...experience} />
            ))}
        </ul>
    )
}

export default List;