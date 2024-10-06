import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contacts/operations';
import { openModal, closeModal } from '../../redux/modal/slice'; 
import Modal from '../Modal/Modal';
import { selectModal } from '../../redux/modal/selectors'; 
import { toast } from 'react-hot-toast';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const { isOpen, contactToDelete } = useSelector(selectModal); 

  const handleDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      toast.success(`${name} has been deleted!`);
      dispatch(closeModal()); 
    }
  };

  const openDeleteModal = () => {
    dispatch(openModal(id)); 
  };


  return (
    <>
      <li className={css.item}>
        <p className={css.contact}>
          <span className={css.name}>
            <FaUser className={css.icon} />
            {name}
          </span>
          <span className={css.number}>
            <FaPhoneAlt className={css.icon} />
            {number}
          </span>
        </p>
        <button onClick={openDeleteModal} className={css.button}>Delete</button>
      </li>

      {isOpen && (
        <Modal
          onClose={() => dispatch(closeModal())}
          onConfirm={handleDelete}
          message={`Are you sure you want to delete ${name}?`} 
        />
      )}
    </>
  );
}