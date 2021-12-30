import { useState } from "react";
import Contact from "./Contact";

function Contacts({ contacts }) {
  const [hovered, setHovered] = useState(false);
  
  const setHoveredFunc = (bool) => {
    setHovered(bool);
  }

  return (
    <div className="">
      {contacts.map((contact) => (
        <Contact
          key={contact.src}
          src={contact.src}
          name={contact.name}
          hovered={hovered}
          setHovered={setHoveredFunc}
        />
      ))}
    </div>
  );
}

export default Contacts;
