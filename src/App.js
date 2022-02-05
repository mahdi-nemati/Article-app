import ArticleApp from "./Components/ArticleApp";
import SignupProvider from "./Providers/SignupProvider";
import Layout from "./Layout/Layout";
function App() {
  return (
    <Layout>
      <SignupProvider>
        <ArticleApp />
      </SignupProvider>
    </Layout>
  );
}

export default App;
