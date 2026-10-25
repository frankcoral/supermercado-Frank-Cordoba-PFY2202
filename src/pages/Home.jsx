import "./Home.css";

const productos = [
  {
    id: 1,
    nombre: "Arroz 1 kg",
    categoria: "Abarrotes",
    precio: 1590,
    stock: 25,
  },
  {
    id: 2,
    nombre: "Leche 1 litro",
    categoria: "Lácteos",
    precio: 1290,
    stock: 18,
  },
  {
    id: 3,
    nombre: "Aceite 900 ml",
    categoria: "Abarrotes",
    precio: 2490,
    stock: 5,
  },
  {
    id: 4,
    nombre: "Pan de molde",
    categoria: "Panadería",
    precio: 1990,
    stock: 0,
  },
];

function Home() {
  return (
    <main className="home">
      <h1>Supermercado</h1>
      <h2>Sistema de Gestión de Inventario</h2>

      <p>
        Bienvenido al sistema de gestión de inventario. Aquí podrás consultar
        nuestros productos disponibles.
      </p>

      <h3>Inventario de productos</h3>

      <div className="tabla-scroll">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>${producto.precio.toLocaleString("es-CL")}</td>
              <td>{producto.stock}</td>
              <td>
                {producto.stock === 0
                  ? "Sin stock"
                  : producto.stock <= 5
                    ? "Stock bajo"
                    : "Disponible"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </main>    
  );
}

export default Home;
