const express = require('express');
const app = express();
const pessoasRouter = require('./routes/pessoasRouter');
const profissaoRouter = require('./routes/profissaoRouter');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/pessoas', pessoasRouter);
app.use('/profissoes', profissaoRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
