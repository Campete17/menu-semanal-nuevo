import { useState } from "react";

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const recetasEjemplo = ["Espaguetis a la boloñesa", "Pollo al horno", "Tortilla de patatas", "Ensalada", "Lentejas", "Pizza", "Arroz con verduras"];

export default function MenuSemana() {
  const [menu, setMenu] = useState(dias.map(() => ({ almuerzo: "", cena: "" })));

  const handleChange = (i, campo, val) => {
    const newMenu = [...menu];
    newMenu[i][campo] = val;
    setMenu(newMenu);
  };

  const sugerirReceta = i => {
    const receta = recetasEjemplo[Math.floor(Math.random()*recetasEjemplo.length)];
    const newMenu = [...menu];
    if (!newMenu[i].almuerzo) newMenu[i].almuerzo = receta;
    else newMenu[i].cena = receta;
    setMenu(newMenu);
  };

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {dias.map((dia,i) => (
        <div key={i} style={{border:'1px solid #ccc',padding:'1rem',borderRadius:'4px'}}>
          <h3>{dia}</h3>
          <input type="text" placeholder="Almuerzo" value={menu[i].almuerzo} onChange={e=>handleChange(i,'almuerzo',e.target.value)} style={{width:'100%',padding:'0.5rem'}} />
          <input type="text" placeholder="Cena" value={menu[i].cena} onChange={e=>handleChange(i,'cena',e.target.value)} style={{width:'100%',padding:'0.5rem',marginTop:'0.5rem'}} />
          <button onClick={()=>sugerirReceta(i)} style={{marginTop:'0.5rem',padding:'0.5rem',background:'#0070f3',color:'white'}}>🧠 Sugerir receta</button>
        </div>
      ))}
    </div>
  );
}
