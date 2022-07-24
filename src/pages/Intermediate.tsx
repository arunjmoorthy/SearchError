import { useEffect, useState } from "react";
import Conclusion from "../components/Conclusion";
import { SetStateAction, Dispatch } from "react";
import styles from "../styles/Intermediate.module.css";
import { Stimulus } from "../interfaces/Stimulus";

interface IntermediateProps {
  trialIndex: number;
  intermediate: boolean;
  setTrialIndex: Dispatch<SetStateAction<number>>;
  setIntermediate: Dispatch<SetStateAction<boolean>>;
  trials: Stimulus[][];
  results: number[];
  id: string;
  trialArrs: number[][];
  orientArrs: number[][];
  type: number[];
  rtArr: number[];
  targetLocArr: number[];
  success: boolean;
}

export default function Intermediate({
  setTrialIndex,
  setIntermediate,
  intermediate,
  trials,
  results,
  id,
  trialArrs,
  orientArrs,
  type,
  rtArr,
  trialIndex,
  targetLocArr,
  success
}: IntermediateProps) {
  
  let [rt, setRT] = useState<number>(0);

  function reverseTrials(arr: Stimulus[][]) {
    let start = 0;
    let fin = arr.length - 1;
    while (start <= fin) {
      let temp: Stimulus[] = arr[start];
      arr[start] = arr[fin];
      arr[fin] = temp;

      start++;
      fin--;
    }
    return arr;
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      setTrialIndex(0);
      setIntermediate(true);
      reverseTrials(trials);
    }
  };

  // add the event listener (for key presses)
  useEffect(() => {
    //pushData();
    window.addEventListener("keyup", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyDown);
    };
  });

  return (
    <div className={styles.interText}>
      {!intermediate ? (
        <div>
          <h2>100 more trials! Almost done!</h2>
          <h1>Press the Enter Key to Continue</h1>
        </div>
      ) : (
        <div className={styles.conc}>
          <Conclusion
            id={id}
            results={results}
            type={type}
            orientArrs={orientArrs}
            trialArrs={trialArrs}
            rtArr={rtArr}
          />
        </div>
      )}
    </div>
  );
}
