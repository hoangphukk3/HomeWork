import { useState } from "react";
const Appss = () => {
  const [fullName, setFullName] = useState({ firstname: "", lastname: "" });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFullName({
      ...fullName,
      [name]: value,
    });
  };
  return (
    <div>
      <input name="firstname" value={fullName.firstname} onChange={onChange} />
      <input name="lastname" value={fullName.lastname} onChange={onChange} />
      <div>{`Full name: ${fullName.firstname} ${fullName.lastname}`}</div>
    </div>
  );
};
export default Appss;
