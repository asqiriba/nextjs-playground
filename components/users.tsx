const Users = (props) => {
  return (
    <ul className="list-group">
      {props.users.map((user: any) => (
        <li key={user.id} className="list-group-item list-group-item-action">
          <h5>{user.name}</h5>
          <p>email: {user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;
