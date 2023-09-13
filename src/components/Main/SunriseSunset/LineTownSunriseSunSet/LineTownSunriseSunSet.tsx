import Moon from './../../../../accets/img/SunriseSunset/Moon.svg'
import Sun from './../../../../accets/img/SunriseSunset/Sun.svg'
import locationPin from './../../../../accets/img/SunriseSunset/locationPinO.svg'
import s from './LineTownSunriseSunSet.module.scss'

const LineTownSunriseSunSet = () => {

    return (
        <div className={s.LineTownSunriseSunSetBG}>
            <div className={s.LTSSBlocks}>
                <img src={locationPin} className={s.LTSSImg} />
                <div className={s.LTSSText}>Dhaka</div>
            </div>
            <div className={s.LTSSBlocks}>
                <img src={Sun} className={s.LTSSImg} />
                <div className={s.LTSSTime}>4:47 AM</div>
            </div>
            <div className={s.LTSSBlocks}>
                <img src={Moon} className={s.LTSSImg} />
                <div className={s.LTSSTime}>6:49 PM</div>
            </div>
        </div>
    )
}

export default LineTownSunriseSunSet