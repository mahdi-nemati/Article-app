import ArticleApp from "./Components/ArticleApp";
import SignupProvider from "./Providers/SignupProvider";
function App() {
  return (
    <main>
      <SignupProvider>
        <ArticleApp />
      </SignupProvider>
    </main>
  );
}

export default App;
