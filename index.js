const express = require('express'); // imports en node js sin ninguna configuracion
const app = express();
const port = 3001; // regularmente se usa el puerto 3000

// config para recibir info
app.use(express.json()) // nos permite que nuestra peticion post reciba informacion desde el body

// let
// var son modificables 
// const no es modificable
let platillos = [ // corchetes = arreglos
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

// read / get
app.get('/platillo/:id', (req, res) => {
    res
        .status(200) // 200 OK
        .json({
            mensaje: 'Todos los platillos obtenidos correctamente',
            platillo: platillos.find(platillo => platillo.id == req.params.id)
        })
        .send()
})

// create / post
app.post('/platillo', (req, res) => {
    const { id, nombre, descripcion, precio } = req.body; // destructoring  = extraer toda la info de un json/objectjs

    platillos.push({
        id: id,
        nombre: nombre, 
        descripcion: descripcion,
        precio: precio
    })

    res
        .status(201) // 201 significa created
        .json({
            mensaje: 'Agregado correctamente',
            platillos: platillos
        })
        .send()

})

// Update/ metodo put
app.put('/platillo/:id', (req, res) => {
    const { id } = req.params; // Destructoring
    const { nombre, descripcion, precio } = req.body;

    // Regrasara todos los elementos que no tengan el id recibido por params/ practicamente eliminamo
    const auxPlatillos = platillos.filter(platillo => platillo.id !== Number(id)); 

    auxPlatillos.push({
        id: Number(id),
        nombre: nombre,
        descripcion: descripcion,
        precio: precio
    })

    platillos = auxPlatillos;

    res
        .status(200)
        .json({
            mensaje: 'Actualizado correctamente',
            platillos: platillos
        })
        .send()

})

// DELETE / delete
app.delete('/platillo/:id', (req, res) => {
    const { id } = req.params; // Destructoring

    // Regrasara todos los elementos que no tengan el id recibido por params/ practicamente eliminamo
    platillos = platillos.filter(platillo => platillo.id !== Number(id)); 

    res
        .status(200)
        .json({
            mensaje: 'Eliminado correctamente',
            platillos: platillos
        })
        .send()
})

// servidor
app.listen(port, () => { // levanta el servidor
    console.log('Servidor funcionando en el puerto: ' + port)
});

