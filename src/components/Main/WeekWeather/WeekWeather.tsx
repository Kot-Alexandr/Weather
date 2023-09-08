import DayWeather from '../DayWeather/DayWeather'
import s from './WeekWeather.module.scss'
import SunnyDay from './../../../accets/img/DailyImgWeather/SunnyDay.svg'
import CloudyDay from './../../../accets/img/DailyImgWeather/CloudyDay.svg'
import PartlyCloudyDay from './../../../accets/img/DailyImgWeather/PartlyCloudyDay.svg'
import RainyDay from './../../../accets/img/DailyImgWeather/RainyDay.svg'
import SnowDay from './../../../accets/img/DailyImgWeather/SnowDay.svg'
import ThunderDay from './../../../accets/img/DailyImgWeather/ThunderDay.svg'
import WindyDay from './../../../accets/img/DailyImgWeather/WindyDay.svg'


const WeekWeather = () => {

    let today = new Date();
    let todayMark = today.getDay()

    return (
        <div className={s.WeeklyWeather}>
            <DayWeather day={'Mon'} isToday={todayMark===1} temp={'22°'} weatherPick={WindyDay} />
            <DayWeather day={'Tue'} isToday={todayMark===2} temp={'18°'} weatherPick={RainyDay} />
            <DayWeather day={'Wen'} isToday={todayMark===3} temp={'15°'} weatherPick={SnowDay} />
            <DayWeather day={'Thu'} isToday={todayMark===4} temp={'25°'} weatherPick={CloudyDay} />
            <DayWeather day={'Fri'} isToday={todayMark===5} temp={'28°'} weatherPick={PartlyCloudyDay} />
            <DayWeather day={'Sat'} isToday={todayMark===6} temp={'30°'} weatherPick={ThunderDay} />
            <DayWeather day={'Sun'} isToday={todayMark===0} temp={'32°'} weatherPick={SunnyDay} />
        </div>
    )
}

export default WeekWeather