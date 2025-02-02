import { Tel } from "./Tel";
import { useState } from "react";
import "./PersonInfo.css";

export const PersonInfo = (props) => {
  let stateArray = useState(false);
  let isExpaned = stateArray[0];
  let setIsExpaned = stateArray[1];

  const buttonEl = (
    <button
      onClick={() => {
        setIsExpaned(!isExpaned);
      }}
    >
      {isExpaned ? "Schowaj" : "Pokaż więcej"}
    </button>
  );

  const buttonDelete = (
    <button onClick={() => props.onRemove(props.tel)}>Usuń</button>
  );

  return (
    <li className={isExpaned ? "active" : ""}>
      <h2>{props.name}</h2>
      <div className="buttons">
        {buttonEl}
        {buttonDelete}
      </div>
      {isExpaned && (
        <>
          <h3>
            Tel: <Tel tel={props.tel} />
          </h3>
          {props.city && <h3> Miasto: {props.city}</h3>}
        </>
      )}
    </li>
  );
};
