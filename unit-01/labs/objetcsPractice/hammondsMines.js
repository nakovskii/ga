// Today we visit Jurassic Park 🐉 to explore the wild world of 
// objects! You have been brought on to manage the dig sites for 
// Dr. John Hammond. No expense has been spared, so let's get 
// to work!

const snakewaterMontana = {
    paleontologist: 'Dr. Alan Grant',
    depth: '10 meters',
    specimen: 'Velociraptor',
  };

  let guestOfHonor = snakewaterMontana.paleontologist;
  let cleverGirl = snakewaterMontana.specimen;


//   Part 2

  const nicaragua = {
    depth: '200 meters',
    annualBudget: 1500000,
    specimens: [
      'Tyrannosaurus Rex',
      'Stegosaurous',
      'Triceratops',
      'Velociraptor',
    ],
  };
// Store the array of specimens of this site into a variable 
// called nicaraguanSpecimens.

// Make a variable called favoriteSpecimen and assign its value to your favorite dinosaur ( do this by referencing the nicaragua object, not the new nicaraguanSpecimens variable)

// Add 250000 to the annual budget of this site.

  let nicaraguanSpecimens = nicaragua.specimens;
  let favoriteSpecimen = nicaraguanSpecimens[0];
  nicaragua.budget = 250000;

//   Part 3
const hammondsMines = {
    buenosAires: {
      depth: '400 meters',
      annualBudget: 1000000,
      specimens: ['Dilophosaurus', 'Brachiosaurus'],
    },
    mexico: {
      depth: '350 meters',
      annualBudget: 900000,
      specimens: ['Gallimimus', 'Parasaurolophus'],
    },
  };

// Access the depth of John Hammond's mine in Mexico, 
// store the depth of the Mexican mine into an appropriately named variable.  




