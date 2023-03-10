import './App.css';
import { useState, useEffect, setState } from 'react';
import Axios from 'axios';
// client/src/robot.jpeg
function App() {


  return (
    <div className='App'>
      <div className='Board'>
      </div>
      <h1>Sudoku Game!</h1>
      <div className='random'>
        <img src="https://www.shutterstock.com/shutterstock/photos/1842223342/display_1500/stock-vector-isolated-robot-on-white-background-illustration-1842223342.jpg" className='robot1'/>
        <Grid className='master'/>
        <img src='https://comps.gograph.com/computer-cartoon_gg67841286.jpg' className='computer1'/>
      </div>
      
    </div>
  );
}

function Grid(props) {
  
  const [boxVals, setBoxVals] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/gridValues').then((response) => {
      setBoxVals(response.data);
    });
  }, []);
  // Axios.get('http://localhost:3001/gridValues').then((response) => {
  //   setBoxVals(response.data);
  // })
  const grid = [];
  for (let row = 0; row < 9; row++) {
    grid.push([]);
    for (let col = 0; col < 9; col++) {
      let val='';
      let theKey = 'square' + col + row;
      boxVals.forEach(el => {
        if (el.boxId === theKey) {
          val = el.number;
        }
      })
      // if (('square' + `${col}${row}`) )
      grid[row].push(
        <div className={'square' + `${col}${row}`} key={`${col}${row}`} >
          <Square key={`${col}${row}`} id={'square' + `${col}${row}`} defaultValue={val}/>
        </div>
      )
    }
  }

  return(
    <div className='grid'>
      {grid}
    </div>
  )
}

function Square(props) {
  const { id } = props;
  const { setBoxVals } = props;
  const useInput = init => {
    const [ value, setValue ] = useState(init);
    const onChange = e => {
      setValue(e.target.value);
    };
    return [ value, onChange ];
  };
  const [ number, numberChange ] = useState('');

  const handleKeyPress = (event) => {
    console.log('Handle key press is being called')
    console.log('My key code', event.key);
    console.log('the current number', number);
    if (event.key === 'Enter') {
        console.log('correct key was pressed');
        handleSubmit(event);
    }
    // if (event.key === 'Backspace') {
    //   console.log('Deleted')
    //   handleDelete(event);
    // }
  }

  // const handleDelete = (event) => {
  //   console.log('Handle Delete is being called');
  //   event.preventDefault();
  //   const data = {id: props.id};
  //   Axios.delete('http://localhost:3001/gridValues', {
  //     boxId: data.id,
  //   }).then(() => {
  //     console.log('Success with deleting');
  //     window.location.reload();
  //   })
  // }

  const handleSubmit = (event) => {
    console.log('Handle submit is being called')
    event.preventDefault();
    console.log(number);
    const data = {id: props.id, number};
    Axios.post('http://localhost:3001/gridValues', {
      boxId: data.id,
      number: data.number,
    }).then(() => {
      console.log('Success');
      window.location.reload();
    })
}
  return(
    <form className='squareInputs'>
      <input id={id} defaultValue={props.defaultValue} onChange={(event) => numberChange(event.target.value)} onKeyDown={handleKeyPress}/>
    </form>
  )
} 

export default App;
