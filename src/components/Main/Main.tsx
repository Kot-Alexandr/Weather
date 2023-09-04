import Header from './Header/Header'
import s from './Main.module.scss'

const Main = () => {
    return (
        <div className={s.MainBG}>
            <div className={s.MainLeftSide}>
                <Header />
            </div>
            <div className={s.MainRightSide}>Buy umbrela</div>
        </div>
    )
}

export default Main