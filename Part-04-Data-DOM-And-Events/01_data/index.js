/**
 * index.js
 * 
 * Running the test cases for the data model.
 * 
 * This can help to test, whether the implementation of the data model works as expected. If errors occur, having 
 * a single data model helps to ensure that these errors can be fixed in a single place.
 * 
 */

// Create a global instance of the address list class that will be used by the application.
const addressList = AddressList.getInstance();

// Run the different test cases

console.log("Test 1: Display the AddressList object");
console.log(addressList);

console.log("Test 2: Display the address list array.");
console.log(addressList.getList());

console.log("Test 3: Retrieve a single address with id = 1 from the list.");
console.log(addressList.getAddress(1));

console.log("Test 4: Create a new address and add it to the list.");
console.log(addressList.addAddress("Fritz Freiwald", "Teststrasse 1", "Teststadt", "12345", false));
console.log(addressList.getList());

console.log("Test 5: Modify address with id = 1 in the list.");
console.log(addressList.updateAddress({ id: 1, name: "New Name", street: "New Street", city: "New City", zip: "00000", advertisment: false }));
console.log(addressList.getList());

console.log("Test 6: Remove the address with id = 2 from the list");
console.log(addressList.removeAddress(2));
console.log(addressList.getList());

console.log("Test 7: Get the list sorted by name in ascending order.");
console.log(addressList.getSortedList(true));

console.log("Test 8: Get the list sorted by name in descending order.");
console.log(addressList.getSortedList(false));

/**
 * Test the AddressList.getInstance() function.
 * 
 * - addressList2 is using the getInstance() function should show the exact same data as addressList. We can see this if we retrieve the 
 * address with id = 1, which we modified above. 
 * - addressList3 was created using the new AddressList() constructor. This has created a new instance with a new, independent address list. Here,
 * the address with the i = 1 should still show the original data and not the modified data.
 * 
 */

console.log("Test 9: Test of the AddressList.getInstance() function to see whether the same instance is really returned.");

console.log("addressList.getAddress(1): Instance used in the test above:")
console.log(addressList.getAddress(1))

console.log("addressList2.getAddress(1): New reference to the same instance retrieved by the getInstance() function:");
const addressList2 = AddressList.getInstance();
console.log(addressList2.getAddress(1))

console.log("addressList3.getAddress(1): New reference to a different instance created with new AddressList():")
const addressList3 = new AddressList();
console.log(addressList3.getAddress(1))


