const express = require('express'); // imports en node js sin ninguna configuracion
const app = express();
const port = 3000;

// req = request ( lo que recibimos de lado front )
// res = response ( lo que mandamos )
app.get('/', (req, res) => {
    res.send('Hola Mundo!!!!!!!!!!!!')
})

// servidor
app.listen(port, () => {
    console.log('Servidor funcionando en el puerto: ' + port)
});

