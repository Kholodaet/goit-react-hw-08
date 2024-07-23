import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filterItems = useSelector(selectFilteredContacts);

  return (
    <>
      <div className={css.listParams}>
        <h2>Check contacts list</h2>
        <p>Length: {filterItems.length}</p>
      </div>
      <ul className={css.contactsList}>
        {filterItems.map((value) => {
          return (
            <li key={value.id} className={css.item}>
              <Contact value={value} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
