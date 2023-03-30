const formButton = document.querySelector('.submit-button');
const formInput = document.querySelector('.form-control')
const loadingTaskDOM = document.getElementById("loading-task-div");
import printFred from './delete.js'


           
    async function getData() {
        try {
            const response = await axios.get('/api/v1/tasks');
            // const text = JSON.stringify(data)
            // console.log(response.data)
            const tasks = response.data

            if(tasks.task.length < 1){
                loadingTaskDOM.style.visibility = 'visible'
                loadingTaskDOM.style.color = 'red'
                loadingTaskDOM.innerHTML = "There is no Data to Display from Database."
                return
            }

            buildTable(tasks)



            function buildTable(tasks){
                var table = document.getElementById('myTable')

                for (var i = 0; i < tasks.task.length; i++){
                        var row = `<tr>
                        <td>${tasks.task[i].name}</td>
                        <td>${tasks.task[i]._id}</td>
                        <td>${tasks.task[i].completed}</td>
                        <td><button data-id = ${tasks.task[i]._id} data-name = ${tasks.task[i].name}>Delete</button></td>
                        <td><button data.id = ${tasks.task[i]._id} data-name = ${tasks.task[i].name}>Update</button></td>
                        </tr>`
                    table.innerHTML += row

                }
                // const loadingTaskDOM = document.getElementById("loading-task-div");
                loadingTaskDOM.style.color = 'green'
                loadingTaskDOM.innerHTML = "Data loaded successfully."

                setTimeout(() => {
                    loadingTaskDOM.style.visibility = 'hidden'

                }, 3000);
            }
        }
        
        catch (error) {
            console.log(error);
        }
    }
    
    getData();

    // Form Action

formButton.addEventListener('click', async (even) => {
    // even.preventDefault();
    const name = formInput.value
    if(name === ""){
        alert("Task must have a name")
        return
    }
    // alert(`welcome ${name}`)
    try {
        await axios.post('/api/v1/tasks', { name })
        getData()
        formInput.value = ''
        loadingTaskDOM.style.visibility = 'visible'
        loadingTaskDOM.style.color = 'green'
        loadingTaskDOM.innerHTML = 'success, task added'
        // formAlertDOM.classList.add('text-success')
    } 
    
    catch (error) {
        loadingTaskDOM.style.color = 'red'
        loadingTaskDOM.innerHTML = 'error, please try again'
    }
    
    setTimeout(() => {
        loadingTaskDOM.style.visibility = 'hidden'
    }, 3000)
})
