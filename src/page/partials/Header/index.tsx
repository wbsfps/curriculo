import style from './Header.module.css';
import image from "../../../assets/images/signature_logo_white.ico";


function Header() {
    return (
        <header className={style.header}>
            <div className={style.image_logo}>
                <img className={style.image} src={image} alt="logo" />
            </div>
            <div>
                <label className={`${style.rocker} ${style['rocker-small']}`}>
                <input type="checkbox" />
                <span className={style['switch-left']}>BR</span>
                <span className={style['switch-right']}>EN</span>
                </label>
            </div>
        </header>
    )
}

export default Header;