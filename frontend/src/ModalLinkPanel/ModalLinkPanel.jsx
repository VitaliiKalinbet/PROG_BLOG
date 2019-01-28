import React from 'react';
import style from './ModalLinkPanel.css';

const Modal = ({toggleModal, name, children}) => {
    console.log(children);
    return (
        <div className={style.modalBackdrop} onClick={e => e.target.className.includes('modalBackdrop')? toggleModal(): null}>
            <div className={style.modalWrapper} >
                <div className={style.modalHeader}>
                    <h2>{name}</h2>
                </div>
                <div className={style.modalContent}>
                    {children}
                </div>
                <div className={style.modalFooter}>
                    <button className={`${style.btn} ${style.modalOkBtn}`}>Ok</button>
                    <button className={`${style.btn} ${style.modalCancelBtn}`} onClick={toggleModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;