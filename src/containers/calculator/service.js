async function calc(a, b, operation) {
  return await fetch('/api/calculator/operation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      a,
      operation,
      b,
    }),
  })
    .then((response) => response.json())
    .then(({ result }) => result);
}

export { calc };
