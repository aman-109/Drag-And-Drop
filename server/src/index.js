const express = require("express")
const cors = require("cors")
const connect = require("./config/databaseConfig")
const DraggableModel = require("./model/draggable.model")
let PORT = process.env.PORT || 8080
const app = express()
app.use(cors())
app.use(express.json())

app.get('/items', async (req, res) => {
    const items = await DraggableModel.find().sort({ list: 1, order: 1 });
    res.json(items);
});


app.post('/items', async (req, res) => {
    const { name, list, order } = req.body;
    const newItem = new DraggableModel({ name, list, order });
    await newItem.save();
    res.json(newItem);
});

app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { list, order } = req.body;
    const updatedItem = await DraggableModel.findByIdAndUpdate(id, { list, order }, { new: true });
    res.json(updatedItem);
});

app.listen(PORT, () =>  {
    connect()
    console.log(`http://localhost:8080`)
})