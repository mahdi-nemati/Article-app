import Input from "../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignupAction } from "../Providers/SignupProvider";
const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useSignupAction();
  // set initail
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
  };
  // set submit function
  const onSubmit = () => {
    dispatch(true)
    navigate("/");
  };
  // set validate
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("enter your name")
      .min(6, "name must be 6 charackter at least"),
    email: yup.string().email("email is invalid").required("enter your email"),
    password: yup
      .string()
      .required("enter your password")
      .min(8, "password must be 8 charackter at least"),
    phone: yup
      .string()
      .required("enter your phone")
      .matches(/^[0-9]{11}$/, "phone number is invalid"),
    passwordConfirm: yup
      .string()
      .required("confrim your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  // formik
  const formik = useFormik({
    validateOnMount: true,
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });
  return (
    <main class="flex justify-center  h-auto">
      <section class="flex justify-center text-teal-800 ">
        <div
          class="mt-20 sm:mt-24 md:mt-32 flex 
          justify-center bg-teal-400 w-72 p-7 rounded-md 
           sm:w-96 "
        >
          <form
            onSubmit={formik.handleSubmit}
            class="flex flex-col items-center w-full"
          >
            <p class="text-lg mb-3 sm:text-xl md:text-2xl lg:text-3xl lg:mb-5">
              Sign Up for free !
            </p>
            {/* name */}
            <Input formik={formik} name="name" place="Name" />
            {/* email */}
            <Input formik={formik} name="email" place="Email" />
            {/* phone */}
            <Input
              formik={formik}
              name="phone"
              type="tel"
              place="Phone Number"
            />
            {/* password */}
            <Input
              formik={formik}
              name="password"
              type="password"
              place="Password"
            />
            {/* passwordConfirm */}
            <Input
              formik={formik}
              name="passwordConfirm"
              type="password"
              place="Password Confirm"
            />
            {/* submit button */}
            <button
              className={formik.isValid ? "btn" : ""}
              disabled={!formik.isValid}
              type="submit"
            >
              Signup
            </button>
            <Link to="/login">
              <p class="mt-3 text-sm sm:text-base lg:text-lg">
                Already Login ? Click here !
              </p>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignupForm;
