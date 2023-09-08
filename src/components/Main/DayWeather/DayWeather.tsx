import s from './DayWeather.module.scss'

const DayWeather = (props: any) => {

    return (
        <div className={props.isToday ? s.DailyWeatherT : s.DailyWeather}>
            <img src={props.weatherPick} className={s.DWdayImg} />
            <div className={s.DWdayName}>{props.day}</div>
            <div className={s.DWTemerature}>{props.temp}</div>
        </div>
    )
}

export default DayWeather