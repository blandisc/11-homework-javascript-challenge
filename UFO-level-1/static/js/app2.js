// from data.js
let tableData = data;

let tableBody = d3.select("tbody");

data.forEach(d=>{
    let row = tableBody.append("tr")
    
    Object.values(d).forEach(w=>{
            row.append("td").text(w)
    })
    
});


let button = d3.select("#filter-btn");

button.on("click", function (){
    
    let inputSelect = d3.select("#datetime");

    let inputValue = inputSelect.property("value");

    let filteredResults = data.filter(d => d.datetime===inputValue);

    console.log(filteredResults)

    d3.select("tbody").selectAll("tr").remove()

    filteredResults.forEach(d=>{
        let row = tableBody.append("tr")
    
        Object.values(d).forEach(w=>{
            row.append("td").text(w)
        })
    
    })
});


