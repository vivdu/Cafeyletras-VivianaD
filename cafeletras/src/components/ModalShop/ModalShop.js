import React from "react";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

function ModalShop ({ setIsOpen }) {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
          <i class="fa-solid fa-circle-check"></i>
            <h3 className={styles.heading}>Pago exitoso</h3>
          </div>
          
          <div className={styles.modalContent}>
            Se enviará por correo electrónico toda la información del comprobante de pago y entrega del pedido
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Cerrar
              </button>
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

export default ModalShop;