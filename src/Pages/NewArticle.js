import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input, { TextArea } from "../common/Input";
import { useAuth } from "../Providers/SignupProvider";

const NewArticle = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  // set initail
  const initialValues = {
    title: "",
    author: "",
    content: "",
  };
  // set submit function
  const onSubmit = (formValues) => {
    if (!auth) navigate("/signup");
    else {
      const { title, content, author } = formValues;
      const newArticle = {
        title,
        author,
        body: content,
      };
      const postData = async () => {
        try {
          await axios.post("http://localhost:3001/Articles", newArticle);
          navigate("/");
        } catch (error) {}
      };
      postData();
    }
  };
  // set validate
  const validationSchema = yup.object({
    title: yup
      .string()
      .required("enter the title")
      .min(3, "title must be 3 charackter at least"),
    author: yup.string().required("enter author of aricle"),
    content: yup
      .string()
      .required("enter the content of article")
      .min(20, "content must be 20 charackter at least"),
  });
  // FORMIK
  const formik = useFormik({
    validateOnMount: true,
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  return (
    <section class="flex justify-center text-teal-800 ">
      <div
        class="mt-20 sm:mt-24 md:mt-32 flex 
    justify-center bg-teal-400 w-72 p-7 rounded-md 
     sm:w-96 items-center "
      >
        <form
          onSubmit={formik.handleSubmit}
          class="flex flex-col items-center w-full"
        >
          <p class="text-lg mb-3 sm:text-xl md:text-2xl lg:text-3xl lg:mb-5">
            Add New Article !
          </p>
          <Input formik={formik} name="title" />
          <Input formik={formik} name="author" />
          <TextArea formik={formik} name="content" />
          <button
            class={
              formik.isValid
                ? "bg-sky-600 text-white w-full rounded-sm sm:w-10/12 sm:text-lg sm:pt-1 sm:pb-1"
                : "bg-gray-400 text-gray-300 w-full sm:w-10/12 sm:text-lg sm:pt-1 sm:pb-1"
            }
            disabled={!formik.isValid}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewArticle;
