import Header from './Header/Header'
import s from './Main.module.scss'
import SunriseSunset from './SunriseSunset/SunriseSunset'
import WeekWeather from './WeekWeather/WeekWeather'

const Main = () => {

    

    return (
        <div className={s.MainBG}>
            <div className={s.MainLeftSide}>
                <Header />
                <WeekWeather/>
                <SunriseSunset/>
            </div>
            <div className={s.MainRightSide}>Buy umbrela</div>
        </div>
    )
}

export default Main