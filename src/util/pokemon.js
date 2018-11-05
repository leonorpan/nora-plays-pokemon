function getEvolutionStage(p) {
  return p.prev_evolution ? p.prev_evolution.length + 1 : 1;
}

function isOfType(p, type) {
  if (!p.type || !p.type.length) return false;
  return p.type.filter(t => t.toLowerCase().startsWith(type)).length > 0;
}

function parseHeight(str) {
  return parseFloat(str.slice(0, 4).trim());
}

function getEvolutions(prev, next) {
  const prevEvolutions = prev ? prev.map(ne => ne.num) : [];
  const nextEvolutions = next ? next.map(ne => ne.num) : [];
  return prevEvolutions.concat(nextEvolutions);
}

export { getEvolutionStage, getEvolutions, parseHeight, isOfType };
