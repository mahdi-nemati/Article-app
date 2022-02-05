const Input = ({ name, type = "text", formik }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={name}
        {...formik.getFieldProps(name)}
        class="border border-teal-300  
          text-base sm:text-lg md:text-xl caret-teal-300 rounded-md pl-1 outline-none 
          focus:border-2 focus:border-teal-300 "
      />
      <div
        class=" mt-2 mb-2 text-sm text-rose-800
       flex justify-start sm:text-base lg:text-lg"
      >
        {formik.errors[name] && formik.touched[name] && (
          <span>{formik.errors[name]}</span>
        )}
      </div>
    </div>
  );
};

export default Input;

export const TextArea = ({ name, type = "text", formik }) => {
  return (
    <div>
      <textarea
        type={type}
        name={name}
        placeholder={name}
        {...formik.getFieldProps(name)}
        class="border border-teal-300  w-9/12
          text-base sm:text-lg md:text-xl caret-teal-300 rounded-md pl-1 outline-none 
          focus:border-2 focus:border-teal-300  transition-all "
      />
      <div
        class=" mt-2 mb-2 text-sm text-rose-800
       flex justify-start sm:text-base lg:text-lg"
      >
        {formik.errors[name] && formik.touched[name] && (
          <span>{formik.errors[name]}</span>
        )}
      </div>
    </div>
  );
};
