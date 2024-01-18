import React from "react";

const WorkExperienceHandler = (props) => {
  const { formik } = props;
  return <div>
    <div class="border-2 border-gray-500 rounded-md w-full p-2 text-gray-700">
      work experience: {formik.values.workExperience.length}
      <button
        class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        type="button"
        onClick={() => {
          formik.setFieldValue("workExperience", [
            ...formik.values.workExperience,
            {
              name: "new work experience",
              description: "I worked",
              start: "2000",
              end: "2004",
            },
          ]);
        }}
      >
        Add Work Experience
      </button>
      <div class="grid grid-cols-1">
        {formik.values.workExperience.map((workExperience, index) => {
          return (
            <div key={index} class="flex">
              <input
                id={`workExperience[${index}].name`}
                name={`workExperience[${index}].name`}
                class="border-0 border-gray-500 rounded-md w-full p-2 text-gray-700"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.workExperience[index].name}
              />
              <input
                id={`workExperience[${index}].description`}
                name={`workExperience[${index}].description`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.workExperience[index].description}
              />
              <input
                id={`workExperience[${index}].start`}
                name={`workExperience[${index}].start`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.workExperience[index].start}
              />
              <input
                id={`workExperience[${index}].end`}
                name={`workExperience[${index}].end`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.workExperience[index].end}
              />
              <div>
                <button
                  class="px-2"
                  type="button"
                  onClick={() => {
                    formik.setFieldValue(
                      "workExperience",
                      formik.values.workExperience.filter((s, i) => i !== index)
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
  </div>;
};

export default WorkExperienceHandler;
