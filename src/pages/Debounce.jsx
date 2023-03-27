import React, { useState, useEffect } from "react";

function Debounce() {
  const [value, setValue] = useState("");

  useEffect(() => {
    // Set a timer to wait for 500ms before making API request
    const timer = setTimeout(() => {
      console.log(`Making API request with value: ${value}`);
    }, 500);

    // Cleanup function to clear the timer if value changes before the timeout
    return () => clearTimeout(timer);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        className="bg-red-200"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Debounce;
