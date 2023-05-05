import styles from './LinkNav.module.scss'
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames' 

interface linkNavProps {
    children: string
    to: string
    icone: any
}

export default function LinkNav({icone, children, to}: linkNavProps) {
  
  let history = useLocation();
  let atual = history.pathname;
  
  return (
    <NavLink  
        className={classNames({
            [styles.navLink]: true,
            [styles.navLink__ativo]: atual === to
        })}        
        to={to}
        end
    >
        {icone} 
        {children}
    </NavLink>        
  )
}
