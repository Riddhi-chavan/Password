import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [hide, setHide] = useState(false);

  const hanldeonchange = (e) => {
    const { value } = e.target;
    setData(value);
  };
  const hideData = () => {
    setHide(true);
    let type = "password";
  };
  const showData = () => {
    setHide(false);
  };

  return (
    <div className="flex justify-center mt-32 ">
      <div className="w-[30rem]">
        <label className="block text-sm mb-2 dark:text-white ml-2 font-bold">
          Password
        </label>
        <div className="relative">
          <input
            id="hs-toggle-password"
            type={hide === true ? "password" : "text"}
            className="py-3 px-4 block w-full border-2 border-black-200 rounded-lg text-sm  "
            placeholder="Enter password"
            value={data || ""}
            onChange={hanldeonchange}
          />
          {hide === true ? (
            <button
              type="button"
              className="absolute top-0 end-0 p-3.5 rounded-e-md"
              onClick={showData}
            >
              <svg
                className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  className="hs-password-active:hidden"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>
                <line
                  className="hs-password-active:hidden"
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                ></line>
                <path
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="absolute top-0 end-0 p-3.5 rounded-e-md"
              onClick={hideData}
            >
              <svg
                className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  className="hs-password-active:hidden"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                  className="hs-password-active:hidden"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>

                <path
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
