import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Adams",
      image:
        "https://images.unsplash.com/photo-1601582589907-f92af5ed9db8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jonathan-adams-6BRPupXqvDQ-unsplash.jpg&w=640",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
