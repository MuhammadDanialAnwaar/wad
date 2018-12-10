var savingaccount={
        AccountTitle: "Muhammad Danial",
        AvailableBalance: 5000,
        Currency: "PKR",
        IBAN: "DAN1234564321",
    };

var month=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July" ,
    "August",
    "September",
    "October",
    "November",
    "December"
];
getID();
function getID()
{
    document.getElementById("title").innerText = savingaccount.AccountTitle;
    document.getElementById("balance").innerText = savingaccount.AvailableBalance;
    document.getElementById("currency").innerText = savingaccount.Currency;
    document.getElementById("IBAN").innerText = savingaccount.IBAN;
}

function depositAmount(event)
{
    var k = event.keyCode;
    if(k != 13)
    {
        document.getElementById('deposit-msg').innerText = "";
        return;
    }
    var data = parseInt(document.getElementById("deposit").value);
    if (isNaN(data))
    {
        document.getElementById("deposit-msg").innerText = "Enter Correct Amount";
        return;
    }

    if(data<=0)
        return;
    savingaccount.b =savingaccount.b + data;
    var memory = new Date();
    var transaction = {
        amount:data,
        months: month[memory.getMonth()],
        day: memory.getDate(),
        year: memory.getFullYear(),
        hrs: memory.getHours(),
        min: memory.getMinutes(),
        sec: memory.getSeconds(),
        stype: "Credit"
    }
    Transaction(transaction);
}

function withDraw(event)
{
    var k = event.keyCode;
    if(k != 13)
    {
        document.getElementById('withdraw-msg').innerText = "";
        return;
    }
    var data = parseInt(document.getElementById("withdraw").value);
    if (isNaN(data))
    {
        document.getElementById("withdraw-msg").innerText = "Enter a Valid Amount";
        return;
    }
    if (data <= 0)
        return;
    if (data > savingaccount.b)
    {
        document.getElementById("withdraw-msg").innerText = "Not enough balance";
        return;
    }
    savingaccount.b -= data;
    var d = new Date();
    var transaction = {
        amount: data,
        months: month[d.getMonth()],
        day: d.getDate(),
        year: d.getFullYear(),
        hrs: d.getHours(),
        min: d.getMinutes(),
        sec: d.getSeconds(),
        stype: "Debit"
    };
    Transaction(transaction);
}

function Transaction(tr)
{
    document.getElementById("transaction-table").innerHTML += "<tr> <td>"+tr.months+" "+tr.day+", "+tr.year+" "
        +tr.hrs+":"+tr.min+":"+tr.sec+"</td> <td>"+tr.stype+"</td> <td>"+tr.amount+"</td></tr>";
    getID();
}
