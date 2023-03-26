import React, { useState } from "react";

const Generator = () => {
  const [amount, setAmount] = useState("");
  const [operator, setOperator] = useState("017");
  const [numbers, setNumbers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < amount; i++) {
      setNumbers((prev) => [
        ...prev,
        { num: operator + Math.floor(Math.random() * 100000000), used: false },
      ]);
    }
  };

  const handleDoubleClick = (value) => {
    setNumbers((prevNumbers) =>
      prevNumbers.map((number) =>
        number.num === value ? { ...number, used: true } : number
      )
    );
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <form className="flex flex-col mt-5" onSubmit={submitHandler}>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="border-2	border-gray-200 rounded-md mb-4 w-96 outline-none px-4 py-2"
            type="text"
            placeholder="100"
          />

          <select
            className="border-2	border-gray-200 rounded-md mb-4 w-96 outline-none px-4 py-2"
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="017">Grameenphone</option>
            <option value="019">Banglalink</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 py-2 text-lg text-white rounded-md"
          >
            Generate
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl">Number List</h1>

        <ol>
          {numbers
            .filter((number) => {
              return number.num.length === 11;
            })
            .map((item, i) => (
              <div key={i}>
                <li
                  className={`${item.used && "text-green-500"}`}
                  onDoubleClick={() => handleDoubleClick(item.num)}
                >
                  {item.num}
                </li>
              </div>
            ))}
        </ol>
      </div>
    </>
  );
};

export default Generator;
