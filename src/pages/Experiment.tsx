import { SetStateAction, Dispatch } from "react";
import Result from "./Result";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Experiment.module.css";
import Grid from "../components/Grid";
import Intermediate from "./Intermediate";
import Button from '@mui/material/Button';

interface ExperimentProps {
    trials: Stimulus[][];
    setTrials: Dispatch<SetStateAction<Stimulus[][]>>;
    trialIndex: number;
    setTrialIndex: Dispatch<SetStateAction<number>>;
    results: number[];
    setResults: Dispatch<SetStateAction<number[]>>;
}

const Experiment = ({ trials, setTrials, trialIndex, setTrialIndex, results, setResults}: ExperimentProps) => {

    //if user response is correct, render success
    //if user response is wrong, render failure
    let [success, setSuccess] = useState<boolean>(false);
    let intermediate = false;

    // intertrial screen
    const [interVisible, setInterVisible] = useState<boolean>(false);

    const handleButtonClick = () => {
        setInterVisible(true);
    }

    const navigate = useNavigate();

    return (
        <div className={styles.exp}>
            <div>
                {(interVisible) ? <Result success={success} setInterVisible={setInterVisible} /> :
                    <Grid
                        trial={trials[trialIndex]}
                        setTrials={setTrials}
                        setTrialIndex={setTrialIndex}
                        trialIndex={trialIndex}
                        success={success}
                        setSuccess={setSuccess}
                        setInterVisible={setInterVisible}
                        results={results}
                        setResults={setResults}
                    />
                }
                {(trialIndex == 100) ? (<Intermediate trialIndex={trialIndex} intermediate={intermediate}/>) : <p></p>}

            </div>
        </div>
    );
}

export default Experiment;
