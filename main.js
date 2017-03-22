console.log("hello");

// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.
// solution 1


function Photo(filePath, location) {
  this.filePath = filePath
  this.location = location
}

var santaFePhoto = new Photo ("santafe.jpg", "Santa Fe")
var tentRocksPhoto = new Photo ("tentRocks.jpg", "Santa Fe")
var stAntonioSpringsPhoto = new Photo ("stantoniosprings.jpg", "Santa Fe")
var roofPhoto = new Photo ("roof.jpg", "Santa Fe")
var doorPhoto = new Photo ("door.jpg", "Santa Fe")
var cactusPhoto = new Photo ("cactus.jpg", "Santa Fe")
var beachPhoto = new Photo ("beach.jpg", "St. Thomas")
var palmtreePhoto = new Photo ("palmtree.jpg", "St. Thomas" )
var dolphinsPhoto = new Photo ("dolphins.jpg", "St. Thomas")
var royalDaneMallPhoto = new Photo ("royaldanemall.jpg", "St. Thomas")
var hikePhoto = new Photo ("hike.jpg", "St. Thomas")
var iguanaPhoto = new Photo ("iguana.jpg", "St. Thomas")
var moonwalkPhoto = new Photo ("moonwalk.jpg", "the moon")
var flagPhoto = new Photo ("flag.jpg", "the moon")
var starsPhoto = new Photo ("stars.jpg", "the moon")
var milkywayPhoto = new Photo ("milkyway.jpg", "the moon")
var shootingStarPhoto = new Photo ("shootingstar.jpg", "the moon")


function Album() {
  this.photos = []
}

Album.prototype.addingPhotos =
function(photo) {
  this.photos.push(photo)
}

var santaFeAlbum = new Album()
santaFeAlbum.addingPhotos(santaFePhoto)
santaFeAlbum.addingPhotos(tentRocksPhoto)
santaFeAlbum.addingPhotos(stAntonioSpringsPhoto)
santaFeAlbum.addingPhotos(roofPhoto)
santaFeAlbum.addingPhotos(doorPhoto)
santaFeAlbum.addingPhotos(cactusPhoto)

var stThomasAlbum = new Album()
stThomasAlbum.addingPhotos(beachPhoto)
stThomasAlbum.addingPhotos(palmtreePhoto)
stThomasAlbum.addingPhotos(dolphinsPhoto)
stThomasAlbum.addingPhotos(royalDaneMallPhoto)
stThomasAlbum.addingPhotos(hikePhoto)
stThomasAlbum.addingPhotos(iguanaPhoto)


var moonAlbum = new Album()
moonAlbum.addingPhotos(moonwalkPhoto)
moonAlbum.addingPhotos(flagPhoto)
moonAlbum.addingPhotos(starsPhoto)
moonAlbum.addingPhotos(milkywayPhoto)
moonAlbum.addingPhotos(shootingStarPhoto)

//accessing one photo in array
Album.prototype.getPhoto = function (num) {
  console.log(this.photos[num])
}

//listing items in the album
Album.prototype.listItems = function () {
for(var i = 0; i < this.photos.length; i++){
  console.log(this.photos[i]);
  }
}

// listing all photos in Albums
moonAlbum.listItems()
stThomasAlbum.listItems()
santaFeAlbum.listItems()

//accessing third item in moonAlbum
moonAlbum.getPhoto(2)
//accessing first item in stThomasAlbum
stThomasAlbum.getPhoto(0)
//accessing second item in londonAlbum
santaFeAlbum.getPhoto(1)

// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.
// solution 2

function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

Person.prototype.hello = function() {
  console.log("Hello, my name is " + this.name + ". I am " + this.age + " years old. " + "I am " + this.gender + ".")
}

function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender)
  this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype)

function Student(name, age, gender, interest) {
  Person.call(this, name, age, gender)
  this.interest = interest
}

Student.prototype = Object.create(Person.prototype)

function Pet(name, species){
this.name = name
this.species = species
}

function School() {
  this.people = []
}

School.prototype.addPerson = function(person) {
  this.people.push(person)
}

var msFizzle = new Teacher("Ms Fizzle", 30, "female", "science")

var drCarminaSkeledon = new Teacher("Dr Carmina Skeledon", 35, "female", "palentology")

console.log(msFizzle);

var keeshaFranklin = new Student("Keesha Franklin", 8, "female", "art")

var carlosRamon = new Student("Carlos Ramon", 8, "male", "computers")

var wandaLi = new Student("Wanda Li", 8, "female", "skiiing")

var pheobeTerese = new Student("Pheobe Terese", 8, "male", "music")

var lizTheChameleon = new Pet("Liz", "chameleon")
console.log(lizTheChameleon);

var magicSchoolBus = new School()

magicSchoolBus.addPerson(msFizzle)
magicSchoolBus.addPerson(drCarminaSkeledon)
magicSchoolBus.addPerson(keeshaFranklin)
magicSchoolBus.addPerson(carlosRamon)
magicSchoolBus.addPerson(wandaLi)
magicSchoolBus.addPerson(pheobeTerese)
magicSchoolBus.addPerson(lizTheChameleon)

School.prototype.listPeople = function() {
for(var i = 0; i < this.people.length; i++){
  console.log(this.people[i]);
  }
}

School.prototype.getPerson = function (num) {
  console.log(this.people[num])
}

//listing all people
magicSchoolBus.listPeople()

//list 3rd person
magicSchoolBus.getPerson(2)

console.log(msFizzle.hello())
console.log(drCarminaSkeledon.hello());
console.log(keeshaFranklin.hello())
console.log(carlosRamon.hello())
console.log(wandaLi.hello())
console.log(pheobeTerese.hello())
