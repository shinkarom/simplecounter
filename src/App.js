import React from 'react';
import { Button } from 'react-bootstrap'
import { styled } from '@stitches/react'

const App = () => {
	
	const [counter, setCounter] = React.useState(0);
	
	const increment = function(){setCounter(counter+1)}
	const decrement = function(){setCounter(counter-1)}
	const reset = function(){setCounter(0)}
	
  return (
		<GlobalDiv>
      <h3>Simple Counter</h3>
	  <CounterShower number={counter} />
	  <Button onClick={decrement}>Decrement</Button>
	  <Button onClick={reset}>Reset</Button>
	  <Button onClick={increment}>Increment</Button>
		</GlobalDiv>
  );
};

const GlobalDiv = styled("div", {
		'margin-left': 'auto',
		'margin-right': 'auto',
		'width': '50%'
	});

function CounterShower(props){
	
	const MySpan = styled("span", {
		'font-size': '30px',
		});
	
	return (
	<div>
		<MySpan>{props.number}</MySpan>
	</div> )
	
}

export default App;
