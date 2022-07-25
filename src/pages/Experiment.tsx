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
  let [targetLoc, setTargetLoc] = useState<number>(999);
  let [trialType, setTrialType] = useState<number>(0);

  // intertrial screen
  const [interVisible, setInterVisible] = useState<boolean>(false);
  let [responseVal, setResponseVal] = useState<string>("incorrect");
  let [first, setFirst] = useState<string>("");

  useEffect(() => {
    if(trialIndex < 100){
      setFirst("first");
      setTargetLoc(targetLocArr[trialIndex]);
      setTrialType(type[trialIndex]);
    } else{
      setFirst("second");
      setTargetLoc(targetLocArr[99-trialIndex]);
      setTrialType(type[99-trialIndex]);
    }
  }, []);
    

  return (
    <div className={styles.exp}>
      <div>
        {trialIndex === 100 ? (
          <div>
            <Result setInterVisible={setInterVisible} success={success} startTime={startTime} rtArr={rtArr} setrtArr={setrtArr} 
            id={id} trialIndex={trialIndex} type={type} targetLocArr={targetLocArr} first={first} responseVal={responseVal}
            trialType={trialType} targetLoc={targetLoc} />
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
              id={id} trialIndex={trialIndex} type={type} targetLocArr={targetLocArr} first={first} responseVal={responseVal} 
              trialType={trialType} targetLoc={targetLoc} />
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
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiment;
