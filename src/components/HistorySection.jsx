import React from "react";

const HistorySection = ({ history }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="max-h-96 overflow-y-auto p-4">
      {history.map((item, index) => (
        <div
          key={`history-${index}`}
          className="mb-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="text-sm text-gray-500 mb-2">{item.timestamp}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <span className="font-medium text-gray-700">Primary ID:</span>
              <span className="ml-2 text-gray-600 break-words">
                {item.data?.primaryContactId || "N/A"}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Emails:</span>
              <span className="ml-2 text-gray-600 break-words">
                {item.data?.emails?.length
                  ? item.data.emails.join(", ")
                  : "None"}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Phone Numbers:</span>
              <span className="ml-2 text-gray-600 break-words">
                {item.data?.phoneNumbers?.length
                  ? item.data.phoneNumbers.join(", ")
                  : "None"}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Secondary IDs:</span>
              <span className="ml-2 text-gray-600 break-words">
                {item.data?.secondaryContactIds?.length
                  ? item.data.secondaryContactIds.join(", ")
                  : "None"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistorySection;
