window.addEventListener("load", () => {
    const display = document.getElementById("count")
    let count = localStorage.getItem("counted")
    
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
            case "array":
                arrayExample()
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
        localStorage.setItem("counted", 0)
        count = localStorage.getItem("counted")
        console.log(localStorage)
        display.innerHTML = "Count: " + count
    }

    const arrayExample = () => {
        localStorage.setItem("myArray", JSON.stringify([1,2,3]))

        console.log(localStorage)

        let newArray = JSON.parse(localStorage.getItem("myArray"))
        console.log(typeof newArray)
        let newArrayElement = document.getElementById("newArray")
        newArrayElement.innerHTML = newArray

    }
})