import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from '../../components/ContactForm/ContactForm'
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from '../../components/SearchBox/SearchBox'

export default function TasksPage() {
  const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}