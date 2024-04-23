import Button from "./button";

const Calculator = () => {
  return (
    <>
      <div className="calculator">
        <div className="calculator__result"> 0</div>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>+</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>=</Button>
        <Button>0</Button>
      </div>
    </>
  );
};
export default Calculator;
