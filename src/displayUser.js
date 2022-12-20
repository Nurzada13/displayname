import React from "react";

class DisplayUser extends React.Component {
  constructor() {
    super();
  }

  render() {
    let users = ["Jasmine", "Down", "Robert"];
    return (
      <>
        <h2>User names</h2>
        <ul>
          {users.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default DisplayUser;
