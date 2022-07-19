import { SetStateAction, Dispatch } from "react";
import Result from "./Result";
import { useState } from "react";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Experiment.module.css";
import Grid from "../components/Grid";
import Intermediate from "./Intermediate";

interface ExperimentProps {
  trials: Stimulus[][];
  trialIndex: number;
  setTrialIndex: Dispatch<SetStateAction<number>>;
  results: number[];
  setResults: Dispatch<SetStateAction<number[]>>;
  id: string;
  trialArrs: number[][];
  orientArrs: number[][];
  type: number[];
}

const Experiment = ({
  trials,
  trialIndex,
  setTrialIndex,
  results,
  setResults,
  id,
  trialArrs,
  orientArrs,
  type
}: ExperimentProps) => {
  //if user response is correct, render success
  //if user response is wrong, render failure
  const [success, setSuccess] = useState<boolean>(false);
  const [intermediate, setIntermediate] = useState<boolean>(false);

  // intertrial screen
  const [interVisible, setInterVisible] = useState<boolean>(false);

  return (
    <div className={styles.exp}>
      <div>
        {trialIndex === 100 ? (
          <div>
            <Intermediate
              intermediate={intermediate}
              setTrialIndex={setTrialIndex}
              trialIndex={trialIndex}
              setIntermediate={setIntermediate}
              trials={trials}
              results={results}
              id={id}
              trialArrs={trialArrs}
              orientArrs={orientArrs}
              type={type}
            />
          </div>
        ) : (
          <div>
            {interVisible ? (
              <Result setInterVisible={setInterVisible} success={success} />
            ) : (
              <Grid
                trial={trials[trialIndex]}
                setTrialIndex={setTrialIndex}
                trialIndex={trialIndex}
                success={success}
                setSuccess={setSuccess}
                setInterVisible={setInterVisible}
                results={results}
                setResults={setResults}
                intermediate={intermediate}
                setIntermediate={setIntermediate}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiment;
