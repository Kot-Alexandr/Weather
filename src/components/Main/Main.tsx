import GoForaWalk from './GoForaWalk/GoForaWalk'
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

    const dataToWalk = [
        {
            temp: 32,
            feelsTemp: 40,
            UV: 6,
            cloud: 0,
            wSpeed: 0,
            wGusts: 1,
        },
        {
            temp: 22,
            feelsTemp: 19,
            UV: 2,
            cloud: 70,
            wSpeed: 2,
            wGusts: 2,
        },
        {
            temp: 18,
            feelsTemp: 15,
            UV: 6,
            cloud: 90,
            wSpeed: 10,
            wGusts: 14,
        },
        {
            temp: -15,
            feelsTemp: -22,
            UV: 0,
            cloud: 100,
            wSpeed: 2,
            wGusts: 2,
        },
        {
            temp: 25,
            feelsTemp: 25,
            UV: 2,
            cloud: 50,
            wSpeed: 5,
            wGusts: 5,
        },
        {
            temp: 28,
            feelsTemp: 35,
            UV: 0,
            cloud: 90,
            wSpeed: 1,
            wGusts: 1,
        },
        {
            temp: 30,
            feelsTemp: 25,
            UV: 0,
            cloud: 90,
            wSpeed: 0,
            wGusts: 6,
        }
    ]

    let today = new Date();
    let todayMark = today.getDay()


    return (
        <div className={s.MainBG}>
            <div className={s.MainLeftSide}>
                <Header />
                <WeekWeather todayMark={todayMark} />
                <div className={s.MainLeftSunsetAndGoForAWalk}>
                    <SunriseSunset data={SunsetSunriseArray} />
                    <GoForaWalk Town={'Dhaka'} dataToWalk={dataToWalk} toDayMark={todayMark} />
                </div>
            </div>
            <div className={s.MainRightSide}>Buy umbrela</div>
        </div>
    )
}

export default Main