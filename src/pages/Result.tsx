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
  responseType: string;
  trialArrs: number[][];
  orientArrs: number[][];
}

const Result = ({ setInterVisible, success, startTime, rtArr, setrtArr, id, trialIndex, type, 
  targetLocArr, responseVal, intermediate, responseType, trialArrs, orientArrs }: ResultProps) => {
  
  let [RT, setRT] = useState<number>(0);
  let reactionTime = 0;
  let targetLoc = 999;
  let trialType = 0; //0 is absent trial and 1 is target-present trial
  let first = "first";
  let curTrial: number[] = [];
  let curOrient: number[] = [];
  let setSize = 25;
  let stimID = trialIndex;
  
  const pushData = async () => {

    console.log(responseType);
    console.log(responseVal);

    const request = await fetch(
        `${process.env.REACT_APP_API_URL}/addTrial`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                trialIndex,
                first,
                trialType,
                targetLoc,
                responseVal,
                reactionTime,
                responseType,
                curTrial,
                curOrient,
                setSize,
                stimID
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
      curTrial = trialArrs[trialIndex-1];
      curOrient = orientArrs[trialIndex-1];
      stimID = trialIndex;
    } else{
      first = "second";
      targetLoc = (targetLocArr[10-trialIndex]); //change 10 back to 100
      trialType = (type[10-trialIndex]); //change 10 back to 100
      curTrial = trialArrs[10-trialIndex]; //change 10 back to 100
      curOrient = orientArrs[10-trialIndex]; //change 10 back to 100
      stimID = 11-trialIndex; //change 11 back to 101
    }

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
