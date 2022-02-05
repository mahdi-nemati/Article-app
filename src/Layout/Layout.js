import Navigation from "../Components/Navigation";

const Layout = ({ children }) => {
  return (
    <section>
      <Navigation />
      {children}
    </section>
  );
};

export default Layout;
