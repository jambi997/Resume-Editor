import React from "react";

const exampleSkill = {
  name: "new skill",
  description: "I can write JS",
};

const SkillHandler = (props) => {
  const { formik } = props;
  return (
    <div class="border-2 border-gray-500 rounded-md w-full p-2 text-gray-700">
      skills: {formik.values.skills.length}
      <button
        class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        type="button"
        onClick={() => {
          formik.setFieldValue("skills", [
            ...formik.values.skills,
            exampleSkill,
          ]);
        }}
      >
        Add Skill
      </button>
      <div class="grid grid-cols-6">
        {formik.values.skills.map((skill, index) => {
          return (
            <div key={index} class="flex">
              <input
                id={`skills[${index}].name`}
                name={`skills[${index}].name`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.skills[index].name}
              />
              <div>
                <button
                  class="px-2"
                  type="button"
                  onClick={() => {
                    formik.setFieldValue(
                      "skills",
                      formik.values.skills.filter((s, i) => i !== index)
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
  );
};

export default SkillHandler;
