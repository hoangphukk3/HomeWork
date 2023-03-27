import { useState } from "react";
import UserProduct from "./User";

const Bai5 = () => {
  const [user, setUser] = useState({
    name: "Nguyễn A",
    email: "NguyenA@gmail.com",
    product: [
      { id: 1, name: "Product 1", price: "$3" },
      { id: 2, name: "Product 2", price: "$5" },
    ],
  });
  return (
    <div>
      <h2>User Infomation</h2>
      <p>name:{user.name}</p>
      <p>{user.email}</p>
      <UserProduct products={user.product} />
    </div>
  );
};
export default Bai5;
