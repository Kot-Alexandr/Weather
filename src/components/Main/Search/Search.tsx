import { useState } from 'react'
import s from './Search.module.scss'
import looking from './../../../accets/img/Search/looking.svg'
import question from './../../../accets/img/Search/pinMark.svg'

const Search = () => {

    const [town, setTown] = useState('')
    const [guess, setGuess] = useState<any>(null)

    let lat = 0
    let lng = 0

    const townFunction = (e: any) => {
        
        setTown(e) // сделать сжимание пробелов
        if (e !== '') {
            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${e}&format=json&apiKey=b50c255971104b5abb7938f4ab1bf955`)
                .then(response => response.json())
                .then(result => setGuess(result))
                .catch(error => console.log('error', error));
        }

    }

    console.log(guess)

    return (
        <div className={s.SearchBG}>
            <input onChange={(e) => townFunction(e.currentTarget.value)} value={town} className={s.InputStyle} />
            <img src={looking} className={s.InputIMG} />
            <div className={s.SearchDiv}>
                {guess && guess.results.length > 0 && guess.results.map((qus: any, index: any) => (<div key={index}><img className={s.SearchIMG} src={question}/>Lon</div>))}
            </div>
            {/* <div>{guess && guess.results.length > 0 && guess.results[0].bbox.lat1}</div>
            <div>{guess && guess.results.length > 0 && guess.results[0].bbox.lon1}</div> */}
        </div>
    )
}

export default Search   