import Head from "next/head";
import Link from "next/link";
import MenuSemana from "../components/MenuSemana";

export default function Home() {
  return (
    <>
      <Head>
        <title>🍽️ Menú Semanal</title>
      </Head>
      <main style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffd180, #fff9c4)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif"
      }}>
        <div style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          maxWidth: "800px",
          width: "100%",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#333" }}>
            🗓️ Planificador de Menú Semanal
          </h1>

          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
            Organiza tus comidas y optimiza tu compra semanal
          </p>

          <MenuSemana />
        </div>
      </main>
    </>
  );
}
