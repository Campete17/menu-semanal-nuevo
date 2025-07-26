import { useState } from "react";

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function MenuSemana() {
  const [menu, setMenu] = useState(
    dias.map(() => ({ almuerzo: "", cena: "" }))
  );

  const handleChange = (index, campo, valor) => {
    const nuevoMenu = [...menu];
    nuevoMenu[index][campo] = valor;
    setMenu(nuevoMenu);
  };

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {dias.map((dia, index) => (
        <div key={dia} style={{ border: '1px solid #ccc', borderRadius: '0.5rem', padding: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>{dia}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <input
              type="text"
              placeholder="Almuerzo"
              value={menu[index].almuerzo}
              onChange={(e) => handleChange(index, "almuerzo", e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
            />
            <input
              type="text"
              placeholder="Cena"
              value={menu[index].cena}
              onChange={(e) => handleChange(index, "cena", e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #ccc' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
