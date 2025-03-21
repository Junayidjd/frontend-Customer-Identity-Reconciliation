import React, { useState } from "react";
import IdentifyForm from "./components/IdentifyForm";
import IdentifyResult from "./components/IdentifyResult";
import HistorySection from "./components/HistorySection";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const handleResult = (data) => {
    setResult(data);
    setHistory((prevHistory) => [
      { data, timestamp: new Date().toLocaleString() },
      ...prevHistory,
    ]);
  };

  const handleClear = () => {
    setResult(null);
    setError(null);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Customer Identity Reconciliation
        </h1>
        <p className="mt-2 text-gray-600">
          Enter email or phone number to identify linked contacts
        </p>
      </header>

      <main className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <IdentifyForm
            onResult={handleResult}
            setLoading={setLoading}
            setError={setError}
            onClear={handleClear}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-40">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800">Error</h3>
              <p className="text-red-700">{error}</p>
            </div>
          ) : result ? (
            <IdentifyResult result={result} />
          ) : (
            <div className="flex items-center justify-center h-40">
              <p className="text-gray-500">
                Please submit the form to see results
              </p>
            </div>
          )}
        </div>

        {history.length > 0 && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                Search History
              </h2>
              <button
                onClick={clearHistory}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Clear History
              </button>
            </div>
            <HistorySection history={history} />
          </div>
        )}
      </main>

      <footer className="mt-8 text-center text-gray-600">
        <p>© 2025 Identity Reconciliation Service</p>
      </footer>
    </div>
  );
}

export default App;
