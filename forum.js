
const freelancers = [
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

//



function createRows() {
    const tableBody = document.querySelector("table tbody");
    const rows = document.createElement("tr");
    const dataElements = freelancers.map((freelancer) => {
        const element = document.createElement("tr");
        element.textContent(freelancer.name);
        element.createTextNode("name");
        return element;
    });

    rows.appendChildren(...dataElements);

}

createRows();
