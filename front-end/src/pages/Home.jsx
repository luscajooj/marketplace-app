import CreateProductScreen from "../components/CreateProductScreen";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      {/* Apenas a Navbar está estilizada e sem funcionalidade */}
      <NavBar />

      <CreateProductScreen />
    </>
  );
};

export default Home;
