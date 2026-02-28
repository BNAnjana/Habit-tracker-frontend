import Layout from "../components/layout/Layout";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 dark:text-gray-100">
        Profile
      </h1>

      <div className="bg-card p-6 rounded-xl shadow-md max-w-md dark:text-gray-100">
        <p><strong>Name:</strong> {user?.name}</p>
        <p className="mt-2">
          <strong>Email:</strong> {user?.email}
        </p>
      </div>
    </Layout>
  );
};

export default Profile;