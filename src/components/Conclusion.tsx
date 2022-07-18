import { useEffect } from "react";
import {Stimulus}  from "../interfaces/Stimulus";
import {IndTrial}  from "../interfaces/IndTrial";

interface ConclusionProps {
    indTrials: IndTrial[];
    results: number[];
    id: number;
}

const Conclusion = ({ indTrials, results, id }: ConclusionProps) => {

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
                    indTrials: indTrials,
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