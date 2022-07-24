import { useEffect } from "react";

interface ConclusionProps {
    results: number[];
    id: string;
    trialArrs: number[][];
    orientArrs: number[][];
    type: number[];
    rtArr: number[];
}

const Conclusion = ({ type, results, id, orientArrs, trialArrs, rtArr }: ConclusionProps) => {

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
                    results: results,
                    rtArr: rtArr
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