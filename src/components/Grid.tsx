import { useNavigate } from "react-router-dom";
import { useState } from "react";
import blackL from "../assets/blackL.png";
import blackT from "../assets/blackT.png";
import { Stimulus } from "../interfaces/Stimulus";
import styles from "../styles/Grid.module.css";
import { SetStateAction, Dispatch } from "react";
import { height } from "@mui/system";
import Row from "./Row";

interface GridProps {
  trial: Stimulus[];
  setTrials: Dispatch<SetStateAction<Stimulus[][]>>;
  setTrialIndex: Dispatch<SetStateAction<number>>;
  trialIndex: number;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  results: number[];
  setResults: Dispatch<SetStateAction<number[]>>;
  intermediate: boolean;
  setIntermediate: Dispatch<SetStateAction<boolean>>;
}

export default function Grid({
  trial,
  setTrials,
  trialIndex,
  setTrialIndex,
  success,
  setSuccess,
  setInterVisible,
  results,
  setResults,
  intermediate,
  setIntermediate
}: GridProps) {

  console.log(trialIndex);
  return (
    <div className={styles.totGrid}>
      <div className={styles.header}>
        {intermediate ? <h1>Trial {trialIndex+101}</h1> : <h1>Trial {trialIndex+1}</h1>} 
      </div>
      <div className={styles.table} style={{ display: "table" }}>
        <Row
          trial={trial}
          startIndex={0}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          success={success}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setIntermediate={setIntermediate}
        />
        <Row
          trial={trial}
          startIndex={7}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          success={success}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setIntermediate={setIntermediate}
        />
        <Row
          trial={trial}
          startIndex={14}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          success={success}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setIntermediate={setIntermediate}
        />
        <Row
          trial={trial}
          startIndex={21}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          success={success}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setIntermediate={setIntermediate}
        />
        <Row
          trial={trial}
          startIndex={28}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          success={success}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setIntermediate={setIntermediate}
        />
        <Row
          trial={trial}
          startIndex={35}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          success={success}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setIntermediate={setIntermediate}
        />
        <Row
          trial={trial}
          startIndex={42}
          setTrialIndex={setTrialIndex}
          trialIndex={trialIndex}
          success={success}
          setSuccess={setSuccess}
          setInterVisible={setInterVisible}
          setResults={setResults}
          results={results}
          intermediate={intermediate}
          setIntermediate={setIntermediate}
        />
      </div>
    </div>
  );
}
