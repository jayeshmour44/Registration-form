import React, { useEffect, useState } from "react";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  const facedata = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const resData = await res.json();
      console.log("Res data : ", resData);
      setUsers(resData);
    } catch (error) {
        console.error('something went wrong! : ', error)
    }
  };

  useEffect(() => {
    facedata();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
