import React, { useState } from "react";

const BackwardCounterApp = () => {
  const [count, setCount] = useState();
  const [timing, setTiming] = useState();
  const handleClick = () => {
    if (count > 0) {    
     const id=  setInterval(() => {
       setCount((previousState) => {
          if (previousState <= 0) {
            return (previousState = 0)
            clearInterval(id)
          }
          return previousState - 1;
        });
        setTiming(id);
      }, 1000);
    } else {
      alert("Time Should be in Postive");
    }
  };
  const handlePause = () => {
    clearInterval(timing);
  };
  const handleReset = () => {
    setCount((previousState) => (previousState = 0))
    clearInterval(timing)
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-red-100">
      <div className="bg-red-200 rounded-2xl shadow-xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold text-black mb-8">
          Backward Counter
        </h1>

        <input
          type="number"
          placeholder="Enter Seconds"
          onChange={(e) => setCount(e.target.value)}
          value={count}
          className="w-full border border-red-400 rounded-lg px-5 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-center gap-3 mb-6">
          <button
            type="button"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition"
            onClick={handleClick}
          >
            Start
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
            onClick={handlePause}
          >
            Pause
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <h1 className="text-5xl font-bold text-black tracking-widest">
          {count}
        </h1>
        <p className="text-sm text-black mt-4">Seconds Remaining</p>
      </div>
    </div>
  );
};

export default BackwardCounterApp;