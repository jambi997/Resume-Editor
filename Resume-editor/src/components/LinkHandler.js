import React from "react";

const LinkHandler = (props) => {
  const { formik } = props;
  return <div>
    <div class="border-2 border-gray-500 rounded-md w-full p-2 text-gray-700">
      links: {formik.values.links.length}
      <button
        class="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        type="button"
        onClick={() => {
          formik.setFieldValue("links", [
            ...formik.values.links,
            {
              name: "new link",
              url: "https://www.example.com",
            },
          ]);
        }}
      >
        Add Link
      </button>
      <div class="grid grid-cols-3">
        {formik.values.links.map((link, index) => {
          return (
            <div key={index} class="flex">
              <input
                id={`links[${index}].name`}
                name={`links[${index}].name`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.links[index].name}
              />
              <input
                id={`links[${index}].url`}
                name={`links[${index}].url`}
                type="text"
                onChange={formik.handleChange}
                value={formik.values.links[index].url}
              />
              <div>
                <button
                  class="px-2"
                  type="button"
                  onClick={() => {
                    formik.setFieldValue(
                      "links",
                      formik.values.links.filter((s, i) => i !== index)
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

export default LinkHandler;
