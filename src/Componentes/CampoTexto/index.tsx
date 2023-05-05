import React from 'react'
import styles from './CampoTexto.module.scss'

interface CampoTextoProps {
    label: string
    placeholder: string
    valor: string
    aoAlterar: any    
}

export default function CampoTexto({label, placeholder, valor, aoAlterar}:CampoTextoProps) {

    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterar(evento.target.value)        
    }   

    return (
        <div className={styles.campoTexto}>
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required placeholder={placeholder}/> 
        </div>
    )
}
