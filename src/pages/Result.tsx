import { useEffect, Dispatch, SetStateAction } from "react";

interface ResultProps {
    setInterVisible: Dispatch<SetStateAction<boolean>>;
}

const Result = ({ setInterVisible }: ResultProps) => {

    // update the display after 2s to redisplay the Ts and Ls
    useEffect(() => {
        const timer = setTimeout(() => {
            setInterVisible(false);
        }, 2000);
        return () => clearTimeout(timer);

    }, []);

    return (
        <div>
            Congrats you did the trial!
        </div>
    )
}

export default Result;