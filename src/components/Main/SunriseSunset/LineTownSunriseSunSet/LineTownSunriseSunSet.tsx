import Moon from './../../../../accets/img/SunriseSunset/Moon.svg'
import Sun from './../../../../accets/img/SunriseSunset/Sun.svg'
import locationPin from './../../../../accets/img/SunriseSunset/locationPinO.svg'
import s from './LineTownSunriseSunSet.module.scss'

type LineTownSunriseSunSetProps= {
    town: string,
    SRTime: string,
    SSTime: string
}

const LineTownSunriseSunSet = (props: LineTownSunriseSunSetProps) => {

    return (
        <div className={s.LineTownSunriseSunSetBG}>
            <div className={s.LTSSBlocks}>
                <img src={locationPin} className={s.LTSSImg} />
                <div className={s.LTSSText}>{props.town}</div>
            </div>
            <div className={s.LTSSBlocks}>
                <img src={Sun} className={s.LTSSImg} />
                <div className={s.LTSSTime}>{props.SRTime}</div>
            </div>
            <div className={s.LTSSBlocks}>
                <img src={Moon} className={s.LTSSImg} />
                <div className={s.LTSSTime}>{props.SSTime}</div>
            </div>
        </div>
    )
}

export default LineTownSunriseSunSet