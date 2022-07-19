import { useEffect } from "react";
import {Stimulus}  from "../interfaces/Stimulus";

interface ConclusionProps {
    results: number[];
    id: number;
    trialArrs: number[][];
    orientArrs: number[][];
    type: number[];
}

const Conclusion = ({ type, results, id, orientArrs, trialArrs }: ConclusionProps) => {

    console.log(results);
    console.log(id);

    const pushData = async () => {
        const request = await fetch(
            `${process.env.REACT_APP_API_URL}/addTrial`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: id,
                    type: type,
                    orientArrs: orientArrs,
                    trialArrs: trialArrs,
                    results: results
                }),
                
            });

        const response = await request.json();

        if (response.success) {
            console.log("yay");
        } else {
            console.log(response.message);
        }
    }

    useEffect(() => {
        pushData();
    }, [])

    return (
        <div>
            <p>Thank you so much for doing this experiment!</p>
        </div>
    )
}

export default Conclusion;