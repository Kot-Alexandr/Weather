import Header from './Header/Header'
import s from './Main.module.scss'
import WeekWeather from './WeekWeather/WeekWeather'

const Main = () => {
    return (
        <div className={s.MainBG}>
            <div className={s.MainLeftSide}>
                <Header />
                <WeekWeather/>
            </div>
            <div className={s.MainRightSide}>Buy umbrela</div>
        </div>
    )
}

export default Main