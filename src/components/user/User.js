import React from "react";

const User = ({ users, setUsers }) => {
  const deleteUser = (id) => {
    const newList = users.filter((item) => item.id.value !== id);
    setUsers(newList);
    console.log("newlist", newList);
  };
  console.log("users", users);
  return (
    <div>
      {" "}
      {users.map((user, index) => {
        return (
          <li className="user__list__ul__item" key={index}>
            <div className="user__lists">
              <img src={user.picture.large} alt="" />
              <div className="user__lists__detail">
                <h3>
                  {user.name.title} {user.name.first} {user.name.last}
                </h3>
                <p>Email: {user.email}</p>
                <p>
                  {user.location.country} | {user.location.state}
                </p>
                <button
                  className="user__lists__detail__btn"
                  onClick={() => deleteUser(user.id.value)}
                >
                  Delete User
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default User;
