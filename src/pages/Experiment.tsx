import { SetStateAction, Dispatch } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Success from "../components/Success";
import Failure from "../components/Failure";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Experiment.module.css";
import Grid from "../components/Grid";
import Button from '@mui/material/Button';

interface ExperimentProps {
    trials: Stimulus[][];
    setTrials: Dispatch<SetStateAction<Stimulus[][]>>;
    trialIndex: number;
    setTrialIndex: Dispatch<SetStateAction<number>>;
}

const Experiment = ({ trials, setTrials, trialIndex, setTrialIndex }: ExperimentProps) => {

    //if user response is correct, render success
    //if user response is wrong, render failure
    let [success, setSuccess] = useState<boolean>(false);

    const [interVisible, setInterVisible] = useState<boolean>(false);

     const handleButtonClick = () => {
        setInterVisible(true);
     }

    const navigate = useNavigate();

    return (
        <div className={styles.exp}>
            {trials.map((stimuli: Stimulus[]) => (
                <div>
                    <Grid
                        trial={trials[trialIndex]}
                        setTrials={setTrials}
                        setTrialIndex={setTrialIndex}
                        trialIndex={trialIndex}
                        success={success}
                        setSuccess={setSuccess}
                    />
                    <div>
                        {/* how to make the success/failure component only show for a couple seconds */}
                        {success ? <Success /> : <Failure />}
                        {success = false}
                    </div>
                </div>
            ))}

            <div>
                <Button variant="contained" onClick={() => { navigate("/conclusion"); }}>
                    Finish Experiment!
                </Button>
            </div>
            
        </div>
    );
}

export default Experiment;
