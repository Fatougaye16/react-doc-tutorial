import "./App.css";
const products = [
  { title: "cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
function App() {
  const items = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return <ul>{items} </ul>;
}

export default App;
