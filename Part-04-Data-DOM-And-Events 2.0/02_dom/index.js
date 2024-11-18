/**
 * index.js
 * 
 * Application Controler - creates the table contents from the 
 * addresses in the data model.
 */


/**
 * updateAddressTable(list)
 * 
 * Method that is called to update the table with new content. The addres
 * list is handed over as parameter. The function first removes all existing 
 * table rows from the table and then adds one row for each address in the 
 * list.
 * 
 * @param {object} list Array of addresses to be displayed in the table
 */
function updateAddressTable(list) {

    // Remove all content from the table
    resetTable();

    // Set the title of the panel to show the number of addresses
    const panel = document.getElementById("addressPanel");
    panel.setAttribute("header-text", `Address (${list.length})`);

    // Get a reference to the table element
    const table = document.getElementById("addressTable");
    list.forEach((address) => {
        table.appendChild(createTableRow(address));
    });
}

/**
 * resetTable()
 * 
 * Method to remove existing rows and groups from the table. This is necessary 
 * before new rows can be added when the table gets updated.
 * 
 * The function iterates all children of the table element and adds all
 * rows and group-rows to an array. Then it iterates the array and calles 
 * the remove function on each element which removes the element from 
 * its parent.
 * 
 */
function resetTable(){
    // Get a reference to the table element
    const table = document.getElementById("addressTable");

    // Iterate all child elements in the table and add rows and groups to an array
    var childrenToRemove = [];
    for (let i = 0; i < table.children.length; i++) {
        const name = table.children[i].tagName;
        if (name == "UI5-TABLE-ROW" || name == "UI5-TABLE-GROUP-ROW") {
            childrenToRemove.push(table.children[i]);
        }
    }
    // Remove all collected rows and groups from the document
    childrenToRemove.forEach((child) => child.remove());

}

/**
 * createTableRow(address)
 * 
 * Method that constructs a table row with an address. This function returns
 * a ui5-table-row element for each address it receives. Internally, it
 * calles another function to create table cells for each of the properties
 * of the address.
 * 
 * @param {object} address Address that will be shown in this table row
 * @returns The table row element
 */
function createTableRow(address){
    
    // Create table row element
    const row = document.createElement("ui5-table-row");
    row.id = address.id; // set the address id for later reference
    row.type = "Active"; // Make the row active for click events
    
    // Create table cells for each property of the address and add the cell 
    // to the row.
    row.appendChild(createTableCell(address.name));
    row.appendChild(createTableCell(address.street));
    row.appendChild(createTableCell(address.city));
    row.appendChild(createTableCell(address.zip));
    row.appendChild(createTableCell(address.advertisment));
    
    // Return the row element
    return row;
}

/**
 * createTableCell(prop)
 * 
 * Method that creates a table cell for a property. Depending an the data type
 * of the property, the function will create a different cell / cell content.
 * - Strings will just be added as text
 * - Booleans will be displayed as readOnly checkbox
 * 
 * @param {string|boolean} prop Content to be set as cell content. Strings are just displayed as text, boolean will be displayed as checkbox
 * @returns Table cell
 */
function createTableCell(prop){
    
    // Create table cell
    const cell = document.createElement("ui5-table-cell");

    // Differentiate between properties of different data types
    if(typeof(prop) === "string"){
        
        // Add string content
        cell.innerHTML = prop;
    }else if(typeof(prop) === "boolean"){
    
        // Create a readonly checkbox if it is a boolean
        const cb = document.createElement("ui5-checkbox");
        cb.readonly = true;
        cb.checked = prop;
        cell.appendChild(cb);

    }

    // Return the cell element
    return cell;
}

/**
 * onLoad
 * 
 * The onload event is triggered when the document is readily loaded and all elements
 * are available. Run initial logic only after load to avoid that elements you need are not 
 * yet available.
 */
onload = () => {

    // Set the table contents
    updateAddressTable(AddressList.getInstance().getSortedList(true));
}


