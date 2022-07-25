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
  responseVal: String;
  intermediate: boolean
}

const Result = ({ setInterVisible, success, startTime, rtArr, setrtArr, id, trialIndex, type, targetLocArr, responseVal, intermediate }: ResultProps) => {
  
  let [RT, setRT] = useState<number>(0);
  let reactionTime = 0;
  let targetLoc = 999;
  let trialType = 0; //0 is absent trial and 1 is target-present trial
  let first = "first";

  const pushData = async () => {
    console.log("success");

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

    if(!intermediate){
      // console.log("<100");
      // console.log(trialIndex);
      // console.log(type);
      first = "first";
      targetLoc = (targetLocArr[trialIndex-1]);
      trialType = (type[trialIndex-1]);
      // console.log(trialType)
    } else{
      first = "second";
      targetLoc = (targetLocArr[100-trialIndex]);
      trialType = (type[100-trialIndex]);
    }

    pushData();
    reactionTime=0;
    const timer = setTimeout(() => {
      setInterVisible(false);
    }, 5);
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
