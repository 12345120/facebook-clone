import Contact from "./Contact";

function Contacts({ contacts }) {
  return (
    <div className="group">
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name}/>
      ))}
    </div>
  );
}

export default Contacts;
