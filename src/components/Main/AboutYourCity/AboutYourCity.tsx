import { DragEvent, useState } from 'react'
import s from './AboutYourCity.module.scss'

const AboutYourCity = (props: any) => {

    const [mainTown, setMainTown] = useState([
        { id: 1, order: 1, text: "Dkaka" },
        { id: 2, order: 2, text: "NY" },
        { id: 3, order: 3, text: "Ossavo" }
    ])

    const [currentTown, setCurrentTown] = useState<any>(null)

    function dragStartHandler(e: any, town: any) {
        setCurrentTown(town)
    }

    function dragEndHendler(e: any) {
        // e.target.style.background = "white"
    }

    function dragOverHandler(e: any) {
        e.preventDefault()
        // e.target.style.background = "lightgray"
    }

    function dropHandler(e: any, town: any) {
        e.preventDefault()
        setMainTown(mainTown.map(t=>{
            if (t.id===town.id) {
                return {...t, order: currentTown.order}
            }
            if (t.id===currentTown.id) {
                return {...t, order: town.order}
            }
            return t
        }))
    }

    const sortTown =(a:any,b:any)=> {
        if (a.order>b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div>
            {mainTown.sort(sortTown).map(town =>
                <div
                    onDragStart={(e) => dragStartHandler(e, town)}
                    onDragLeave={(e) => dragEndHendler(e)}
                    onDragEnd={(e) => dragEndHendler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, town)}
                    draggable={true}
                    className={town.order===1 ? s.DailyWeather1 : town.order===2 ? s.DailyWeather2 : s.DailyWeather3}>
                    {town.text}
                </div>
            )}
        </div>
    )
}

export default AboutYourCity