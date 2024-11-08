import style from './Profile.module.css';
import Icon from '/icon_anonymous.png';

function Profile() {
        
    return (
        <section className={style.main_container}>
                <div className={style.container_image_profile}>
                    <img src={Icon} className={style.image_profile} alt="Image Profile" />
                </div>
                
                <div className={style.container_text_profile}>
                    <div className={style.container_name}>
                        <h3 className={style.name}>William Santana</h3>
                    </div>
                    <div className={style.container_job}>
                        <h4 className={style.job}>Backend Developer</h4>
                    </div>
                </div>
        </section>
    )
}

export default Profile;