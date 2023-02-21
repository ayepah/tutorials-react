import { useState } from "react";
const Content = () => {
  const [name, setName] = useState("Bob");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Carl", "Jibro", "Daniel"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleClickusestate = () => {
    console.log("double clicked");
  };

  const handleClick6 = () => {
    setCount(count + 1);
  };

  const handleClick2 = (name) => {
    console.log(`${name} clicked the button`);
  };

  const handleClick3 = (e) => {
    window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
  };
  return (
    <main>
      <p onDoubleClick={handleClickusestate}>Hello {name}!</p>
      <p onDoubleClick={handleClickusestate}>Count {count}!</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2("Kevin")}>Kevin</button>
      <button onClick={() => handleClick2("Jibro")}>Jibro</button>
      <button onClick={() => handleClick2("Daniel")}>Daniel</button>
      <button className="Daniel" onClick={(e) => handleClick3(e)}>
        My name is Daniel
      </button>

      <button className="Daniel" onClick={handleNameChange}>
        using useState
      </button>

      <button onClick={handleClick6}>Click It</button>
      {/* <button onClick={this.handleClick4}>My name is Daniel</button> */}
    </main>
  );
};

export default Content;
