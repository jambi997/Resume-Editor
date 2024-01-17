import React from "react";

const Button = (props) => {
  const { name, onClick, selected } = props;
  return (
    <button
      // class="px-2"
      class={`${
        selected
          ? "bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
          : "bg-gray-500"
      } ml-5 hover:bg-blue-400 text-white font-bold py-1 px-3 rounded`}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
