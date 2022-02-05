import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { useSignup } from "../Providers/SignupProvider";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const signup = useSignup();
  return (
    <header>
      <nav
        class="bg-teal-300	h-16 md:h-20 lg:h-24 fixed top-0 w-full 
        text-2xl text-teal-800 sm:flex sm:justify-center 
        sm:text-3xl md:text-4xl lg:text-5xl"
      >
        <div class="flex  items-center justify-between h-full sm:w-11/12 ">
          <ul class="flex items-center justify-center ml-3">
            <li>
              <NavLink
                to="/"
                className={(n) => (n.isActive ? `` : "")}
              >
                <AiFillHome />
              </NavLink>
            </li>
          </ul>
          <ul class="flex items-center justify-center mr-2">
            <li class="ml-4 sm:ml-8 md:ml-10 lg:ml-16">
              {signup ? (
                <p>Welcome</p>
              ) : (
                <NavLink
                  to="/signup"
                  className={(n) => (n.isActive ? `` : "")}
                >
                  <BiLogIn />
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
