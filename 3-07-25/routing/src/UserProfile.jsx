import { useParams } from "react-router-dom";

function UserProfile() {
  const { username } = useParams();

  return (
    <div>
      <h2>Hello, {username}!</h2>
      <p>Welcome back once again ❤️😊.</p>
    </div>
  );
}

export default UserProfile;
