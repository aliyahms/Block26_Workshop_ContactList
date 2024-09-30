import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import SelectedContact from "./SelectedContact";
import "./App.css";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/";

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState();
  const [selectedContact, setSelectedContact] = useState();

  // Get all contacts from API URL one time on page load
  useEffect(() => {
    async function getContacts() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error(response.statusText);
        const result = await response.json();
        setContacts(result);
      } catch (e) {
        console.error(e);
      }
    }
    getContacts();
  }, []);
  // If the selected ID is cleared or not present, then also clear selected contact
  // Otherwise fetch the data from the API URL about the selected contact
  useEffect(() => {
    if (!selectedContactId) {
      return setSelectedContact();
    }
    async function getContact() {
      try {
        const response = await fetch(API_URL + selectedContactId);
        if (!response.ok) throw Error(response.statusText);
        const result = await response.json();
        setSelectedContact(result);
      } catch (e) {
        console.error(e);
      }
    }
    getContact();
  }, [selectedContactId]);

  return;
  selectedContact ? (
    <SelectedContact
      contact={selectedContact}
      setSelectedContactId={setSelectedContactId}
    />
  ) : (
    <ContactList
      contacts={contacts}
      setSelectedContactId={setSelectedContactId}
    />
  );
}

export default App;
