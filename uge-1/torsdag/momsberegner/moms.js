const momsSats = 0.25;

function beregnMoms(pris) {
  return pris * momsSats;
}

console.log(beregnMoms(100)); // Output: 25

function beregnPrisMedMoms(pris) {
  return pris + beregnMoms(pris);
}

console.log(beregnPrisMedMoms(100)); // Output: 125
