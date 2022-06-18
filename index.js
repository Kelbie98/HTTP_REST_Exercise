const app = require('express')();
const PORT = 8080;

const { isNumberObject } = require('util/types');


app.listen(
    PORT,
    () => console.log(`it's live at http://localhost:${PORT}`)
)

let tasks = [
    {
        "Name": "Task1",
        "Description" : "Similar",
        "Due Date" : new Date(2022, 5, 20)
    },
    {
        "Name": "Task1",
        "Description" : "different",
        "Due Date" : new Date(2022, 5, 20)
    },
    {
        "Name": "Task3",
        "Description" : "Similar",
        "Due Date" : new Date(2022, 5, 21)
    },
    {
        "Name": "Task4",
        "Description" : "Foo",
        "Due Date" : new Date(2022, 5, 22)
    },
    {
        "Name": "Task5",
        "Description" : "Bar",
        "Due Date" : new Date(2022, 5, 23)
    },
    {
        "Name": "Task6",
        "Description" : "do a thing",
        "Due Date" : new Date(2022, 5, 24)
    },
    {
        "Name": "Task7",
        "Description" : "different",
        "Due Date" : new Date(2022, 5, 25)
    },
    {
        "Name": "Task8",
        "Description" : "Complete all other tasks",
        "Due Date" : new Date(2022, 5, 26)
    }
]

//get all tasks
app.get('/tasks', (req, res) =>
{
    res.status(200).send({
        tasks
    })

});

//get specific task
app.get('/tasks/:id', (req, res) => {

    let id = parseInt(req.params.id);
    let size = tasks.length;
    
    if (!Number.isInteger(id))
    {
        res.status(400).send({
            message: `Please enter a valid number in the range of 0 to ${size-1}`
        })
    }
    else if( id < 0 || !tasks.at(id) )
    {
        res.status(400).send({
            message: `No task of id ${id} found, try a value from 0 to ${size-1}` 
        })
    }
    else
    {
        let Task = tasks.at(id);
        res.status(200).send({
            id,
            Task
        })
    }
    
});

//get task from search on name or description
app.get('/search', (req, res) => 
{
    //get name and description sent in querystring
    let name = req.query.name;
    let desc = req.query.description;
    searchedTasks = tasks.filter(car => car.Name === name || car.Description === desc)
    
    if (searchedTasks.length == 0)
    {
        res.status(400).send(
            {
                message: 'No tasks found with that name or description, ensure you are searching with "name=" or/and "description="'
            })
    }
    else
    {
    res.status(200).send(
    {
        name,
        desc,
        searchedTasks

    })
    }
});
