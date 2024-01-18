import { useFormik } from "formik";
import React from "react";
import SkillHandler from "./SkillHandler";
import PDFRenderer from "./PDFRenderer";
import Button from "../utils/Button";
import github from "../pictures/githubicon2.png";
import linkedin from "../pictures/linkedicon.png";
import LanguageHandler from "./LanguageHandler";
import { differentData, marciData } from "./ExampleData";
import LinkHandler from "./LinkHandler";
import EducationHandler from "./EducationHandler";
import WorkExperienceHandler from "./WorkExperienceHandler";

var defaultInitialValues = {
  name: "Default name",
  role: "",
  picture: null,
  email: "",
  phone: "",
  birthDate: "",
  nationality: "",
  address: "",
  skills: [],
  education: [],
  workExperience: [],
  languages: [],
  links: [],
  summary: "",
  summary2: "",
};

const ResumeEditor = () => {
  const [resumeState, setResumeState] = React.useState("editor"); // ["editor", "preview", "download"
  const formik = useFormik({
    initialValues: differentData,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setResumeState("preview");
    },
  });
  const inputClasses =
    "border-2 border-gray-500 rounded-md w-full p-2 text-gray-700";
  return (
    <div class="">
      <div class="flex justify-center w-full p-2 text-gray-700">
        <Button
          name="editor"
          onClick={() => {
            setResumeState("editor");
          }}
          selected={resumeState === "editor"}
        />
        <Button
          name="preview"
          onClick={() => {
            setResumeState("preview");
          }}
          selected={resumeState === "preview"}
        />
        {/* <Button
          name="download"
          onClick={() => {
            setResumeState("download");
          }}
          selected={resumeState === "download"}
        /> */}
      </div>
      <h1 class="text-3xl font-bold underline text-center">Resume Editor</h1>
      <div
        class={`${
          resumeState === "editor" ? "block" : "hidden"
        } w-full p-2 text-gray-700`}
      >
        <form onSubmit={formik.handleSubmit}>
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-1">
              <label for="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                class={inputClasses}
              />
            </div>
            <div class="col-span-1">
              <label for="role">Role</label>
              <input
                id="role"
                name="role"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.role}
                class={inputClasses}
              />
            </div>
            <div class="col-span-1">
              <label for="email">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                class={inputClasses}
              />
            </div>
            <div class="col-span-1">
              <label for="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
                class={inputClasses}
              />
            </div>
            <div class="col-span-1">
              <label for="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
                class={inputClasses}
              />
            </div>
            <div class="col-span-1">
              <label for="nationality">Nationality</label>
              <input
                id="nationality"
                name="nationality"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nationality}
                class={inputClasses}
              />
            </div>
            <div class="col-span-1">
              <label for="birthDate">Birth Date</label>
              <input
                id="birthDate"
                name="birthDate"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.birthDate}
                class={inputClasses}
              />
            </div>
            <div class="col-span-3" />
            <div class="col-span-2">
              <label for="summary">Summary</label>
              <textarea
                id="summary"
                name="summary"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.summary}
                class={inputClasses}
              />
            </div>
            <div class="col-span-2">
              <label for="summary2">Summary2</label>
              <textarea
                id="summary2"
                name="summary2"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.summary2}
                class={inputClasses}
              />
            </div>
            <div class="col-span-4">
              <SkillHandler formik={formik} />
            </div>
            <div class="col-span-4">
              <LanguageHandler formik={formik} />
            </div>
            <div class="col-span-4">
              <LinkHandler formik={formik} />
            </div>
            <div class="col-span-4">
              <EducationHandler formik={formik} />
            </div>
            <div class="col-span-4">
              <WorkExperienceHandler formik={formik} />
            </div>
            {/* <div class="col-span-4">
              <label for="picture">Picture</label>
              <input
                id="picture"
                name="picture"
                type="file"
                onChange={formik.handleChange}
                value={formik.values.picture}
                class={inputClasses}
              />
            </div> */}
            <div class="col-span-4 float-right hidden ">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div
        class={`${resumeState === "preview" ? "block" : "hidden"} 
        w-full p-2 text-gray-700`}
      >
        <PDFRenderer formik={formik} values={formik.values} />
      </div>
    </div>
  );
};

export default ResumeEditor;
