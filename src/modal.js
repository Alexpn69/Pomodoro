import React from "react";
import './modal.css'

export default function Modal({active, activeA, setActive, setActiveA, children}){

return (

    <><div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
    
    
    <div className={activeA ? 'modal active' : 'modal'} onClick={() => setActiveA(false)}>
            <div className={activeA ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div></>


)

}