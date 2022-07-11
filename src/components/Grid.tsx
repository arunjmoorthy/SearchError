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
    arr: Stimulus[];
    setArr: Dispatch<SetStateAction<Stimulus[]>>;
}

export default function Grid({ arr, setArr}: GridProps) {
    return(
        <div style={{ display: "table" }}>
            {arr.map((stim) => (
            <div style={{ display: "table-row" }}>
                <div style={{ display: "table-cell", paddingRight: "50px" }}>
                    <div>
                        {stim.type == 0 
                        ? <div style={{width:"50px", height:"50px"}}></div>
                        : <img
                            src={(stim.type == 1 ? {blackL} : {blackT})}
                            alt="none"
                            width="50px"
                        />
                    }
                    </div>
                </div>


                <div style={{ display: "table-cell", paddingRight: "50px" }}>
                <img
                    src={stim.type === 1 ? blackL : blackT}
                    alt="none"
                    width="50px"
                />
                </div>
                <div style={{ display: "table-cell", paddingRight: "50px" }}>
                <img
                    src={stim.type === 1 ? blackL : blackT}
                    alt="none"
                    width="50px"
                />
                </div>
                <div
                style={{ display: "table-cell", paddingRight: "50px" }}
                onClick={() => {
                    console.log("HI");
                }}
                >
                <img
                    src={stim.type === 1 ? blackL : blackT}
                    alt="none"
                    width="50px"
                    onClick={() => {
                    console.log("HI");
                    }}
                />
                </div>
                <div style={{ display: "table-cell", paddingRight: "50px" }}>
                <img
                    src={stim.type === 1 ? blackL : blackT}
                    alt="none"
                    width="50px"
                />
                </div>
                <div style={{ display: "table-cell", paddingRight: "50px" }}>
                <img
                    src={stim.type === 1 ? blackL : blackT}
                    alt="none"
                    width="50px"
                />
                </div>
                <div style={{ display: "table-cell", paddingRight: "50px" }}>
                <img
                    src={stim.type === 1 ? blackL : blackT}
                    alt="none"
                    width="50px"
                />
                </div>
            </div>
            ))}
        </div>
    );
}
