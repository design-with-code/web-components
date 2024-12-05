var selectedVariable;

function updateTable(list) {

    // Remove all content from the table
    resetTable();

    // Set the title of the panel to show the number of addresses
    const title = document.getElementById("tableTitle");
    title.innerHTML = `CSS Variables (${list.length})`;

    // Get a reference to the table element
    const table = document.getElementById("variablesTable");
    list.forEach((variable) => {
        table.appendChild(createTableRow(variable));
    });
}

function resetTable() {
    // Get a reference to the table element
    const table = document.getElementById("variablesTable");

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

function createTableRow(variable) {

    // Create table row element
    const row = document.createElement("ui5-table-row");
    row.rowKey = variable.name;
    row.interactive = true;

    const nameCell = document.createElement("ui5-table-cell");
    nameCell.innerHTML = variable.name;
    row.appendChild(nameCell);

    const valueCell = document.createElement("ui5-table-cell");
    valueCell.innerHTML = variable.value;
    row.appendChild(valueCell);

    const exampleCell = document.createElement("ui5-table-cell");
    if (variable.type == "color" || variable.type == "background-color") {
        exampleCell.innerHTML = `<div style='background-color:${variable.value}; border: 1px solid var(--sapNeutralBorderColor); min-width:10rem;'>&nbsp;</div>`;
    }else if (variable.type == "text-color") {
        exampleCell.innerHTML = `<div style='background-color:var(--sapBaseColor); min-width:10rem;color:var(--${variable.name})'>Text Color</div>`;
    }else if (variable.type == "shadow") {
        exampleCell.innerHTML = `<div style='background-color:var(--sapBaseColor); min-width:10rem;box-shadow:${variable.value}'>&nbsp;</div>`;
    }else if (variable.type == "text-shadow") {
        exampleCell.innerHTML = `<div style='background-color:var(--sapBaseColor); min-width:10rem;text-shadow:${variable.value}'>Text Shadow</div>`;
    }else if (variable.type == "font-family") {
        exampleCell.innerHTML = `<div style='background-color:var(--sapBaseColor); min-width:10rem; font-family:var(--${variable.name});'>Font Family</div>`;
    }else if (variable.type == "font-size") {
        exampleCell.innerHTML = `<div style='background-color:var(--sapBaseColor); min-width:10rem; font-size:var(--${variable.name});'>Font Size</div>`;
    }
    row.appendChild(exampleCell);

    const typeCell = document.createElement("ui5-table-cell");
    const types = ["color", "background-color", "text-color", "font", "font-family", "font-size", "text-shadow", "shadow", "text-color"];
    typeCell.innerHTML = `<ui5-tag design='Set1' color-scheme='${types.indexOf(variable.type) + 1}'>${variable.type}</ui5-tag>`;
    row.appendChild(typeCell);


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
function createTableCell(prop) {

    // Create table cell
    const cell = document.createElement("ui5-table-cell");

    // Differentiate between properties of different data types
    if (typeof (prop) === "string") {

        // Add string content
        cell.innerHTML = prop;
    } else if (typeof (prop) === "boolean") {

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
 * The onload event is triggered when the document is readily loaded and all elements
 * are available. Run initial logic only after load to avoid that elements you need are not 
 * yet available.
 */
onload = () => {
    let vl = VariablesList.getInstance()
    fetch('variables.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            Object.entries(data.root).forEach((entry) => {
                vl.addVariable(entry[0], entry[1]);
            })
            updateTable(vl.getList());
        })
        .catch((error) => {
            console.error('Error loading JSON:', error);
        });

    let input = document.getElementById("filterInput");
    input.addEventListener("input", () => {
        updateTable(vl.getFilteredList(input.value));
    })

    let table = document.getElementById("variablesTable");
    let toast = document.getElementById("msgToast");
    table.addEventListener("row-click", (e) => {
        let clp = `var(--${e.detail.row.rowKey})`;
        navigator.clipboard.writeText(clp)
            .then(() => {
                toast.textContent = `Copied "${clp}" to the clipboard.`;
                toast.open = true;
            }).catch((e) => {
                toast.textContent = `Couldn't copy text.`;
                toast.open = true;
            })

    })

}


