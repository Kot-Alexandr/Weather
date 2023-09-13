import { useEffect, useState } from 'react'
import moonSwitcher from './../../../accets/img/Switcher/moonSwitcher.svg'
import sunSwitcher from './../../../accets/img/Switcher/sunSwitcher.svg'
import s from './Header.module.scss'

const Header = () => {

    const [theme, setTheme] = useState('dark')

    function changeTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement

        const components = ['body-background-left', 'body-background-right', 'header-text', 'text', 'component-background-chosen', 'component-background-switcher-day', 'component-background-TSS']

        components.forEach((component) => {
            root.style.setProperty(`--${component}-default`,
                `var(--${component}-${theme})`)
        })


    }, [theme])

    return (
        <div className={s.HeaderBG}>
            <div className={s.HeaderTextBlock}>
                <div className={s.HeaderSwitcherBox}>
                    <div className={s.HeaderTextTime}>07:32 AM</div>
                    <div className={s.HeaderSwitcher}>
                        <img className={theme === 'light' ? s.HeaderSwitcherIMGChosen : s.HeaderSwitcherIMG} src={sunSwitcher} onClick={changeTheme} />
                        <img className={theme === 'dark' ? s.HeaderSwitcherIMGChosen : s.HeaderSwitcherIMG} src={moonSwitcher} onClick={changeTheme} />
                    </div>
                </div>
                <div className={s.HeaderTextDate}>Wednesday, 14 April, 2023</div>
                <div className={s.HeaderTextImgAndTextDay}>
                    {/* <img src={sunSVG} className={s.HeaderTextImg} /> */}
                    <svg className={s.HeaderTextImg}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12.5523 1 13 1.44772 13 2V4.06242C13.7177 4.1524 14.4261 4.33969 15.1035 4.62452L16.134 2.83977C16.4101 2.36148 17.0217 2.1976 17.5 2.47375C17.9783 2.74989 18.1422 3.36148 17.866 3.83977L16.835 5.62558C17.4145 6.06627 17.9337 6.58546 18.3744 7.16501L20.1602 6.13397C20.6385 5.85783 21.2501 6.02171 21.5263 6.5C21.8024 6.97829 21.6385 7.58988 21.1602 7.86603L19.3755 8.89645C19.6603 9.57395 19.8476 10.2823 19.9376 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H19.9376C19.8476 13.7177 19.6603 14.426 19.3755 15.1035L21.1603 16.134C21.6386 16.4101 21.8024 17.0217 21.5263 17.5C21.2502 17.9783 20.6386 18.1422 20.1603 17.866L18.3744 16.835C17.9337 17.4145 17.4145 17.9337 16.835 18.3744L17.866 20.1603C18.1422 20.6386 17.9783 21.2502 17.5 21.5263C17.0217 21.8024 16.4101 21.6386 16.134 21.1603L15.1035 19.3755C14.426 19.6603 13.7177 19.8476 13 19.9376V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19.9376C10.2823 19.8476 9.57396 19.6603 8.89648 19.3755L7.86603 21.1603C7.58988 21.6386 6.97829 21.8024 6.5 21.5263C6.02171 21.2502 5.85783 20.6386 6.13397 20.1603L7.16503 18.3744C6.58547 17.9337 6.06627 17.4145 5.62557 16.835L3.83972 17.866C3.36143 18.1422 2.74984 17.9783 2.4737 17.5C2.19755 17.0217 2.36143 16.4101 2.83972 16.134L4.62451 15.1035C4.33968 14.426 4.1524 13.7177 4.06242 13H2C1.44772 13 1 12.5523 1 12C1 11.4477 1.44772 11 2 11H4.06242C4.1524 10.2823 4.33969 9.57395 4.62452 8.89645L2.83977 7.86603C2.36148 7.58988 2.1976 6.97829 2.47375 6.5C2.74989 6.02171 3.36148 5.85783 3.83977 6.13397L5.62558 7.16501C6.06627 6.58546 6.58546 6.06627 7.16501 5.62558L6.13397 3.83977C5.85783 3.36148 6.02171 2.74989 6.5 2.47375C6.97829 2.1976 7.58988 2.36148 7.86603 2.83977L8.89645 4.62452C9.57395 4.33969 10.2823 4.1524 11 4.06242V2C11 1.44772 11.4477 1 12 1ZM12 6C10.9608 6 9.92344 6.26791 8.99967 6.80203C8.09301 7.32626 7.32626 8.09301 6.80203 8.99967C6.26791 9.92344 6 10.9608 6 12C6 13.0392 6.26791 14.0765 6.80202 15.0003C7.32625 15.907 8.09301 16.6737 8.99969 17.198C9.92345 17.7321 10.9608 18 12 18C13.0392 18 14.0765 17.7321 15.0003 17.198C15.907 16.6737 16.6737 15.907 17.198 15.0003C17.7321 14.0765 18 13.0392 18 12C18 10.9608 17.7321 9.92344 17.198 8.99967C16.6737 8.09301 15.907 7.32626 15.0003 6.80203C14.0766 6.26791 13.0392 6 12 6Z" fill="currentColor" />
                    </svg>
                    <div className={s.HeaderTextDayTime}>Good morning My wise friend!</div>
                </div>
            </div>
        </div>
    )
}

export default Header   