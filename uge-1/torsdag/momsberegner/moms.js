const momsSats = 0.25; //25% eller 25/100

function beregnMoms(pris, momsSats = 0.25) {
  return pris * momsSats;
}

console.log(beregnMoms(100)); // Output: 25

function beregnPrisMedMoms(pris, momsSats = 0.25) {
  return pris + beregnMoms(pris, momsSats);
}

console.log(beregnPrisMedMoms(100)); // Output: 125
