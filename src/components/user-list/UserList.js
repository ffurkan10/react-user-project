import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../user/User";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [click, setClick] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${click}`
      );
      setUsers(response.data.results);
    };
    fetchUsers();
  }, [click]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setClick((prew) => prew + 5);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="user__list">
      <ul className="user__list__ul">
        <User users={users} setUsers={setUsers} />
      </ul>
      <button className="user__list__click" onClick={handleClick}>
        {" "}
        {loading ? "Loading..." : "More Users"}
      </button>
    </div>
  );
};

export default UserList;
