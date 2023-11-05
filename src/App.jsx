import Header from "./components/Header";
import ImgLayout from "./components/imgLayout/ImgLayout";
import { SelectionProvider } from "./context/SelectionContext";

function App() {
  return (
    <SelectionProvider>
      <div className="wrapper">
        <Header />
        <ImgLayout />
      </div>
    </SelectionProvider>
  );
}

export default App;
