import { Container, Content, Row } from "./styles"
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useState } from "react";



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMultNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber('0');
        setCurrentNumber('0')
        setOperation('x')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleDivideNumbers = () => {

    
    if(currentNumber === '0'){
        window.alert('Error: division for 0')
    }
    else if(firstNumber === '0'){
      setFirstNumber('0');
      setCurrentNumber('0')
      setOperation('/')
    }
    else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultNumbers();
            break;
          case '/':
            handleDivideNumbers();
            break;
          default: 
            break;
        }
    }

  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>
        <Row>
          <Button label="x" onclick={handleMultNumbers}></Button>
          <Button label="/" onclick={handleDivideNumbers}></Button>
          <Button label="0" onclick={() => handleAddNumber('0')}></Button>
          <Button label="ce" onclick={() => handleOnClear()}></Button>
        </Row>
        <Row>
          <Button label="7" onclick={() => handleAddNumber('7')}></Button>
          <Button label="8" onclick={() => handleAddNumber('8')}></Button>
          <Button label="9" onclick={() => handleAddNumber('9')}></Button>
          <Button label="-" onclick={handleMinusNumbers}></Button>
        </Row>
        <Row>
          <Button label="4" onclick={() => handleAddNumber('4')}></Button>
          <Button label="5" onclick={() => handleAddNumber('5')}></Button>
          <Button label="6" onclick={() => handleAddNumber('6')}></Button>
          <Button label="+" onclick={handleSumNumbers}></Button>
        </Row>
        <Row>
          <Button label="1" onclick={() => handleAddNumber('1')}></Button>
          <Button label="2" onclick={() => handleAddNumber('2')}></Button>
          <Button label="3" onclick={() => handleAddNumber('3')}></Button>
          <Button label="=" onclick={handleEquals}></Button>
        </Row>
        </Content>
    </Container>
  );
}

export default App;
