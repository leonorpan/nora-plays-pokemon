function getEvolutionsStage(p) {
  return p.prev_evolution ? p.prev_evolution.length + 1 : 1;
}

function parseHeight(str) {
  return parseFloat(str.slice(0, 3).trim());
}

export { getEvolutionsStage, parseHeight };
