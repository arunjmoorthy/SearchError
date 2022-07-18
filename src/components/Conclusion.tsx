import { useEffect } from "react";
import {Stimulus}  from "../interfaces/Stimulus";

interface ConclusionProps {
    trials: Stimulus[][];
    results: number[];
    id: number;
}

const Conclusion = ({ trials, results, id }: ConclusionProps) => {

    const pushData = async () => {
        const request = await fetch(
            `${process.env.REACT_APP_API_URL}/addTrial`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    trials,
                    results,
                    id
                }),
            });

        const response = await request.json();

        if (response.success) {
            console.log("yay");
        } else {
            alert("fail");
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