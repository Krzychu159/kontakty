import { useState } from "react";
import "./Form.css";

export const Form = ({ onAddPerson }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // blokada odswiezania
        onAddPerson({ name, tel, city });
      }}
    >
      <div>
        <input
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Imie"
        />
      </div>
      <div>
        <input
          defaultValue={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
          type="text"
          name="tel"
          placeholder="Telefon"
        />
      </div>
      <div>
        <input
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          name="city"
          placeholder="Miasto"
        />
      </div>
      <button disabled={name.length === 0 || tel.length === 0}>Zapisz</button>
    </form>
  );
};
