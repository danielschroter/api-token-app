export function cosineSimilarity(a: number[], b: number[]) {
  // Dot product
  const dotProduct = a.reduce((acc, cur, i) => acc + cur * b[i], 0);
  // Magnitude of a
  const magnitudeA = Math.sqrt(a.reduce((acc, cur) => acc + cur * cur, 0));
  // Magnitude of b
  const magnitudeB = Math.sqrt(b.reduce((acc, cur) => acc + cur * cur, 0));
  // Cosine similarity
  return dotProduct / (magnitudeA * magnitudeB);
}
