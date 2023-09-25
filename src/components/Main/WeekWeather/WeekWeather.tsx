import DayWeather from '../DayWeather/DayWeather'
import s from './WeekWeather.module.scss'
import SunnyDay from './../../../accets/img/DailyImgWeather/SunnyDay.svg'
import CloudyDay from './../../../accets/img/DailyImgWeather/CloudyDay.svg'
import PartlyCloudyDay from './../../../accets/img/DailyImgWeather/PartlyCloudyDay.svg'
import RainyDay from './../../../accets/img/DailyImgWeather/RainyDay.svg'
import SnowDay from './../../../accets/img/DailyImgWeather/SnowDay.svg'
import ThunderDay from './../../../accets/img/DailyImgWeather/ThunderDay.svg'
import WindyDay from './../../../accets/img/DailyImgWeather/WindyDay.svg'


const WeekWeather = (props: any) => {

    const days = [{ today: 'Mon', mark: 1, img: WindyDay, temp: '22°' },
    { today: 'Tue', mark: 2, img: RainyDay, temp: '18°' },
    { today: 'Wen', mark: 3, img: SnowDay, temp: '15°' },
    { today: 'Thu', mark: 4, img: CloudyDay, temp: '25°' },
    { today: 'Fri', mark: 5, img: PartlyCloudyDay, temp: '28°' },
    { today: 'Sat', mark: 6, img: ThunderDay, temp: '30°' },
    { today: 'Sun', mark: 0, img: SunnyDay, temp: '32°' }]

    return (
        <div className={s.WeeklyWeather}>
            {days.map((today) => <DayWeather day={today.today} isToday={props.todayMark === today.mark} weatherPick={today.img} temp={today.temp} />)}
        </div>
    )
}

export default WeekWeather