import Experiment from "./Experiment";
import { useEffect } from "react";
import Conclusion from "../components/Conclusion";
import { SetStateAction, Dispatch } from "react";
import styles from "../styles/Intermediate.module.css";
import { Stimulus } from "../interfaces/Stimulus";
import { IndTrial } from "../interfaces/IndTrial";

interface IntermediateProps {
  trialIndex: number;
  intermediate: boolean;
  setTrialIndex: Dispatch<SetStateAction<number>>;
  setIntermediate: Dispatch<SetStateAction<boolean>>;
  trials: Stimulus[][];
  results: number[];
  id: number;
  trialArrs: number[][];
  orientArrs: number[][];
  type: number[];
}

export default function Intermediate({
  setTrialIndex,
  setIntermediate,
  trialIndex,
  intermediate,
  trials,
  results,
  id,
  trialArrs,
  orientArrs,
  type
}: IntermediateProps) {

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
          />
        </div>
      )}
    </div>
  );
}
