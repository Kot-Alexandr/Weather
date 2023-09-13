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
    const days = [{ today: 'Mon', mark: 1, img: WindyDay },
    { today: 'Tue', mark: 2, img: RainyDay },
    { today: 'Wen', mark: 3, img: SnowDay },
    { today: 'Thu', mark: 4, img: CloudyDay },
    { today: 'Fri', mark: 5, img: PartlyCloudyDay },
    { today: 'Sat', mark: 6, img: ThunderDay },
    { today: 'Sun', mark: 0, img: SunnyDay }]

    return (
        <div className={s.WeeklyWeather}>
            {days.map((today) => <DayWeather day={today.today} isToday={todayMark === today.mark} weatherPick={today.img} />)}
        </div>
    )
}

export default WeekWeather