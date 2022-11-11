import style from './Relogio.module.scss'

interface Props {
    tempo: number | undefined
}

export default function Relogio ({ tempo = 0 } : Props) {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    const [ minDezena, minUnidade ] = String(minutos).padStart(2,'0')
    const [ segDezena, segUnidade ] = String(segundos).padStart(2,'0')
    return (
        <>
            <span className={style.relogioNumero}>{minDezena}</span>
            <span className={style.relogioNumero}>{minUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDezena}</span>
            <span className={style.relogioNumero}>{segUnidade}</span>
        </>
    )
}

