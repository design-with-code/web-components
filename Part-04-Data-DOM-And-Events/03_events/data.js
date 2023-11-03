/**
 * class AddressList
 * 
 * Contains the application data and offers all functions to access and modify the data. 
 * 
 * Use the AddressList.getInstance() function to retrieve a reference to the same addres list from
 * everywhere.
 * 
 */
class AddressList{
    
    // static variable that will hold the instance of the address list
    static instance;

    // variable holding the address list
    addressList = [];
    
    /**
     * constructor()
     * 
     * The constructor is called when a new instance of the AddressList is created using "new AddressList()". In this case we want to avoid
     * calling the constructor directly. Instead we use the static AddressList.getInstance() method to always get the same instance of the address 
     * list with the same data.
     */
    constructor(){
        this.addressList = [...this.defaultAddressList];
    }

    /**
     * getInstance()
     * 
     * Static method to get the single instance of the AddressList class. This pattern is called the Singleton pattern
     * and ensures that only a single instance of an object is used across the entire runtime environment. Always use this method
     * to get an instance of the AddressList instead of creating a new instance using the constructor.
     * 
     * @returns The single instance of the address list class
     */
    static getInstance(){
        if(this.instance == null){
            this.instance = new AddressList();
        }
        return this.instance;
    }

    /**
     * getList()
     * 
     * Method to get a copy of the address list.
     * 
     * @returns Copy of the address list
     */
    getList(){
        return [...this.addressList];
    }

    /**
     * getSortedList(ascending)
     * 
     * Method to get a sorted array of addresses, sorted by name.
     * 
     * @param {boolean} ascending Ascending when true or null, descrending when false 
     * @returns Sorted array of addresses
     */
    getSortedList(ascending){
        ascending = ascending === undefined ? true : ascending;
        var sortedList = [...this.addressList];
        if(ascending){
            return sortedList.sort((a,b) => a.name.localeCompare(b.name));
        }else{
            return sortedList.sort((a,b) => b.name.localeCompare(a.name));
        }
    }


    /**
     * getAddress(id)
     * 
     * Method to retrieve a single address by id
     * 
     * @param {number} id Id of the address that should be returned
     * @returns A copy of the address or null if no address was found
     */
    getAddress(id) {
        const address = this.addressList.find((addr) => addr.id == id);
        return structuredClone(address);
    }


    /**
     * addAddress(name, street, city, zip, ads)
     * 
     * Method to create a new entry in the addresslist
     * 
     * @param {string} name Address name
     * @param {string} street Address street
     * @param {string} city Address city
     * @param {string} zip Zip code
     * @param {boolean} advertisment Flag to indicate if address allows to send ads
     * @returns 
     */
    addAddress(name, street, city, zip, advertisment){
        const date = new Date();
        var newAddress = {
            id: date.getTime(),
            name: name,
            street: street,
            city: city,
            zip: zip,
            advertisment: advertisment
        };
        this.addressList.push(newAddress);
        return newAddress;
    }
    
    /**
     * removeAddress(id)
     * 
     * Method to remove an address from the data
     * 
     * @param {number} id Id of the address that should be removed
     * @returns true if the address has been found and removed and false if the address wasn't found and could therefore not be removed
     */
    removeAddress(id){
        var storedAddress = this.addressList.find((addr) => addr.id == id);
        if(storedAddress){
            this.addressList = this.addressList.filter((addr) => addr.id != id);
            return true;
        }
        return false;
    }

    /**
     * updateAddress(address)
     * 
     * Method to update an existing address with a modified version of the address.
     * 
     * @param {object} address New address with the data the existing address shall be updated to
     * @returns The updated address if everything worked out or null if the address could not be updated.
     */
    updateAddress(address){
        var storedAddress = this.addressList.find((addr) => addr.id == address.id);
        if(storedAddress){
            this.addressList = this.addressList.filter((addr) => addr.id != address.id);
            this.addressList.push(address);
            return address;
        }
        return null;
    }

    /**
     * Internal variable that holds the initial addresses
     */
    defaultAddressList = [
        {id: 1, name:"Anna Arendt", street:"Kleine Strasse 12", city:"Walldorf", zip: "69190", advertisment: true},
        {id: 2, name:"Bernd Bauer", street:"Grosse Strasse 3", city:"Walldorf", zip: "69190", advertisment: false},
        {id: 3, name:"Carla Clyne", street:"Hauptstrass 62", city:"Walldorf", zip: "69190", advertisment: true},
        {id: 4, name:"Daniel Dunst", street:"Mühlstrasse 4", city:"Walldorf", zip: "69190", advertisment: true},
        {id: 5, name:"Ernst Ewald", street:"Hauptstrasse 51", city:"Walldorf", zip: "69190", advertisment: false}
    ] 
}

