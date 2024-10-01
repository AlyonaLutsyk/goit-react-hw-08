import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
       <li className={css.item}>
            <p className={css.contact}>
                <span className={css.name}>
                    <FaUser className={css.icon} />
                    {name}
                </span> 
                <span className={css.number}><FaPhoneAlt className={css.icon} />{number}</span>
            </p>
            <button onClick={() => dispatch(deleteContact(id))} className={css.button}>
                Delete
            </button>
        </li>
  );
}
