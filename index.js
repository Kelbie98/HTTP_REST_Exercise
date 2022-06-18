const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's live at http://localhost:${PORT}`)
)

let tasks = [
    {
        "Name": "Task 1",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    },
    {
        "Name": "Task 2",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    },
    {
        "Name": "Task 3",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    },
    {
        "Name": "Task 4",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    },
    {
        "Name": "Task 5",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    },
    {
        "Name": "Task 6",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    },
    {
        "Name": "Task 7",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    },
    {
        "Name": "Task 8",
        "Description" : "Complete all other tasks",
        "dueDate" : "18/06/2022"
    }
]


app.get('/tasks', (req, res) =>
{
    res.status(200).send({
        tasks
    })

});