import Head from "next/head";

const menuSemana = {
  lunes: "macarrones con tomate",
  martes: "ensalada mixta",
  miercoles: "pollo al horno",
  jueves: "lentejas",
  viernes: "pizza casera",
  sabado: "paella",
  domingo: "tortilla de patata"
};

const ingredientesPorPlato = {
  "macarrones con tomate": ["macarrones", "tomate frito", "aceite", "sal"],
  "ensalada mixta": ["lechuga", "tomate", "cebolla", "atún", "aceite", "vinagre", "sal"],
  "pollo al horno": ["pollo", "patatas", "ajo", "romero", "aceite", "sal"],
  "lentejas": ["lentejas", "zanahoria", "patata", "cebolla", "chorizo", "laurel"],
  "pizza casera": ["harina", "levadura", "agua", "tomate frito", "queso", "jamón"],
  "paella": ["arroz", "pollo", "conejo", "pimiento rojo", "judía verde", "azafrán"],
  "tortilla de patata": ["patatas", "huevos", "cebolla", "aceite", "sal"]
};

export default function ListaCompra() {
  const todosIngredientes = Object.values(menuSemana).flatMap(plato => ingredientesPorPlato[plato] || []);
  const ingredientesUnicos = [...new Set(todosIngredientes)];

  return (
    <>
      <Head>
        <title>🛒 Lista de la Compra</title>
      </Head>
      <main style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fff3e0, #ffe0b2)",
        padding: "2rem",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "600px", width: "100%" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", textAlign: "center" }}>🛒 Lista de la Compra</h1>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2rem" }}>
            {ingredientesUnicos.map((item, idx) => (
              <li key={idx}>✔️ {item}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
