import s from './TownSunriseSunset.module.scss'
import locationPin from './../../../../accets/img/SunriseSunset/locationPin.svg'
import verticalDots from './../../../../accets/img/SunriseSunset/verticalDots.svg'
import Sun from './../../../../accets/img/SunriseSunset/Sun.svg'
import Moon from './../../../../accets/img/SunriseSunset/Moon.svg'

const TownSunriseSunset = () => {

    return (
        <div className={s.TownSunriseSunsetBG}>
            <div className={s.TSSHead}>
                <div className={s.TSSTownNameAndImg}>
                    <img src={locationPin} className={s.TSSTownImg} />
                    <div className={s.TSSHeadText}>Dhaka</div>
                </div>
                <img src={verticalDots} className={s.TSSHeadImg} />
            </div>
            <div className={s.TSSInformationBlock}>
                <div className={s.TSSSunBlock}>
                    <img src={Sun} className={s.TSSSunIMG}/>
                    <div>
                        <div className={s.TSSSunText}>Sunrise</div>
                        <div className={s.TSSSunTime}>4:47 AM</div>
                    </div>
                </div>
                <div className={s.TSSMoonBlock}>
                <img src={Moon} className={s.TSSMoonIMG}/>
                    <div>
                        <div className={s.TSSMoonText}>Sunset</div>
                        <div className={s.TSSMoonTime}>6:49 PM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TownSunriseSunset