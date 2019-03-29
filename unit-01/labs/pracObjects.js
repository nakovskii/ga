const seiStudent = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    languages: [],
    pet: {
        species: '',
        name: '',
        age: ''
    }
};

// the following command will give problem
// Uncaught TypeError: seiStudent is not a constructor
// *****    const Laeeq = new seiStudent();   ******

// instead use Object.create() if the Object doesn't have a constructor
// or constructor function
const Laeeq = Object.create(seiStudent);

Laeeq.firstName = 'laeeq';
