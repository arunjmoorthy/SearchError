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

interface RowProps {
    trial: Stimulus[];
    setTrials: Dispatch<SetStateAction<Stimulus[][]>>;
    startIndex: number;
  }
  

export default function Row(){
    return(
        <div>

        </div>
    );
}