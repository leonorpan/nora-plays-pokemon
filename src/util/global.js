function searchMatchesValue(term, value) {
  return value.toLowerCase().startsWith(term);
}

export { searchMatchesValue };
