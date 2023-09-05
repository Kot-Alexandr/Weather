import s from './Header.module.scss'
import sunSVG from './../../../accets/img/sun.svg'

const Header = () => {
    return (
        <div className={s.HeaderBG}>
            <div className={s.HeaderTextBlock}>
                <div className={s.HeaderTextTime}>07:32 AM</div>
                <div className={s.HeaderTextDate}>Wednesday, 14 April, 2023</div>
                <div className={s.HeaderTextImgAndTextDay}>
                    <img src={sunSVG} className={s.HeaderTextImg} />
                    <div className={s.HeaderTextDayTime}>Good morning My wise friend!</div>
                </div>
            </div>
            <div>
                {/* <Switch/> тут будет с материал юай */}
            </div>
        </div>
    )
}

export default Header