import { useState } from "react";

const Apps = () => {
  const [number, setNumber] = useState([]);
  const [sum, setSum] = useState(0);

  const onChange = (e) => {
    setNumber([...number, [e.target.value]]);
    setSum(sum + Number(e.target.value));
  };

  return (
    <div>
      <input placeholder="Number" onChange={onChange} />
      <div>{sum}</div>
    </div>
  );
};

export default Apps;
