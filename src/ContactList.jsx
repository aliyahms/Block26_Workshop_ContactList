import React from "react";

export default function ContactList({ contacts, setSelectedContactId }) {
  return (
    <table>
      <caption>Contact List</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c.id} onClick={() => setSelectedContactId(c.id)}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
