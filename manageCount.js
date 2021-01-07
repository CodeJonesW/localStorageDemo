window.addEventListener("load", () => {

    const addBtn = document.getElementById("add")
    const subtractBtn = document.getElementById("subtract")
    const clearBtn = document.getElementById("clear")
    const display = document.getElementById("count")



    let count = localStorage.getItem("counted")
    
    if(count !== null){
        display.innerHTML = "Count: " + count
    } else {
        count = 0
        display.innerHTML = "Count: " + count
    }
    
    

    addBtn.addEventListener("click", () => {
        count++
        localStorage.setItem("counted", count)
        console.log(localStorage)
        display.innerHTML = "Count: " + count
    })

    subtractBtn.addEventListener("click", () => {
        count = parseInt(localStorage.getItem("counted"))
        count--
        localStorage.setItem("counted", count)

        console.log(localStorage)
        display.innerHTML = "Count: " + count
    })


    clearBtn.addEventListener("click", () => {
        localStorage.setItem("counted", 0)
        count = localStorage.getItem("counted")
        console.log(localStorage)
        display.innerHTML = "Count: " + count
    })
})