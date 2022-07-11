import { SetStateAction, Dispatch } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Success from "../components/Success";
import Failure from "../components/Failure";
import blackL from "../L.png";
import blackT from "../assets/blackT.png";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Experiment.module.css";

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
        <div>
            {arr.map((stim) => (
                <div style={{ display: "table" }}>
                    <div style={{ display: "table-row" }}>
                        <div style={{ display: "table-cell", paddingRight: "50px"}}>
                            <img src={(stim.type === 1) ? blackL : blackT} alt="none" width="50px" />
                        </div>
                        <div style={{ display: "table-cell", paddingRight: "50px"}}>
                            <img src={(stim.type === 1) ? blackL : blackT} alt="none" width="50px" />
                        </div>
                        <div style={{ display: "table-cell", paddingRight: "50px"}}>
                            <img src={(stim.type === 1) ? blackL : blackT} alt="none" width="50px" />
                        </div>
                        <div style={{ display: "table-cell", paddingRight: "50px"}} onClick={() => {console.log("HI");}}>
                            <img src={(stim.type === 1) ? blackL : blackT} alt="none" width="50px" 
                                onClick={() => {console.log("HI");}}/>
                        </div>
                        <div style={{ display: "table-cell", paddingRight: "50px"}}>
                            <img src={(stim.type === 1) ? blackL : blackT} alt="none" width="50px" />
                        </div>
                        <div style={{ display: "table-cell", paddingRight: "50px"}}>
                            <img src={(stim.type === 1) ? blackL : blackT} alt="none" width="50px" />
                        </div>
                        <div style={{ display: "table-cell", paddingRight: "50px"}}>
                            <img src={(stim.type === 1) ? blackL : blackT} alt="none" width="50px" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experiment;
