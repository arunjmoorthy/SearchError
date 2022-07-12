import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Success from "../components/Success";
import Failure from "../components/Failure";
import blackL from "../assets/blackL.png";
import blackT from "../assets/blackT.png";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Experiment.module.css";
import { SetStateAction, Dispatch } from "react";
import { height } from "@mui/system";

interface GridProps {
  trial: Stimulus[];
  setTrials: Dispatch<SetStateAction<Stimulus[][]>>;
}

export default function Grid({ trial, setTrials }: GridProps) {
  return (
    <div style={{ display: "table" }}>
      {}
      {trial.map((stimuli: Stimulus) => (
        <div style={{ display: "table-row" }}>
          <div style={{ display: "table-cell", paddingRight: "50px" }}>
            <div>
              {stimuli.type === 0 ? (
                <div style={{ width: "50px", height: "50px" }}></div>
              ) : (
                <div>
                  <img src={stimuli.type === 1 ? blackL : blackL} width="50px"/>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
