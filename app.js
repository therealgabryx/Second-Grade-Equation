function exec() {
  const a = parseFloat(prompt('Inserisci a..', 0));
  const b = parseFloat(prompt('Inserisci b..', 0));
  const c = parseFloat(prompt('Inserisci c..', 0));

  if (a == 0) {
    document.getElementById('solution').innerHTML =
      "L'equazione e' di primo grado!";
  } else {
    const delta = (b * b) - 4 * a * c;
    
    if (delta < 0) {
      document.getElementById('solution').innerHTML = 'Equazione impossibile';
    } else if (delta == 0) {
      document.getElementById('solution').innerHTML = `Risultato: ${-b /
        (2 * a).toFixed(2)}`;
    } else {
      document.getElementById('solution').innerHTML = `Soluzioni: ${((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2)}, ${((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)}`;
    }
  }
}