import Menu from "./components/Menu";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Instructions from "./pages/Instructions";
import Experiment from "./pages/Experiment";
import { Console } from "console";
import { Stimulus } from "./interfaces/Stimulus";
import Intermediate from "./pages/Intermediate";
import { IndTrial } from "./interfaces/IndTrial";

//shuffle 2D array
function shuffleMatrix(arr2: Stimulus[][]) {
  for (let i = arr2.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
  }
  return arr2;
}

//shuffle 1D array
function shuffle(array: Stimulus[]) {
  var m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function App() {
  const [id, setId] = useState<number>(0);
  const [trials, setTrials] = useState<Stimulus[][]>([]);
  const [trialndex, setTrialIndex] = useState<number>(0);
  const [results, setResults] = useState<number[]>([]);
  const [indTrials, setIndTrials] = useState<IndTrial[]>([]);
  const [trialArrs, setTrialArrs] = useState<number[][]>([]);
  const [orientArrs, setOrientArrs] = useState<number[][]>([]);
  const [type, setType] = useState<number[]>([])

  useEffect(() => {
    let temp: Stimulus[][] = [];
    let stimuli: Stimulus[] = [];
    let stim: Stimulus;
    // target absent trials
    for (let j = 0; j < 50; j++) {
      for (let i = 0; i < 25; i++) {
        stim = {
          type: 1,
          orientation: Math.floor(Math.random() * 360),
          category: 0,
        };
        // stimuli holds 25 Ls (a full trial)
        stimuli.push(stim);
      }
      for (let i = 0; i < 24; i++) {
        stim = {
          type: 0,
          orientation: Math.floor(Math.random() * 360),
          category: 0,
        };
        stimuli.push(stim);
      }
      stimuli = shuffle(stimuli);
      // save the full trial
      temp.push(stimuli);
      stimuli = [];
    }

    // target present
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 24; j++) {
        stim = {
          type: 1,
          orientation: Math.floor(Math.random() * 360),
          category: 1,
        };
        stimuli.push(stim);
      }
      stimuli.push({
        type: 2,
        orientation: Math.floor(Math.random() * 360),
        category: 1,
      });

      for (let j = 0; j < 24; j++) {
        stim = {
          type: 0,
          orientation: Math.floor(Math.random() * 360),
          category: 1,
        };
        stimuli.push(stim);
      }
      // save the full trial
      stimuli = shuffle(stimuli);
      temp.push(stimuli);
      stimuli = [];
    }
    temp = shuffleMatrix(temp);
    setTrials(temp);

    let tempOrient = [];
    let tempTrial = [];
    let tempType = [];

    for(let i = 0; i < temp.length; i++){
      let tempStim: Stimulus[] = temp[i];
      let orient: number[] = [];
      let trl: number[] = [];
      let typ: number = 0;
      for(let j = 0; j < tempStim.length; j++){
        let stimu: Stimulus = tempStim[j];
        orient.push(stimu.orientation);
        trl.push(stimu.category);
        typ = stimu.type;
      }
      tempOrient.push(orient);
      tempTrial.push(trl);
      tempType.push(typ);
    }

    setOrientArrs(tempOrient);
    setTrialArrs(tempTrial);
    setType(tempType);
}, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu setId={setId} id={id} />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/experiment"
            element={
              <Experiment
                trials={trials}
                setTrials={setTrials}
                trialIndex={trialndex}
                setTrialIndex={setTrialIndex}
                results={results}
                setResults={setResults}
                id={id}
                trialArrs={trialArrs}
                orientArrs={orientArrs}
                type={type}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
