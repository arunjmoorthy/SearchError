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
import Row from "./Row";

interface GridProps {
  trial: Stimulus[];
  setTrials: Dispatch<SetStateAction<Stimulus[][]>>;
}

export default function Grid({ trial, setTrials }: GridProps) {
  return (
    <div style={{ display: "table" }}>
      <Row trial={trial} startIndex={0}/>
      <Row trial={trial} startIndex={7}/>
      <Row trial={trial} startIndex={14}/>
      <Row trial={trial} startIndex={21}/>
      <Row trial={trial} startIndex={28}/>
      <Row trial={trial} startIndex={35}/>
      <Row trial={trial} startIndex={42}/>
    </div>
  );
}
