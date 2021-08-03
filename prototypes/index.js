/* eslint-disable */

const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties

const kittyPrompts = {







  // DIRECTIONS:
  // Return an array of just the names of kitties who are orange e.g.
  // ['Tiger', 'Snickers']

  // PSUEDOCODE:
  // input = array of objects, with keys: name, age, color
  // output = array of names of orange kitties
  // filter over kitties array & find orange kitties
  //  `color === 'orange'`
  // then `return` names of orange kitties

  orangeKittyNames() {
  
    const getOrangeKitties = (kitty) => {
      return kitty.color === 'orange';
    };

    const getKittyNames = (kitty) => {
      return kitty.name;
    };

    const result = kitties.filter(getOrangeKitties).map(getKittyNames);

    return result;
  },





  // DIRECTIONS:
  // Sort the kitties by their age

  sortByAge() {

    const sortByAgeFormula = (kittyA, kittyB) =>
      kittyB.age - kittyA.age;

    const result = kitties.sort(sortByAgeFormula);
    return result;
  },








  // DIRECTIONS:
  // Return an array of kitties who have all grown up by 2 years e.g.
  // [{
  //   name: 'Felicia',
  //   age: 4,
  //   color: 'grey'
  // },
  // {
  //   name: 'Tiger',
  //   age: 7,
  //   color: 'orange'
  // },
  // ...etc]

  growUp() {

    const passTime = (kitty) => {
      kitty.age += 2;
      return kitty;
    };

    const descending = (kittyA, kittyB) => kittyB.age - kittyA.age;

    const result = kitties.map(passTime);

    return result;
  }




};







// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------








// DATASET: clubs from ./datasets/clubs

const clubPrompts = {








  //DIRECTIONS:
  // Create an object whose keys are the names of people, and whose values are
  // arrays that include the names of the clubs that person is a part of. e.g.
  // {
  //   Louisa: ['Drama', 'Art'],
  //   Pam: ['Drama', 'Art', 'Chess'],
  //   ...etc
  // }

  membersBelongingToClubs() {

    const result = clubs.reduce((obj, club) => {
      club.members.forEach(member => {
        if (!obj[member]) {
          obj[member] = [];
        }
        obj[member].push(club.club);
      })
      return obj;
    }, {})

    return result;
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods

const modPrompts = {








  // Return an array of objects where the keys are mod (the number of the module)
  // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
  // [
  //   { mod: 1, studentsPerInstructor: 9 },
  //   { mod: 2, studentsPerInstructor: 11 },
  //   { mod: 3, studentsPerInstructor: 10 },
  //   { mod: 4, studentsPerInstructor: 8 }
  // ]

  studentsPerMod() {

    const result = mods;
    
    result.forEach(student => {
      const studentRatio = student.students / student.instructors;
      student.studentsPerInstructor = studentRatio;
      delete student.students;
      delete student.instructors;
    });

    return result;

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes

const cakePrompts = {





  // Return an array of objects that include just the flavor of the cake and how
  // much of that cake is in stock e.g.
  // [
  //    { flavor: 'dark chocolate', inStock: 15 },
  //    { flavor: 'yellow', inStock: 14 },
  //    ..etc
  // ]

  stockPerCake() {
    let result = cakes;
    
    result.forEach(cake => {
      cake.flavor = cake.cakeFlavor;
      delete cake.filling;
      delete cake.frosting;
      delete cake.toppings;
      delete cake.cakeFlavor;
    });

    return result;
  },

//   stockPerCake() {
    
//     const result = cakes.map(cake => {
//       let cakeList = {};
//       cake.flavor = cake.cakeFlavor;
//       cakeList.inStock = cake.inStock;
//       return cakeList;
//     });


// console.log(result)
//     return result;
//   },







  // Return an array of only the cakes that are in stock
  // e.g.
  // [
  //   {
  //   cakeFlavor: 'dark chocolate',
  //   filling: null,
  //   frosting: 'dark chocolate ganache',
  //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
  //   inStock: 15
  // },
  // {
  //   cakeFlavor: 'yellow',
  //   filling: 'citrus glaze',
  //   frosting: 'chantilly cream',
  //   toppings: ['berries', 'edible flowers'],
  //   inStock: 14
  // },
  // ..etc
  // ]

  onlyInStock() {

    const result = cakes.filter(cake => {
      return cake.inStock > 0;
    });

    return result;
  },








  // Return the total amount of cakes in stock e.g.
  // 59










  totalInventory() {

    const isInStock = cake => {
      return cake.inStock > 0;
    };

    const getStock = cake => {
      return cake.inStock;
    };

    const sumCakesInStock = (cakeA, cakeB) => (cakeA + cakeB);

    let result = cakes.filter(isInStock).map(getStock).reduce(sumCakesInStock, 0);

    return result;

  },





  // Return an array of all unique toppings (no duplicates) needed to bake
  // every cake in the dataset e.g.
  // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

  // allToppings() {

  //   let result = cakes.map(cake => {
  //     return cake.toppings;
  //   });
  //   return result;
  // },



  // allToppings() {

  //   const sumToppings = (accumulator, cake) => { 
  //     return accumulator + cake.toppings;
  //   };

  //   console.log(sumToppings);

  //   const result = cakes.reduce(sumToppings);

  //   return result;
  // },




  // allToppings() {

  //   const sumToppings = (cake =>
  //     result.cake.toppings;
  //   };

  //   const result = cakes.reduce(sumToppings);

  //   return result;
  // },




  // I need to make a grocery list. Please give me an object where the keys are
  // each topping, and the values are the amount of that topping I need to buy e.g.
  // {
  //    'dutch process cocoa': 1,
  //    'toasted sugar': 3,
  //    'smoked sea salt': 3,
  //    'berries': 2,
  //    ...etc
  // }

  groceryList() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms

const classPrompts = {







  // Create an array of just the front-end classrooms. e.g.
  // [
  //   { roomLetter: 'A', program: 'FE', capacity: 32 },
  //   { roomLetter: 'C', program: 'FE', capacity: 27 },
  //   { roomLetter: 'E', program: 'FE', capacity: 22 },
  //   { roomLetter: 'G', program: 'FE', capacity: 29 }
  // ]

  feClassrooms() {

    const result = classrooms.filter(classroom => {
      return classroom.program === 'FE' ;
    });
    
    return result;

  },









  // Create an object where the keys are 'feCapacity' and 'beCapacity',
  // and the values are the total capacity for all classrooms in each program e.g.
  // {
  //   feCapacity: 110,
  //   beCapacity: 96
  // }

  totalCapacities() {

    let totalFECapacitiesArray = [];
    let totalBECapacitiesArray = [];

    classrooms.forEach(classroom => {
      if (classroom.program === 'FE') {
        totalFECapacitiesArray.push(classroom.capacity);
      } else {
        totalBECapacitiesArray.push(classroom.capacity); 
      }
    });

    const totalFECapacitiesNum = totalFECapacitiesArray.reduce((classroomA, classroomB) => classroomA + classroomB, 0);

    const totalBECapacitiesNum = totalBECapacitiesArray.reduce((classroomA, classroomB) => classroomA + classroomB, 0);

    const result = {
      feCapacity: totalFECapacitiesNum,
      beCapacity: totalBECapacitiesNum
    };

    return result;

  },













  // Return the array of classrooms sorted by their capacity (least capacity to greatest)

  sortByCapacity() {

    const result = classrooms.sort((classroomA, classroomB) => classroomA.capacity - classroomB.capacity);

    return result;

  }
};











// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------











// DATASET: books from './datasets/books

const bookPrompts = {










  // return an array of all book titles that are not horror or true crime. Eg:

  //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
  //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
  //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
  //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
  //   'Catch-22', 'Treasure Island']

  removeViolence() {

    const screenByViolence = book => {
      ! (book.genre === 'Horror' || book.genre === 'True Crime');
      return book;
    };

    const pullJustTitles = book => {
      return book.title;
    };

    const result = books.filter(screenByViolence).map(pullJustTitles);

    return result;

  },












  // return an array of objects containing all books that were
  // published in the 90's and 00's. Inlucde the title and the year Eg:

  // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
  //  { title: 'Life of Pi', year: 2001 },
  //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]



  // this works fine

  //   getNewBooks() {

  //     let result = [];

  //     books.forEach(book => {
  //       if (book.published >= 1990) {
  //         book.year = book.published;
  //         delete book.published;
  //         delete book.author;
  //         delete book.genre;
  //         result.push(book);
  //       }
  //     });

  //     return result;

  //   }
  // };

  // but here's drafting it how they want it

  getNewBooks() {

    const accessPublishedDatesOver90 = book => {
      return book.published >= 1990;
    };

    const provideYearPublished = book => {
      book.year = book.published;
      return book.year && book.title;
    };

    let result = books.filter(accessPublishedDatesOver90).map(provideYearPublished);

    return result;
  }
};








// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------









// DATASET: weather from './datasets/weather

const weatherPrompts = {





  // return an array of all the average temperatures. Eg:
  // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

  getAverageTemps() {

    const result = weather.map(city => {
      return ((city.temperature.high + city.temperature.low) / 2);
    });
    return result;
  },








  // Return an array of sentences of the locations that are sunny
  // and mostly sunny. Include the location and weather type. Eg:
  // [ 'Atlanta, Georgia is sunny.',
  // 'New Orleans, Louisiana is sunny.',
  // 'Raleigh, North Carolina is mostly sunny.' ]

  findSunnySpots() {

    const result = [];

    weather.forEach (city => {
      if (city.type === 'sunny' || city.type === 'mostly sunny') {
        result.push(`${city.location} is ${city.type}.`);
      }
    });

    return result;

  },











  // Return the location with the highest humidity. Eg:
  // {
  //   location: 'Portland, Oregon',
  //   type: 'cloudy',
  //   humidity: 84,
  //   temperature: { high: 49, low: 38 }
  // }

  // working code below

  //   findHighestHumidity() {

  //     const citiesByHumidity = weather.sort((cityA, cityB) => (cityB.humidity - cityA.humidity);

  //     const result = citiesByHumidity[0];

  //     return result;

  //   }
  // };

  // draft refactor

  findHighestHumidity() {

    const result = weather.sort((cityA, cityB) => cityB.humidity - cityA.humidity).map(city => {
      return city[0];
    });

    return result;

  }
};








// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------









// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {









  /// Return an object containing the names of which parks I need to visit
  // and the ones I have already visited eg:
  // {
  //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
  //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
  //}

  getParkVisitList() {

    const result = nationalParks.reduce((accumulatorObj, currentNationalPark) => {
      if (currentNationalPark.visited) {
        if (!accumulatorObj.parksVisited) {
          accumulatorObj.parksVisited = [currentNationalPark.name];
        } else {
          accumulatorObj.parksVisited.push(currentNationalPark.name);
        }
      } else {
        if (!accumulatorObj.parksToVisit) {
          accumulatorObj.parksToVisit = [currentNationalPark.name];
        } else {
          accumulatorObj.parksToVisit.push(currentNationalPark.name);
        }
      }
      return accumulatorObj;
    }, {});
    return result;
  },







  // Return an array of objects where the key is the state and the value is its National Park
  // eg: [ { Colorado: 'Rocky Mountain' },
  // { Wyoming: 'Yellowstone' },
  // { Montana: 'Glacier' },
  // { Maine: 'Acadia' },
  // { Utah: 'Zion' },
  // { Florida: 'Everglades' } ]

  getParkInEachState() {
  
  // INPUT: array of objects
  // OUTPUT: array of objects
    // [ {park.location: park.name}, {etc}]

  // prototype ideas - forEach, map, reduce

    const result = nationalParks.reduce((acc, park) => {
      park.location.forEach(location => {

      if (!acc[location]) {
        acc[location] = [];
      }
        acc[location].push(park.name);
      })
      return acc;
    }, {})

    // return result;



    // const result = clubs.reduce((obj, club) => {
    //   club.members.forEach(member => {
    //     if (!obj[member]) {
    //       obj[member] = [];
    //     }
    //     obj[member].push(club.club);
    //   })
    //   return obj;
    // }, {})






    // let result = [];

    // nationalParks.forEach(park => {
    //   newState = park.location;
    //   // newPark = park.name;
    //   // delete park.visited;
    //   // delete park.activities;
    //   // delete park.name;
    //   // delete park.location;
    //   result.push(park.location);
    //   result.push(park.name);
    // });

    // return result;

  },









  // Return an array of all the activities I can do
  // in a National Park. Make sure to exclude duplicates. eg:
  // [ 'hiking',
  //   'shoeshoing',
  //   'camping',
  //   'fishing',
  //   'boating',
  //   'watching wildlife',
  //   'cross-country skiing',
  //   'swimming',
  //   'bird watching',
  //   'canyoneering',
  //   'backpacking',
  //   'rock climbing' ]

  getParkActivities() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------







// DATASET: breweries from ./datasets/breweries

const breweryPrompts = {








  // Return the total beer count of all beers for every brewery e.g.
  // 40

  getBeerCount() {



  // output = num, totalBeerCount
  // beersPerBrewery = brewery.beers.length
  // numofBreweries = how many objects in breweries array
    // breweries.length

  const result = breweries.map((brewery) => {
   return brewery.beers.length;
  }).reduce((acc, value) => {
    return acc + value;
  }, 0)

  return result;
  },










  // Return an array of objects where each object has the name of a brewery
  // and the count of the beers that brewery has e.g.
  // [
  //  { name: 'Little Machine Brew', beerCount: 12 },
  //  { name: 'Ratio Beerworks', beerCount: 5},
  // ...etc.
  // ]

  getBreweryBeerCount() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },







  // Return the beer which has the highest ABV of all beers
  // e.g.
  // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

  findHighestAbvBeer() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing

const turingPrompts = {









  // Return an array of instructors where each instructor is an object
  // with a name and the count of students in their module. e.g.
  // [
  //  { name: 'Pam', studentCount: 21 },
  //  { name: 'Robbie', studentCount: 18 }
  // ]

  studentsForEachInstructor() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },









  // Return an object of how many students per teacher there are in each cohort e.g.
  // {
  // cohort1806: 9,
  // cohort1804: 10.5
  // }

  studentsPerInstructor() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },











  // Return an object where each key is an instructor name and each value is
  // an array of the modules they can teach based on their skills. e.g.:
  // {
  //     Pam: [2, 4],
  //     Brittany: [2, 4],
  //     Nathaniel: [2, 4],
  //     Robbie: [4],
  //     Leta: [2, 4],
  //     Travis: [1, 2, 3, 4],
  //     Louisa: [1, 2, 3, 4],
  //     Christie: [1, 2, 3, 4],
  //     Will: [1, 2, 3, 4]
  //   }
    
  modulesPerTeacher() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },














  // Return an object where each key is a curriculum topic and each value is
  // an array of instructors who teach that topic e.g.:
  // {
  //   html: [ 'Travis', 'Louisa' ],
  //   css: [ 'Travis', 'Louisa' ],
  //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
  //   recursion: [ 'Pam', 'Leta' ]
  // }

  curriculumPerTeacher() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses

const bossPrompts = {














  // Create an array of objects that each have the name of the boss and the sum loyalty of all their sidekicks. e.g.:
  // [
  //   { bossName: 'Jafar', sidekickLoyalty: 3 },
  //   { bossName: 'Ursula', sidekickLoyalty: 20 },
  //   { bossName: 'Scar', sidekickLoyalty: 16 }
  // ]

  bossLoyalty() {

    const bossesKeys = Object.keys(bosses)

    const bossNamesObjects = bossesKeys.map((boss) => {
      return {
        bossName: bosses[boss].name,
        sidekickLoyalty: 0
      } 
    })

    bossNamesObjects.map((elem) => {
      sidekicks.forEach((sidekick) => {
        if (sidekick.boss === elem.bossName) {
          elem.sidekickLoyalty += sidekick.loyaltyToBoss
        }
      })
      return elem
    })

    return bossNamesObjects
  }
}




//   bossLoyalty() {
//     const bossKeys = Object.keys(bosses)

//     const result = bossKeys.reduce((acc, boss) => {

//       sidekicks.forEach((sidekick) => {
//         if (sidekick.boss === boss.bossName) {
//           acc[bossName] = boss.bossName;
//           acc[sidekickLoyalty] = sidekick.loyaltyToBoss;
//           }
//       console.log(acc)
//       }, {})
//       return acc;
//     })
//     return result
//   }
// };






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy

const astronomyPrompts = {









  // Return an array of all the stars that appear in any of the constellations
  // listed in the constellations object e.g.
  // [
  //   { name: 'Rigel',
  //     visualMagnitude: 0.13,
  //     constellation: 'Orion',
  //     lightYearsFromEarth: 860,
  //     color: 'blue' },
  //   { name: 'Betelgeuse',
  //     visualMagnitude: 0.5,
  //     constellation: 'Orion',
  //     lightYearsFromEarth: 640,
  //     color: 'red' }
  // ]

  starsInConstellations() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },















  // Return an object with keys of the different colors of the stars,
  // whose values are arrays containing the star objects that match e.g.
  // {
  //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
  //   white: [{obj}, {obj}],
  //   yellow: [{obj}, {obj}],
  //   orange: [{obj}],
  //   red: [{obj}]
  // }

  starsByColor() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },










  // Return an array of the names of the constellations that the brightest stars are part of e.g.

  //  [ "Canis Major",
  //    "Carina",
  //    "Boötes",
  //    "Auriga",
  //    "Orion",
  //    "Lyra",
  //    "Canis Minor",
  //    "The Plow",
  //    "Orion",
  //    "The Little Dipper" ]

  constellationsStarsExistIn() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima

const ultimaPrompts = {














  // Return the sum of the amount of damage for all the weapons that our characters can use
  // Answer => 113

  totalDamage() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },












  // Return the sum damage and total range for each character as an object.
  // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

  charactersByTotal() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs

const dinosaurPrompts = {








  // Return an object where each key is a movie title and each value is the
  // number of awesome dinosaurs in that movie. e.g.:
  // {
  //   'Jurassic Park': 5,
  //   'The Lost World: Jurassic Park': 8,
  //   'Jurassic Park III': 9,
  //   'Jurassic World': 11,
  //   'Jurassic World: Fallen Kingdom': 18
  // }

  countAwesomeDinosaurs() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },















  /* Return an object where each key is a movie director's name and each value is
      an object whose key is a movie's title and whose value is the average age
      of the cast on the release year of that movie.
    e.g.:
    {
      'Steven Spielberg':
        {
          'Jurassic Park': 34,
          'The Lost World: Jurassic Park': 37
        },
      'Joe Johnston':
        {
          'Jurassic Park III': 44
        },
      'Colin Trevorrow':
        {
          'Jurassic World': 56
          },
      'J. A. Bayona':
        {
          'Jurassic World: Fallen Kingdom': 59
        }
    }
  */

  averageAgePerMovie() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },

















  /*
  Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

  e.g.
    [{
      name: 'Justin Duncan',
      nationality: 'Alien',
      imdbStarMeterRating: 0
    },
    {
      name: 'Karin Ohman',
      nationality: 'Chinese',
      imdbStarMeterRating: 0
    },
    {
      name: 'Tom Wilhoit',
      nationality: 'Kiwi',
      imdbStarMeterRating: 1
    }, {
      name: 'Jeo D',
      nationality: 'Martian',
      imdbStarMeterRating: 0
    }]
  */

  uncastActors() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  },













  /*
  Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

  e.g.
  [ { name: 'Sam Neill', ages: [ 46, 54 ] },
    { name: 'Laura Dern', ages: [ 26, 34 ] },
    { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
    { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
    { name: 'Ariana Richards', ages: [ 14, 18 ] },
    { name: 'Joseph Mazello', ages: [ 10, 14 ] },
    { name: 'BD Wong', ages: [ 33, 55, 58 ] },
    { name: 'Chris Pratt', ages: [ 36, 39 ] },
    { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
  */

  actorsAgesInMovies() {

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

  }
};









module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
