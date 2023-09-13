import s from './SunriseSunset.module.scss'
import TownSunriseSunset from './TownSunriseSunset/TownSunriseSunset'
import plusButton from '../../../accets/img/SunriseSunset/plusButton.svg'
import LineTownSunriseSunSet from './LineTownSunriseSunSet/LineTownSunriseSunSet'


const SunriseSunset = () => {

    return (
        <div className={s.SunRiseSetBackground}>
            <div className={s.SunRiseSetTextPlus}>
                <div className={s.SunRiseSetText}>Sunrise & Sunset</div>
                <img src={plusButton} className={s.SunRiseSetIMG} />
            </div>
            <TownSunriseSunset />
            <TownSunriseSunset />
            <LineTownSunriseSunSet />
            <LineTownSunriseSunSet />
            <LineTownSunriseSunSet />
        </div>
    )
}

export default SunriseSunset