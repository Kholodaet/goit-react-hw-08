import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export const Contact = ({ value: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactContainer}>
      <div className={css.contactItem}>
        <p>
          <FaUser className={css.contactIcon} />
          {name}
        </p>

        <p>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
