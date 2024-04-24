const Calculator = () => {
  return (
    <>
      <div className="calculator">
        <div className="calculator__screen"> 0</div>
        <button className="calculator__btn calculator__btn--number">7</button>
        <button className="calculator__btn calculator__btn--number">8</button>
        <button className="calculator__btn calculator__btn--number">9</button>
        <button className="calculator__btn calculator__btn--subtraction">
          -
        </button>

        <button className="calculator__btn calculator__btn--number">4</button>
        <button className="calculator__btn calculator__btn--number">5</button>
        <button className="calculator__btn calculator__btn--number">6</button>
        <button className="calculator__btn calculator__btn--addition">+</button>
        <button className="calculator__btn calculator__btn--number">1</button>
        <button className="calculator__btn calculator__btn--number">2</button>
        <button className="calculator__btn calculator__btn--number">3</button>
        <button className="calculator__btn calculator__btn--delete">C</button>
        <button className="calculator__btn calculator__btn--number">0</button>
        <button className="calculator__btn calculator__btn--equals">=</button>
      </div>
    </>
  );
};
export default Calculator;
