import Menu from './components/Menu';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import "./App.css";
import Instructions from './pages/Instructions';
import Experiment from './pages/Experiment';
import { Console } from 'console';
import { Stimulus } from './interfaces/Stimulus';

function shuffle(array: number[]) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function App() {

  const [id, setId] = useState<string>('');
  const [arr, setArr] = useState<Stimulus[]>([]);


  //make arr
  let ls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

  const noT: any[][] = [[]];

  for (let i = 0; i <= 49; i++) {
    const shuffledLs: number[] = shuffle(ls);
    const angles: number[] = Array.from({ length: 49 }, () => Math.floor(Math.random() * 360));
    noT.push([shuffledLs, angles, 0]);
  }

  ls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

  const withT: any[][] = [[]];

  for (let i = 0; i <= 49; i++) {
    const shuffledLs: number[] = shuffle(ls);
    const angles: number[] = Array.from({ length: 49 }, () => Math.floor(Math.random() * 360));
    withT.push([shuffledLs, angles, 1]);
  }

  const finArr = [...noT, ...withT];

  useEffect(() => {
    let stimuli: Stimulus[] = [];
    for (let i = 0; i < 10; i++) {
      let stim: Stimulus = { type: 1, orientation: 90 };
      stimuli.push(stim);
    }
    setArr(stimuli);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <Menu
              setId={setId}
              id={id}
            />}
          />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/experiment" element={
            <Experiment
              arr={arr}
              setArr={setArr}
            />}
          />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

