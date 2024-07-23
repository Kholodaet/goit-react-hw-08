import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="card">
        <h1 className="titlePhone">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && !error && <p>Please wait,loading...</p>}
        {error && <p>Oops,something wrong...</p>}
        <ContactList />
      </div>
    </div>
  );
}

export default App;
