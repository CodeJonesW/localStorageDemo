window.addEventListener("load", () => {
    const display = document.getElementById("count")
    let count = localStorage.getItem("counted")
//    newExample()
    if(count !== null){
        display.innerHTML = "Count: " + count
    } else {
        count = 0
        display.innerHTML = "Count: " + count
    }
    
    window.addEventListener("click", (e) => {
        let clickedItem = e.target

        switch(clickedItem.id){
            case "add":
                add()
                break;
            case "subtract":
                subtract()
                break;
            case "clear":
                clear()
                break;
            case "object":
                objectExample()
                break;
        }
    })

    const add = () => {
        count++
        localStorage.setItem("counted", count)
        console.log(localStorage)
        display.innerHTML = "Count: " + count  
    }

    const subtract = () => {
        count = parseInt(localStorage.getItem("counted"))
        count--
        localStorage.setItem("counted", count)

        console.log(localStorage)
        display.innerHTML = "Count: " + count
    }

    const clear = () => {
        localStorage.clear()
        localStorage.setItem("counted", 0)
        count = localStorage.getItem("counted")
        console.log(localStorage)
        display.innerHTML = "Count: " + count
    }

})


let myObject = {
    user: "mainUser"
}


const objectExample = () => {
    let myObject = {name: "Will"}
    let myArray = ["Will", "Robert"]
    localStorage.setItem("myObject", JSON.stringify(myObject))
    console.log(localStorage)
    let myOtherObject = JSON.parse(localStorage.getItem("myObject"))
    
    console.log(myOtherObject)
}  