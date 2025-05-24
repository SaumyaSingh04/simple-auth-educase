import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F8F9] to-[#e9e6fa] px-4">
      <div className="w-full max-w-sm mx-auto mt-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col items-center pt-8 pb-4">
            <div className="relative">
              <img
                src={
                  user.profilePic ||
                  "data:image/jpeg;base64,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"
                }
                alt="profile"
                className="rounded-full w-28 h-28 object-cover border-4 border-[#E9DFFC] shadow-sm"
              />
              <button
                className="absolute bottom-0 right-0 bg-[#6C25FF] p-2 rounded-full border-2 border-white shadow-md"
                aria-label="Edit profile picture"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 13V7l6-4 6 4v6l-6 4-6-4z" />
                </svg>
              </button>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-[#1D2226]">
              {user.name}
            </h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            {user.company && (
              <p className="text-gray-400 text-xs mt-1">{user.company}</p>
            )}
            {user.phone && (
              <p className="text-gray-400 text-xs">{user.phone}</p>
            )}
            {user.agency && (
              <p className="text-gray-400 text-xs">Agency: {user.agency}</p>
            )}
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-200 mx-6" />

          {/* Bio / Description */}
          <div className="px-6 py-4">
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-200 mx-6" />

          {/* Logout Button */}
          <div className="px-6 py-6 flex justify-center">
            <button
              onClick={handleLogout}
              className="bg-[#6C25FF] rounded-lg text-white text-base font-semibold px-8 py-2 shadow-md hover:bg-[#5A1EDB] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
