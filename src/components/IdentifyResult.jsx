import React from "react";

const IdentifyResult = ({ result }) => {
  if (!result) return null;

  const {
    primaryContactId = "N/A",
    emails = [],
    phoneNumbers = [],
    secondaryContactIds = [],
  } = result;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Identity Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">
            Primary Contact
          </h3>
          <p className="mt-2 text-gray-600 break-words">{primaryContactId}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">
            Email Addresses
          </h3>
          {emails.length > 0 ? (
            <ul className="mt-2 space-y-1">
              {emails.map((email, index) => (
                <li
                  key={`email-${index}`}
                  className="text-gray-600 break-words"
                >
                  {email}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-500">No email addresses found</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Phone Numbers</h3>
          {phoneNumbers.length > 0 ? (
            <ul className="mt-2 space-y-1">
              {phoneNumbers.map((phone, index) => (
                <li
                  key={`phone-${index}`}
                  className="text-gray-600 break-words"
                >
                  {phone}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-500">No phone numbers found</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">
            Secondary Contacts
          </h3>
          {secondaryContactIds.length > 0 ? (
            <ul className="mt-2 space-y-1">
              {secondaryContactIds.map((id, index) => (
                <li
                  key={`secondary-${index}`}
                  className="text-gray-600 break-words"
                >
                  {id}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-gray-500">No secondary contacts found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdentifyResult;
