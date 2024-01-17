import React from "react";

const LanguageHandler = (props) => {
  const { formik } = props;
  return (
    <div class="border-2 border-gray-500 rounded-md w-full p-2 text-gray-700">
      Languges: {formik.values.languages.length}
      <button
        class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        type="button"
        onClick={() => {
          formik.setFieldValue("languages", [
            ...formik.values.languages,
            {
              name: "new lang",
              level: "b2",
            },
          ]);
        }}
      >
        Add Language
      </button>
      <div class="grid grid-cols-4">
        {formik.values.languages.map((language, index) => {
          return (
            <div key={index} class="flex">
              <input
                id={`languages[${index}].name`}
                name={`languages[${index}].name`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.languages[index].name}
              />
              <input
                id={`languages[${index}].level`}
                name={`languages[${index}].level`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.languages[index].level}
              />
              <div>
                <button
                  class="px-2"
                  type="button"
                  onClick={() => {
                    formik.setFieldValue(
                      "languages",
                      formik.values.languages.filter((s, i) => i !== index)
                    );
                  }}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageHandler;
