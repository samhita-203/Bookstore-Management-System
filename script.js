var selectedRow = null

function onFormSubmit(){
    if(validate()){
        var formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["fullName"]= document.getElementById("fullName").value;
    formData["address"]= document.getElementById("address").value;
    formData["cnum"]= document.getElementById("cnum").value;
    formData["email"]= document.getElementById("email").value;
    formData["isbn"]= document.getElementById("isbn").value;
    formData["bookName"]= document.getElementById("bookName").value;
    formData["aName"]= document.getElementById("aName").value;
    formData["quantity"]= document.getElementById("quantity").value;
    formData["price"]= document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName; 
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cnum;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.isbn; 
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.bookName; 
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.aName;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.quantity;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.price;
    cell9 = newRow.insertCell(9);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>` ; 
}

function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("cnum").value = "";
    document.getElementById("email").value = "";
    document.getElementById("isbn").value = "";
    document.getElementById("bookName").value = "";
    document.getElementById("aName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("address").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cnum").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("isbn").value = selectedRow.cells[4].innerHTML;
    document.getElementById("bookName").value = selectedRow.cells[5].innerHTML;
    document.getElementById("aName").value = selectedRow.cells[6].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[7].innerHTML;
    document.getElementById("price").value = selectedRow.cells[8].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.address;
    selectedRow.cells[2].innerHTML = formData.cnum;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.isbn;
    selectedRow.cells[5].innerHTML = formData.bookName;
    selectedRow.cells[6].innerHTML = formData.aName;
    selectedRow.cells[7].innerHTML = formData.quantity;
    selectedRow.cells[8].innerHTML = formData.price;
}

function onDelete(td){
    if (confirm('Are you sure to delete this record ?')){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
    }
}

function validate(){
    isValid = true;
    if(document.getElementById("fullName").value == ""){
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }
    else{
        isValid = true;
        if(!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}