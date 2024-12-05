class VariablesList {

    // static variable that will hold the instance of the address list
    static instance;

    // variable holding the address list
    variablesList = [];

    constructor() {
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new VariablesList();
        }
        return this.instance;
    }

    getList() {
        return [...this.variablesList];
    }

    getSortedList(ascending) {
        ascending = ascending === undefined ? true : ascending;
        var sortedList = [...this.variablesList];
        if (ascending) {
            return sortedList.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            return sortedList.sort((a, b) => b.name.localeCompare(a.name));
        }
    }


    getVariable(id) {
        const variable = this.variablesList.find((variable) => variable.id == id);
        return structuredClone(variable);
    }


    addVariable(name, value) {
        const date = new Date();
        var newVariable = {
            id: date.getTime(),
            name: name,
            value: value,
            type: this.getVariableType(name, value)
        };
        this.variablesList.push(newVariable);
        return newVariable;
    }

    getFilteredList(filter) {
        if (filter == "" || filter == null) {
            return this.variablesList;
        }
        return this.variablesList.filter((variable) => variable.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
    }

    removeVariable(id) {
        var storedVariable = this.variablesList.find((variable) => variable.id == id);
        if (storedVariable) {
            this.variablesList = this.variablesList.filter((variable) => variable.id != id);
            return true;
        }
        return false;
    }

    getVariableType(name, value) {
        if (name.endsWith("BackgroundColor") || name.endsWith("Background")) {
            return "background-color";
        } else if (name.endsWith("TextColor")) {
            return "text-color";
        } else if (name.endsWith("Color") || value.startsWith("#")) {
            return "color";
        } else if (name.startsWith("sapFont") && name.endsWith("Family")) {
            return "font-family";
        } else if (name.startsWith("sapContent") && name.endsWith("Family")) {
            return "font-family";
        } else if (name.endsWith("FontFamily")) {
            return "font-family";
        } else if (name.startsWith("sapFont") && name.endsWith("Size")) {
            return "font-size";
        } else if (name.startsWith("sapFont")) {
            return "font";
        } else if (name.endsWith("_TextShadow")) {
            return "text-shadow";
        } else if (name.endsWith("Shadow") || value.startsWith("0 0")) {
            return "shadow";
        } else if (name.endsWith("_TextColor")) {
            return "text-color";
        }

    }


}

