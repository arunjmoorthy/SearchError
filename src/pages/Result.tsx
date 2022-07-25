import { useEffect, useState, Dispatch, SetStateAction } from "react";
import styles from "../styles/Result.module.css";

interface ResultProps {
  setInterVisible: Dispatch<SetStateAction<boolean>>;
  success: boolean;
  startTime: number;
  rtArr: number[];
  setrtArr: Dispatch<SetStateAction<number[]>>;
  id: String;
  trialIndex: number;
  type: number[];
  targetLocArr: number[];
  first: String;
  responseVal: String;
}

const Result = ({ setInterVisible, success, startTime, rtArr, setrtArr, id, trialIndex, type, targetLocArr, first, responseVal }: ResultProps) => {
  
  let [targetLoc, setTargetLoc] = useState<number>(999);
  let [trialType, setTrialType] = useState<number>(0);
  let [RT, setRT] = useState<number>(0);
  let reactionTime = 0;

  const pushData = async () => {

    if(trialIndex < 100){
      setTargetLoc(targetLocArr[trialIndex]);
      setTrialType(type[trialIndex]);
    }
    else{
      setTargetLoc(targetLocArr[99-trialIndex]);
      setTrialType(type[99-trialIndex]);
    }

    console.log(id);
    console.log(trialIndex);
    console.log(first);
    console.log(trialType);
    console.log(targetLoc);
    console.log(responseVal);
    console.log(reactionTime);

    const request = await fetch(
        `${process.env.REACT_APP_API_URL}/addTrial`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                trialIndex: trialIndex,
                first: first,
                trialType: trialType,
                targetLoc: targetLoc,
                responseVal: responseVal,
                reactionTime: reactionTime
            }),

        });

    const response = await request.json();

    if (response.success) {
        console.log("yay");
    } else {
        console.log(response.message);
    }
  }

  // update the display after 2s to redisplay the Ts and Ls
  useEffect(() => {
    let endTime = new Date();
    reactionTime = (endTime.getTime())-startTime;

    pushData();
    reactionTime=0;
    const timer = setTimeout(() => {
      setInterVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
    
  }, []);

  return (
    <div className={styles.res}>
      {success ? (
        <h1>Correct</h1>
      ) : (
        <h1>Incorrect</h1>
      )}
    </div>
  );
};

export default Result;
