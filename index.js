const express = require('express'); // imports en node js sin ninguna configuracion
const app = express();
const port = process.env.PORT || 3000;

// config para recibir info
app.use(express.json())

const platillos = [ // corchetes = arreglos
    { // llaves = json / objetojs
        // key = variable : value = valor
        id: 1,
        nombre: "Enchiladas Suizas",
        descripcion: 'Deliciosas Enchiladas Suizas hechas en casa',
        precio: 125.50
    },
    {
        id: 2,
        nombre: "Chilaquiles",
        descripcion: 'Deliciosos chilaquiles al gusto',
        precio: 80
    }
]

// req = request ( lo que recibimos de lado front )
// res = response ( lo que mandamos )
app.get('/platillo/all', (req, res) => {
    res
        .status(200)
        .json({
            mensaje: 'Todos los platillos obtenidos correctamente',
            platillos: platillos
        })
        .send()
})

app.get('/platillo/:id', (req, res) => {
    console.log(typeof req.params.id)
    res
        .status(200)
        .json({
            mensaje: 'Todos los platillos obtenidos correctamente',
            platillo: platillos.find(platillo => platillo.id == req.params.id)
        })
        .send()
})

app.post('/platillo', (req, res) => {
    const { id, nombre, descripcion, precio } = req.body; // destructoring  = extraer toda la info de un json/objectjs

    platillos.push({
        id: id,
        nombre: nombre, 
        descripcion: descripcion,
        precio: precio
    })

    res
        .status(201)
        .json({
            mensaje: 'Agregado correctament',
            platillos: platillos
        })
        .send()

})

// servidor
app.listen(port, () => {
    console.log('Servidor funcionando en el puerto: ' + port)
});

