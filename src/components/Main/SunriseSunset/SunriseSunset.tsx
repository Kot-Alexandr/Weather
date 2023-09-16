import s from './SunriseSunset.module.scss'
import TownSunriseSunset from './TownSunriseSunset/TownSunriseSunset'
import plusButton from '../../../accets/img/SunriseSunset/plusButton.svg'
import LineTownSunriseSunSet from './LineTownSunriseSunSet/LineTownSunriseSunSet'

type SunriseSunsetProps = {
    data: Array<DataType>
}

type DataType = {
    Town: string,
    SunriseTime: string,
    SunsetTime: string
}

const SunriseSunset = (props: SunriseSunsetProps) => {

    console.log(props.data)

    return (
        <div className={s.SunRiseSetBackground}>
            <div className={s.SunRiseSetTextPlus}>
                <div className={s.SunRiseSetText}>Sunrise & Sunset</div>
                <img src={plusButton} className={s.SunRiseSetIMG} />
            </div>
            {props.data.map(dat => props.data.length > 3 
                ? <LineTownSunriseSunSet town={dat.Town} SRTime={dat.SunriseTime} SSTime={dat.SunsetTime}/> 
                : <TownSunriseSunset town={dat.Town} SRTime={dat.SunriseTime} SSTime={dat.SunsetTime}/>)}
        </div>
    )
}

export default SunriseSunset