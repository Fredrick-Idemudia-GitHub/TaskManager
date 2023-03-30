const formInput = document.querySelector('.form-control');
const loadingTaskDOM = document.getElementById("loading-task-div");
const radioButton = document.getElementById('completed');
const submitButton = document.querySelector('.submit-button');
const homeButton = document.querySelector('.backhome')

const params = window.location.search
const id = new URLSearchParams(params).get('id')
const task = new URLSearchParams(params).get('task')
const completed = new URLSearchParams(params).get('completed')
const taskCompleted = JSON.parse(completed)




// Get values Parameters from URL 
function getValues() {
        homeButton.style.visibility = 'hidden'
        formInput.value = task
        loadingTaskDOM.style.visibility ='visible'
        loadingTaskDOM.style.color = 'green'
        loadingTaskDOM.innerHTML = 'Task Editing Ready'
        // console.log(formInput.value)

        // const completedTask = tasks.task.completed

        if(taskCompleted == true){
            radioButton.checked = true
            
            // alert('false')
        }
        else{
            radioButton.checked = false
            // alert('true')
        }
        setTimeout(() => {
            loadingTaskDOM.style.visibility = 'hidden'
            loadingTaskDOM.innerHTML = 'Loading'
        },3000)
}


submitButton.addEventListener('click', async (event) => {
    loadingTaskDOM.style.visibility = 'visible'
    loadingTaskDOM.textContent = 'Editing Task...'

    try {

        let value = ""
        let newTask = ""
        if(radioButton.checked){
            value = true
            newTask = formInput.value
        }
        else{
            value = false
            newTask = formInput.value
        }

        const taskName = newTask;
        const completedValue = value

        alert(taskName)
        alert(completedValue)
        
        await axios.patch(`/api/v1/tasks/${id}`, {
            name: taskName,
            completed: completedValue,
        })
     
    } 
    
    catch (error) {
      console.error(error)
      loadingTaskDOM = `error, please try again`
    }
    setTimeout(() => {
      loadingTaskDOM.textContent = 'Task has been edited...'
    }, 3000)

    setTimeout(() => {
        loadingTaskDOM.style.visibility = 'hidden'
        homeButton.style.visibility = 'visible'
      }, 5000)
})
  




// async function getValues() {

//     try {
//         const response = await axios.get(`/api/v1/tasks/${id}`);
//         const tasks = response.data

//         if(tasks.task.length < 1){
//             loadingTaskDOM.style.visibility = 'visible'
//             loadingTaskDOM.style.color = 'red'
//             loadingTaskDOM.innerHTML = "There is no Data to Display from Database."
//             return
//         }
        
//         formInput.value = tasks.task.name
//         loadingTaskDOM.style.visibility ='visible'
//         loadingTaskDOM.style.color = 'green'
//         loadingTaskDOM.innerHTML = 'Task Editing Ready'
//         console.log(formInput.value)

//         const completedTask = tasks.task.completed

//         if(completedTask == true){
//             radioButton.checked = true
//             // alert('false')
//         }
//         else{
//             radioButton.checked = false
//             // alert('true')
//         }
//         setTimeout(() => {
//             loadingTaskDOM.style.visibility = 'hidden'
//             loadingTaskDOM.innerHTML = 'Loading'
//         },3000)
        
//     } catch (error) {
//         console.log('Could not get record')
//     }
    
    
// }

// getValues()
