import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Success from "../components/Success";
import Failure from "../components/Failure";
import blackL from "../assets/blackL.png";
import blackT from "../assets/blackT.png";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Row.module.css";
import { SetStateAction, Dispatch } from "react";
import { height } from "@mui/system";
import { touchRippleClasses } from "@mui/material";
import { start } from "repl";

interface RowProps {
    trial: Stimulus[];
    startIndex: number;
    setTrialIndex: Dispatch<SetStateAction<number>>;
    trialIndex: number;
    success: boolean;
    setSuccess: Dispatch<SetStateAction<boolean>>;
    setInterVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Row({ trial, startIndex, setTrialIndex, trialIndex,
    success, setSuccess, setInterVisible }: RowProps) {
    const [images, setImages] = useState<Stimulus[]>([]);


    const handleClick = () => {
        setTrialIndex(trialIndex + 1);
        setSuccess(true);
        setInterVisible(true);
    }

    useEffect(() => {
        let temp: Stimulus[] = [];
        for (let i = startIndex; i < startIndex + 7; i++) {
            temp.push(trial[i]);
        }
        setImages(temp);
    }, [])


    return (
        <div>
            <div style={{ display: "table-row" }}>
                {images.map((stimulus: Stimulus) => (
                    <div style={{ display: "table-cell", paddingRight: "50px" }}>
                        <div>
                            {stimulus.type === 0 ? (
                                <div style={{ width: "50px", height: "50px" }}></div>
                            ) : (
                                <div>
                                    {(stimulus.type === 1) ?
                                        <img src={blackL} width="50px"
                                            style={{ transform: `rotate(${stimulus.orientation}deg)` }}
                                        />
                                        :
                                        <img src={blackT} width="50px"
                                            style={{ transform: `rotate(${stimulus.orientation}deg)` }} 
                                            onClick={handleClick}/>
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
