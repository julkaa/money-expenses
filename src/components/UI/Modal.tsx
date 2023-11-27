import {ReactNode} from 'react';
import styles from './Modal.module.css';
import {useNavigate} from 'react-router-dom';

type ModalProps = {
    children: ReactNode;
};

const Modal = ({children}: ModalProps) => {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('/list');
    }

    return (
        <>
            <div className={styles.backdrop} onClick={closeHandler}></div>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;
