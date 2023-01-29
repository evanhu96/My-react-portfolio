import { useState, useRef, useEffect } from "react";

const Contact = ({ lastClick, setLastClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);


  const nameClickOutside = (e) => {
    if (!refOne.current.contains(e.target) & !refOne.current.value) {
      console.log(document.getElementById("alert"));
      document.getElementById("alert").removeAttribute("hidden");
    }
  };
  if (lastClick == "name") {
    document.addEventListener("click", nameClickOutside, true);
  }
  const emailClickOutside = (e) => {
    if (!refTwo.current.contains(e.target) & !refTwo.current.value) {
      document.getElementById("alert").removeAttribute("hidden");
    }
  };
  if (lastClick == "email") {
    document.addEventListener("click", emailClickOutside, true);
  }
  const messageClickOutside = (e) => {
    if (!refThree.current.contains(e.target) & !refThree.current.value) {
      document.getElementById("alert").removeAttribute("hidden");
    }
  };
  if (lastClick == "message") {
    document.addEventListener("click", messageClickOutside, true);
  }

  const handleSubmit = (e) => {
    console.log(name, email, message);
    document.getElementById("alert").setAttribute("hidden",'');
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="name">name:</div>
        <input
          placeholder="name"
          id="name"
          className="contact"
          onClick={(e) => setLastClick(`${e.target.id}`)}
          onChange={(e) => setName(e.target.value)}
          ref={refOne}
        />
        <div>email:</div>
        <input
          placeholder="email"
          className="contact"
          id="email"
          onClick={(e) => setLastClick(`${e.target.id}`)}
          onChange={(e) => setName(e.target.value)}
          ref={refTwo}
        />
        <div>message:</div>
        <textarea
          placeholder="message"
          id="message"
          className="contact"
          onClick={(e) => setLastClick(`${e.target.id}`)}
          onChange={(e) => setName(e.target.value)}
          ref={refThree}
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
      <h1 hidden={true} id="alert">
        Please Fill All Categories
      </h1>
    </div>
  );
};

export default Contact;
