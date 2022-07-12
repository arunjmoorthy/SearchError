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
    trials: Stimulus[][];
    setTrials: Dispatch<SetStateAction<Stimulus[][]>>;
    trialIndex: number;
    setTrialIndex: Dispatch<SetStateAction<number>>;
}

const Experiment = ({ trials, setTrials, trialIndex, setTrialIndex }: ExperimentProps) => {

    //if user response is correct, render success
    //if user response is wrong, render failure
    const [intermediate, setIntermediate] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <div className={styles.exp}>
            <Grid
                trial={trials[trialIndex]}
                setTrials={setTrials}
            />
        </div>
    );
}

export default Experiment;
