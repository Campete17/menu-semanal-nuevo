import Head from "next/head";
import MenuSemana from "../components/MenuSemana";

export default function Home() {
  return (
    <>
      <Head>
        <title>🍽️ Menú Semanal</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '700px', margin: 'auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>🗓️ Planificador de Menú Semanal</h1>
        <MenuSemana />
      </main>
    </>
  );
}
