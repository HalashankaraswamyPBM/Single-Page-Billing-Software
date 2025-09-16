const form = document.getElementById("billForm");
const tableBody = document.querySelector("#billTable tbody");

async function loadBills() {
    const res = await fetch("/api/bills");
    const bills = await res.json();
    tableBody.innerHTML = "";
    bills.forEach(bill => {
        const row = `
            <tr>
                <td>${bill.id}</td>
                <td>${bill.customerName}</td>
                <td>${bill.itemName}</td>
                <td>${bill.quantity}</td>
                <td>${bill.price}</td>
                <td>${bill.quantity * bill.price}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bill = {
        customerName: document.getElementById("customerName").value,
        itemName: document.getElementById("itemName").value,
        quantity: parseInt(document.getElementById("quantity").value),
        price: parseFloat(document.getElementById("price").value),
    };
    await fetch("/api/bills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bill),
    });
    form.reset();
    loadBills();
});

loadBills();
