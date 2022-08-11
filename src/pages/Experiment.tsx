import { SetStateAction, Dispatch, useEffect } from "react";
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
  targetLocArr: number[];
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
  type,
  targetLocArr
}: ExperimentProps) => {
  //if user response is correct, render success
  //if user response is wrong, render failure
  const [success, setSuccess] = useState<boolean>(false);
  const [intermediate, setIntermediate] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [rtArr, setrtArr] = useState<number[]>([]);
  const [responseType, setResponseType] = useState<string>("");

  // intertrial screen
  const [interVisible, setInterVisible] = useState<boolean>(false);
  let [responseVal, setResponseVal] = useState<string>("incorrect");
  // on line 49, change 10 back to 100
  return (
    <div className={styles.exp}>
      <div>
        {trialIndex === 10 ? (
          <div>
            <Result setInterVisible={setInterVisible} success={success} startTime={startTime} rtArr={rtArr} setrtArr={setrtArr} 
            id={id} trialIndex={trialIndex} type={type} targetLocArr={targetLocArr} responseVal={responseVal} 
            intermediate={intermediate} responseType={responseType} trialArrs={trialArrs} orientArrs={orientArrs}/>
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
              rtArr={rtArr}
              targetLocArr={targetLocArr}
              success={success}
            />
          </div>
        ) : (
          <div>
            {interVisible ? (
              <Result setInterVisible={setInterVisible} success={success} startTime={startTime} rtArr={rtArr} setrtArr={setrtArr} 
              id={id} trialIndex={trialIndex} type={type} targetLocArr={targetLocArr} responseVal={responseVal} 
              intermediate={intermediate} responseType={responseType} trialArrs={trialArrs} orientArrs={orientArrs}/>
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
                setStartTime={setStartTime}
                setResponseVal={setResponseVal}
                setResponseType={setResponseType}
                type={type}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiment;
