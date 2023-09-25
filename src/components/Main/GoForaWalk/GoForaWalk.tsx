import s from './GoForaWalk.module.scss'
import home from './../../../accets/img/walkOrNot/house.svg'
import walk from './../../../accets/img/walkOrNot/walking.svg'
import pin from './../../../accets/img/SunriseSunset/locationPin.svg'
import cancel from './../../../accets/img/walkOrNot/imgWalking/cancelMark.svg'
import check from './../../../accets/img/walkOrNot/imgWalking/checkMark.svg'

type GoForaWalkProps = {
    dataToWalk: Array<DataType>
    toDayMark: number
    Town: string
}

type DataType = {
    temp: number,
    feelsTemp: number,
    UV: number,
    cloud: number,
    wSpeed: number,
    wGusts: number,
}



const GoForaWalk = (props: GoForaWalkProps) => {

    let count = 0
    if (props.dataToWalk[props.toDayMark].temp >= 35 || props.dataToWalk[props.toDayMark].temp <= -15) {
        count = count + 1
    }
    if (props.dataToWalk[props.toDayMark].feelsTemp - props.dataToWalk[props.toDayMark].temp >= 7 || props.dataToWalk[props.toDayMark].temp - props.dataToWalk[props.toDayMark].feelsTemp >= 7) {
        count = count + 1
    }
    if (props.dataToWalk[props.toDayMark].UV >= 6) {
        count = count + 1
    }
    if (props.dataToWalk[props.toDayMark].cloud === 100) {
        count = count + 1
    }
    if (props.dataToWalk[props.toDayMark].wSpeed >= 8) { count = count + 1 }
    if (props.dataToWalk[props.toDayMark].wGusts - props.dataToWalk[props.toDayMark].wSpeed >= 4) { count = count + 1 }

    let whatToDo
    count >= 3 ? whatToDo = true : whatToDo = false

    console.log(count)
    console.log(whatToDo)

    return (
        <div className={s.GoForaWalkBG}>
            <div className={s.GoForaWalkAbout}>
                <div className={s.GoForaWalkAboutText}>About for a walk in:</div>
                <div className={s.GoForaWalkAboutTownBlock}>
                    <img src={pin} className={s.GoForaWalkAboutIMG} />
                    <div className={s.GoForaWalkAboutText}>{props.Town}</div>
                </div>
            </div>
            <div className={s.GoForaWalkBody}>
                <div className={s.GoForaWalkTop}>
                    <div className={s.GoForaWalkTopParamBlock}>
                        <div className={s.GoForaWalkParameter}>Temperature: {props.dataToWalk[props.toDayMark].temp}°</div>
                        <img className={s.GoForaWalkParameterIMG} src={cancel} />
                    </div>
                    <div className={s.GoForaWalkTopParamBlock}>
                        <div className={s.GoForaWalkParameter}>feels like: {props.dataToWalk[props.toDayMark].feelsTemp}°</div>
                        <img className={s.GoForaWalkParameterIMG} src={cancel} />
                    </div>
                    <div className={s.GoForaWalkTopParamBlock}>
                        <div className={s.GoForaWalkParameter}>UV radiation: {props.dataToWalk[props.toDayMark].UV}</div>
                        <img className={s.GoForaWalkParameterIMG} src={check} />
                    </div>
                    <div className={s.GoForaWalkTopParamBlock}>
                        <div className={s.GoForaWalkParameter}>Clouds: {props.dataToWalk[props.toDayMark].cloud}%</div>
                        <img className={s.GoForaWalkParameterIMG} src={check} />
                    </div>
                    <div className={s.GoForaWalkTopParamBlock}>
                        <div className={s.GoForaWalkParameter}>Wind speed: {props.dataToWalk[props.toDayMark].wSpeed} m/s</div>
                        <img className={s.GoForaWalkParameterIMG} src={cancel} />
                    </div>
                    <div className={s.GoForaWalkTopParamBlock}>
                        <div className={s.GoForaWalkParameter}>Wind gusts: {props.dataToWalk[props.toDayMark].wGusts} m/s</div>
                        <img className={s.GoForaWalkParameterIMG} src={check} />
                    </div>
                </div>
                <div className={s.GoForaWalkBot}>
                    <div className={s.GoForaWalkBotTextSpecial}><div className={s.GoForaWalkBotText}>Our prescription to...</div> {whatToDo ? 'not to go outside' : 'go for a walk'}</div>
                    <div className={s.GoForaWalkBotTextB}>Your outfit must be like this <img src={whatToDo ? home : walk} className={s.GoForaWalkIMG} /></div>
                </div>
            </div>
        </div>
    )
}

export default GoForaWalk   