import React from "react";
import { Panel } from "@navikt/ds-react";
import "./Komponent.css";

const Komponent = ({ tekst }) => {
  return (
    <div className="komponent">
      <Panel>
        <p>{tekst} Hello world</p>
      </Panel>
    </div>
  );
};

export default Komponent;
