import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import { PostApi } from "../services";

function AddLead() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleAddLead = async (event) => {
    event.preventDefault();
    const date = new Date()
    console.log(formData);
    const endpoint = "leads/create/";
    const datapost = await PostApi(formData, endpoint);
    console.log(datapost.created_at);
    if (datapost.created_at) {
      navigate("/dashboard");
    }
  };
  return (
    <DashboardLayout>
      <form onSubmit={handleAddLead}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add Lead
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Add Potential customers.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="e.g John"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="middle_name"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Middle Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="middle_name"
                    id="middle_name"
                    placeholder="e.g Waititu"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.middle_name}
                    onChange={(e) =>
                      setFormData({ ...formData, middle_name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="e.g Doe"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="e.g. 0712345678"
                    id="phone_number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.phone_number}
                    onChange={(e) =>
                      setFormData({ ...formData, phone_number: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="e.g. Nairobi"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }>
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="">Prefer Not To Say</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900">
            Go Back
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add Lead
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}

export default AddLead;
