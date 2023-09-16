import Header from './Header/Header'
import s from './Main.module.scss'
import SunriseSunset from './SunriseSunset/SunriseSunset'
import WeekWeather from './WeekWeather/WeekWeather'

const Main = () => {

    const SunsetSunriseArray = [{
        Town: "Dhaka",
        SunriseTime: "4:50 AM",
        SunsetTime: "7:54 PM"
    },
    {
        Town: "Minsk",
        SunriseTime: "5:50 AM",
        SunsetTime: "8:05 PM"
    },
    {
        Town: "Sri-Lanka",
        SunriseTime: "8:50 AM",
        SunsetTime: "8:52 PM"
    },
    // {
    //     Town: "Madeira",
    //     SunriseTime: "5:30 AM",
    //     SunsetTime: "9:30 PM"
    // }
    ]


    return (
        <div className={s.MainBG}>
            <div className={s.MainLeftSide}>
                <Header />
                <WeekWeather />
                <SunriseSunset data={SunsetSunriseArray} />
            </div>
            <div className={s.MainRightSide}>Buy umbrela</div>
        </div>
    )
}

export default Main