import React from "react";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

function ModalReserva ({ setIsOpen }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
          <i class="fa-solid fa-circle-check"></i>
            <h3 className={styles.heading}>Enviado!</h3>
          </div>
          
          <div className={styles.modalContent}>
            Se enviará por correo electrónico la confirmación de la reserva
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              
              <Link to="/"><button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}>
                Ir al inicio
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalReserva;