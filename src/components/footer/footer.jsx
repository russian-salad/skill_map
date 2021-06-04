import React from 'react'
import s from './footer.module.css'

export default function Footer() {
    const date =new Date().getFullYear()
    return (
        <footer className={s.footer}>
            <p> © YoursRoadMap {date} </p>
        </footer>
    )
}