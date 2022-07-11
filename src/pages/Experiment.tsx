import { SetStateAction, Dispatch } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Success from "../components/Success";
import Failure from "../components/Failure";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Experiment.module.css";
import Grid from "../components/Grid";

interface ExperimentProps {
    arr: Stimulus[];
    setArr: Dispatch<SetStateAction<Stimulus[]>>;
}

const Experiment = ({ arr, setArr }: ExperimentProps) => {

    //if user response is correct, render success
    //if user response is wrong, render failure
    const [intermediate, setIntermediate] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <div className={styles.exp}>
            <Grid
              arr={arr}
              setArr={setArr}
            />
        </div>
    );
}

export default Experiment;
