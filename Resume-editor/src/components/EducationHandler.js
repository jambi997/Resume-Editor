import React from "react";

const EducationHandler = (props) => {
  const { formik } = props;
  return (
    <div>
      <div class="border-2 border-gray-500 rounded-md w-full p-2 text-gray-700">
        education: {formik.values.education.length}
        <button
          class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
          type="button"
          onClick={() => {
            formik.setFieldValue("education", [
              ...formik.values.education,
              {
                name: "new education",
                description: "I went to school",
                start: "2000",
                end: "2004",
              },
            ]);
          }}
        >
          Add Education
        </button>
        <div class="grid grid-cols-1">
          {formik.values.education.map((education, index) => {
            return (
              <div key={index} class="flex">
                <input
                  id={`education[${index}].name`}
                  name={`education[${index}].name`}
                  class="border-0 border-gray-500 rounded-md w-full p-2 text-gray-700"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.education[index].name}
                />
                <input
                  id={`education[${index}].description`}
                  name={`education[${index}].description`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.education[index].description}
                />
                <input
                  id={`education[${index}].start`}
                  name={`education[${index}].start`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.education[index].start}
                />
                <input
                  id={`education[${index}].end`}
                  name={`education[${index}].end`}
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.education[index].end}
                />
                <div>
                  <button
                    class="px-2"
                    type="button"
                    onClick={() => {
                      formik.setFieldValue(
                        "education",
                        formik.values.education.filter((s, i) => i !== index)
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
        <div></div>
      </div>
    </div>
  );
};

export default EducationHandler;
