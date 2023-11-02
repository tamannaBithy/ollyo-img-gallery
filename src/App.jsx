import Header from "./components/Header";
// import Test from "./components/Test";
import ImgLayout from "./components/imgLayout/ImgLayout";
import { SelectionProvider } from "./context/SelectionContext";

function App() {
  return (
    <SelectionProvider>
      <div className="wrapper space-y-8">
        <Header />
        <ImgLayout />
        {/* <Test /> */}
      </div>
    </SelectionProvider>
  );
}

export default App;
