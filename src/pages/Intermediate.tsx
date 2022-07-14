import { useNavigate } from "react-router-dom";
import Experiment from "./Experiment";
import { useEffect } from "react";
import { BooleanLiteral } from "typescript";

interface IntermediateProps{
    trialIndex: number;
    intermediate: boolean;
}

export default function Intermediate( {trialIndex, intermediate}: IntermediateProps){
    useEffect(() => {
        trialIndex = 0;
        intermediate = true;
    }, [])

    const navigate = useNavigate();

    return(
        <h2>100 more trials! Almost done!</h2>
    );
}