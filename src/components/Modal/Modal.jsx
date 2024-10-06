import css from './Modal.module.css'; 

export default function Modal ({ onClose, onConfirm, message }) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h2>Confirmation</h2>
        <p>{message}</p>
        <button className={css.confirmButton} onClick={onConfirm}>Confirm</button>
        <button className={css.cancelButton} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

