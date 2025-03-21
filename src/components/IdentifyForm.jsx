// import React, { useState } from 'react';
// import axios from 'axios';

// const IdentifyForm = ({ onResult, setLoading, setError, onClear }) => {
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [formError, setFormError] = useState('');

//   const validateForm = () => {
//     if (!email && !phoneNumber) {
//       setFormError('Please enter at least one of Email or Phone Number');
//       return false;
//     }
//     setFormError('');
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const requestBody = {};
//     if (email) requestBody.email = email;
//     if (phoneNumber) requestBody.phoneNumber = phoneNumber;

//     try {
//       setLoading(true);
//       setError(null);
//       const response = await axios.post('/identify', requestBody);
//       onResult(response.data);
//     } catch (err) {
//       const errorMessage = err.response?.data?.message || 'An error occurred while processing your request';
//       setError(errorMessage);
//       onResult(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearForm = () => {
//     setEmail('');
//     setPhoneNumber('');
//     setFormError('');
//     onClear();
//   };

//   return (
//     <div className="space-y-6">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="space-y-2">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Enter phone number"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {formError && <p className="text-sm text-red-600">{formError}</p>}

//         <div className="flex gap-4">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             Identify
//           </button>
//           <button
//             type="button"
//             onClick={clearForm}
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
//           >
//             Clear
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default IdentifyForm;

import React, { useState } from "react";
import axios from "axios";

const IdentifyForm = ({ onResult, setLoading, setError, onClear }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    if (!email && !phoneNumber) {
      setFormError("Please enter at least one of Email or Phone Number");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const requestBody = {};
    if (email) requestBody.email = email;
    if (phoneNumber) requestBody.phoneNumber = phoneNumber;

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/identify`, // Use environment variable
        requestBody
      );
      onResult(response.data);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "An error occurred while processing your request";
      setError(errorMessage);
      onResult(null);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setEmail("");
    setPhoneNumber("");
    setFormError("");
    onClear();
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {formError && <p className="text-sm text-red-600">{formError}</p>}

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Identify
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdentifyForm;
