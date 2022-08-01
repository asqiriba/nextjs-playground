import Router from "next/router";

const Users = (props) => {
  return (
    <ul className="list-group">
      {props.users.map((user: any) => (
        <li
          key={user.id}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={(e) => Router.push("/users/[id]", `/users/${user.id}`)}
        >
          <div>
            <h5>{user.name}</h5>
            <p>email: {user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.name}
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Users;
