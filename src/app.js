// Minimal Express app containing an INTENTIONAL vulnerability so the CodeQL
// demo produces a real alert (js/code-injection), proving that the centrally
// maintained configuration was loaded and analysis actually ran.
//
// Do NOT copy this pattern into real code.
const express = require('express');

const app = express();

app.get('/calc', (req, res) => {
  const expr = req.query.expr;
  // VULNERABLE: untrusted request input flows into eval().
  // Detected by CodeQL query: "Code injection" (js/code-injection).
  const result = eval(expr); // eslint-disable-line no-eval
  res.send(`Result: ${String(result)}`);
});

app.listen(3000, () => console.log('demo app listening on :3000'));
