export default function SelectedContact({
  contact: { name, email, address, phone },
  setSelectedContactId,
}) {
  return (
    <article>
      <h2>{name}</h2>
      <address>
        <p>{phone}</p>
        <p>{email}</p>
        <p>
          {address.street}, {address.city} {address.zipcode}
        </p>
      </address>
      <a href="#" onClick={() => setSelectedContactId()}>
        Back to contact list
      </a>
    </article>
  );
}
