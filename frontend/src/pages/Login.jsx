import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostApi } from "../services";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleLogin = async (event) => {
    event.preventDefault();
    const endpoint = "token/login";
    const datapost = await PostApi(formData, endpoint);
    console.log(datapost.access);
    if (datapost.access) {
      navigate("/dashboard");
      localStorage.setItem("access", datapost.access);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 h-96 flex justify-center items-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 h-auto"
          onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-4 text-center">
            ConvertIQ Login
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
