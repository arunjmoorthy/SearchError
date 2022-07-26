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

    return (
        <div>
            <p>Thank you so much for doing this experiment!</p>
        </div>
    )
}

export default Conclusion;