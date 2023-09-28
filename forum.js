document.body.style.textAlign = "center";

const names = ["Alice", "Bob", "Carol", "David", "Eve", "Freddie"];
const jobs = ["Writer", "Teacher", "Programmer", "Marketer", "Teacher", "Coder"];
const prices = [30, 60, 70, 80, 90, 100];
const maxListing = 10;

const people = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 60
    },
    {
        name: "Carol",
        occupation: "Programmer",
        price: 70
    },
   
];
//create text to dynamically display the average of the prices


function averagePrice() {
    let sum = 0;
    for(const item of prices) {
        sum += item;
    }
    return sum/prices.length;
}

function addP() {
    const freelancers = document.querySelector("h3");
    const p = document.createElement('p');
    p.textContent = "This is fun";
    freelancers.parentNode.insertAfter(p, )
}




function populateTable() {
    // Get a reference to the table's tbody
    const tableBody = document.querySelector("#myTable tbody");
    tableBody.style.textAlign = "center";
   
    

    // Use the map function to create table rows for each object
    const rows = people.map((person) => {
        
        const row = document.createElement("tr");

        // Create table data cells for each property
        const nameCell = document.createElement("td");
        const jobCell = document.createElement("td");
        const priceCell = document.createElement("td");

        // Set the text content of the table cells
        nameCell.textContent = person.name;
        jobCell.textContent = person.occupation;
        priceCell.textContent = person.price;

        nameCell.style.textAlign = "left";
        jobCell.style.textAlign = "right";
        priceCell.style.textAlign = "right";

        // Append the table cells to the table row
        row.appendChild(nameCell);
        row.appendChild(jobCell);
        row.appendChild(priceCell);

        return row; // Return the created table row
    });

    // Append the rows to the table's tbody
    // rows.forEach(function(row) {
    //     tableBody.appendChild(row);
    // });
    tableBody.append(...rows);
}

//add more listings 
function addPeople () {
    const name = names["Alice", "Bob", "Carol", "David", "Eve", "Freddie"];
    const occupation = jobs["Writer", "Teacher", "Programmer", "Marketer", "Teacher", "Coder"];
    const price = prices[30, 60, 70, 80, 90, 100];

    people.push({
        name, occupation, price
    })

    populateTable();

    if (people.length === maxListing) {
        clearInterval(addPeopleIntervalID);
    }
}






const addPeopleIntervalID = setInterval(addPeople, 1000);
// Call the populateTable function to initially populate the table
populateTable();

//




