import React, { useState } from 'react'
import Header from './components/Header';
import Axios from 'axios'
import styled from 'styled-components';

import Card from './components/Card'

function App() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const [timeoutId,setTimeOutId] = useState([])

let APP_ID = "6a49485d"; 
let APP_KEY="f326ba4cce3d5ae2fe9fe42c81b29022"
const fetchData = async (value) => {
  const response = await Axios.get(
    `https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}`,
  );

  setData(response.data.hits);
  console.log(response)
};

const textChangeHandler = (event) => {
  clearTimeout(timeoutId);
  setValue(event.target.value);
  const timeout = setTimeout(() => fetchData(event.target.value), 500);
  setTimeOutId(timeout);
  }

  const style = {
    margin: '30px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-evenly'
  }
const Placeholder = styled.img`

`
      
  
  return (


    
    <div>
      <Header textChangeHandler={textChangeHandler}/>
      <div className="main" style={style}>
        {
          data.length > 0 ?
          data.map((recipe , index) => <Card key={index} data={recipe.recipe} value={value}/>)
        :<Placeholder src='./favicon.ico'/>
        }

      </div>

    </div>

  )
}

export default App;
