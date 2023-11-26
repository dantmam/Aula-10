import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Menu from "./pages/menu/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <Menu />
    </div>
  );
}

export default App;
