import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Grid.module.css";
import { SetStateAction, Dispatch, useEffect, useState } from "react";
import Row from "./Row";

interface GridProps {
  trial: Stimulus[];
  setTrialIndex: Dispatch<SetStateAction<number>>;
  trialIndex: number;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  results: number[];
  setResults: Dispatch<SetStateAction<number[]>>;
  intermediate: boolean;
  setIntermediate: Dispatch<SetStateAction<boolean>>;
  setStartTime: Dispatch<SetStateAction<number>>;
  setResponseVal: Dispatch<SetStateAction<string>>;
  setResponseType: Dispatch<SetStateAction<string>>;
}

export default function Grid({
  trial,
  trialIndex,
  setTrialIndex,
  success,
  setSuccess,
  setInterVisible,
  results,
  setResults,
  intermediate,
  setIntermediate,
  setStartTime,
  setResponseVal,
  setResponseType
}: GridProps) {

  let [setSize, SetSetSize] = useState<number>(25);
  let [first, setFirst] = useState<String>("");

  useEffect(() => {
    let start = new Date();
    setStartTime(start.getTime());
  }, []);

  return (
    <div className={styles.totGrid}>
      <div className={styles.header}>
        {intermediate ? (
          <h1>Trial {trialIndex + 101}</h1>
        ) : (
          <h1>Trial {trialIndex + 1}</h1>
        )}
      </div>
      <div className={styles.table} style={{ display: "table" }}>
        <Row
          trial={trial}
          startIndex={0}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setResponseVal={setResponseVal}
          setResponseType={setResponseType}
        />
        <Row
          trial={trial}
          startIndex={7}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setResponseVal={setResponseVal}
          setResponseType={setResponseType}
        />
        <Row
          trial={trial}
          startIndex={14}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setResponseVal={setResponseVal}
          setResponseType={setResponseType}
        />
        <Row
          trial={trial}
          startIndex={21}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setResponseVal={setResponseVal}
          setResponseType={setResponseType}
        />
        <Row
          trial={trial}
          startIndex={28}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setResponseVal={setResponseVal}
          setResponseType={setResponseType}
        />
        <Row
          trial={trial}
          startIndex={35}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setResponseVal={setResponseVal}
          setResponseType={setResponseType}
        />
        <Row
          trial={trial}
          startIndex={42}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setResponseVal={setResponseVal}
          setResponseType={setResponseType}
        />
      </div>
    </div>
  );
}
