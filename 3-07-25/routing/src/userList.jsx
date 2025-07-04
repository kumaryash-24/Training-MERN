import { Link } from "react-router-dom";

function UserList() {
  const users = ["yash", "prakash", "raja"];

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <Link to={`/user/${user}`}>View {user}'s Profile</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
