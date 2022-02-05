import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input, { TextArea } from "../common/Input";
import { useSignup } from "../Providers/SignupProvider";
const NewArticle = () => {
  const navigate = useNavigate();
  const signup = useSignup();
  // set initail
  const initialValues = {
    title: "",
    author: "",
    content: "",
  };
  // set submit function
  const onSubmit = (formValues) => {
    if (!signup) navigate("/signup");
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* title */}
        <Input formik={formik} name="title" />
        {/* author */}
        <Input formik={formik} name="author" />
        {/* content */}
        <TextArea formik={formik} name="content" />
        <button
          className={formik.isValid ? "button" : ""}
          disabled={!formik.isValid}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewArticle;
