import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="max-w-screen h-screen font-Inter">
      <Header />
      {cards}

      <Footer />
    </div>
  );
}

export default App;
