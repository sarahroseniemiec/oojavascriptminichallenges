console.log("hello");

// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.
// solution 1


function Photo(filePath, location) {
  this.filePath = filePath
  this.location = location
}

var londonPhoto = new Photo ("london.jpg", "London")
var bigbenPhoto = new Photo ("bigben.jpg", "London")
var westminsterabbyPhoto = new Photo ("westminsterabby.jpg", "London")
var busPhoto = new Photo ("bus.jpg", "London")
var streetPhoto = new Photo ("street.jpg", "London")
var theQueenAndIPhoto = new Photo ("thequeenandi.jpg", "London")
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

londonAlbum = new Album()
londonAlbum.addingPhotos(londonPhoto)
londonAlbum.addingPhotos(bigbenPhoto)
londonAlbum.addingPhotos(westminsterabbyPhoto)
londonAlbum.addingPhotos(busPhoto)
londonAlbum.addingPhotos(streetPhoto)
londonAlbum.addingPhotos(theQueenAndIPhoto)

//listing all photos in londonAlbum
console.log(londonAlbum);
//accessing the first photo added to londonAlbum
console.log(londonAlbum.photos[0])


stThomasAlbum = new Album()
stThomasAlbum.addingPhotos(beachPhoto)
stThomasAlbum.addingPhotos(palmtreePhoto)
stThomasAlbum.addingPhotos(dolphinsPhoto)
stThomasAlbum.addingPhotos(royalDaneMallPhoto)
stThomasAlbum.addingPhotos(hikePhoto)
stThomasAlbum.addingPhotos(iguanaPhoto)

//listing all photos in stThomasAlbum
console.log(stThomasAlbum);
//accessing third photo added to stThomasAlbum
console.log(stThomasAlbum.photos[2]);

moonAlbum = new Album()
moonAlbum.addingPhotos(moonwalkPhoto)
moonAlbum.addingPhotos(flagPhoto)
moonAlbum.addingPhotos(starsPhoto)
moonAlbum.addingPhotos(milkywayPhoto)
moonAlbum.addingPhotos(shootingStarPhoto)

//listing all photos in moonAlbum
console.log(moonAlbum);
//accessing fourth photo added to moonAlbum
console.log(moonAlbum.photos[3]);





// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.
// solution 2
