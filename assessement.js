//  **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

// class Story{
//     constructor(length,moralLessons,age_group){
//        this.length= length
//        this.moralLessons=moralLessons
//        this.age_group=age_group
//     }
    
// }
// class StoryTeller{
//     constructor(name){
//         this.name=name
       
//     }
    
//     Teller(story){

        
//     }
// }

// class oldStoryTeller  extends Story{
//     constructor(name,story){
//         super(name);
//         this.story=story

//     }
// }
// class YouthStoryTeller extends Story{
//     constructor(name,story){
//         this.story=story
//     super(name);   
//     }
// }
// class Translator extends StoryTeller{
//     constructor(differentlanguages){
//         this.differentlanguages
//     }

// }  


// const story= new Story("The Lion and the Hare", "Medium", "Never underestimate your opponent.", "Children");


// const oldStoryTeller = new oldStoryTeller("orishaba", 20);


// const YouthStoryTeller = new YouthStoryTeller("Kwash hope", "12");


// const translator = new Translator();
// oldStoryTeller.tellStory(story);
// const translator = translator.translate(story, "Germeny",story,'kiswahili');
// console.log(Translator);



  
 
  
  
  
// class StoryTeller {
//   constructor(name, language, age_group, title) {
//       this.name = name;
//       this.language = language;
//       this.age_group = age_group;
//       this.title = title;
//   }
// }

// class Translator extends StoryTeller {
//   constructor(name, language, age_group, title) {
//       super(name, language, age_group, title);
//   }

//   translate_story(story, target_language) {
//       console.log(`Translating story into ${target_language}...`);

//       console.log("Translated story:");
//       console.log(`Content: ${story.content}`);
//       console.log(`Author: ${story.author}`);
//       console.log(`Moral Lessons: ${story.moral_lessons}`);
//       console.log(`Age Group: ${story.age_group}`);
//       console.log(`Length: ${story.length}`);
//       console.log(`Title: ${story.title}`);
//   } 
// }
// class Story {
//   constructor(content, author, moral_lessons, age_group, length, title) {
//       this.content = content;
//       this.author = author;
//       this.moral_lessons = moral_lessons;
//       this.age_group = age_group;
//       this.length = length;
//       this.title = title;
//   }
// }



// let story = new Story("Once upon a time...", "Bridget", "Always be kind", "Children", 10, "The River Between");
// let storyteller = new StoryTeller("Janey", "English", "Children", "Storyteller");
// let sranslator = new Translator("Alexin", "French", "Children", "Translator");

// Translator.translate_story(story, "French");

  


// // // **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// // // The app needs to handle recipes from different African countries, each with its
// // // unique ingredients, preparation time, cooking method, and nutritional
// // // information. Consider creating a `Recipe` class, and think about how you might
// // // create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// // // `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// // methods.

class Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
	this.name = name;this.ingredients = ingredients;
	this.preparationTime = preparationTime;
	this.cookingMethod = cookingMethod;
	this.nutritionalInfo = nutritionalInfo;
  }

  displayRecipe() {
	console.log(`Recipe: ${this.name}`);
	console.log(`Ingredients: ${this.ingredients}`);
	console.log(`Preparation Time: ${this.preparationTime}`);
	console.log(`Cooking Method: ${this.cookingMethod}`);
	console.log(`Nutritional Information: ${this.nutritionalInfo}`);
  }
}

class MoroccanRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, spiceLevel) {
	super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
	this.spiceLevel = spiceLevel;
  }

  displayRecipe() {
	super.displayRecipe();
	console.log(`Spice Level: ${this.spiceLevel}`);
  }
}

class EthiopianRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, injeraIncluded) {
	super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
	this.injeraIncluded = injeraIncluded;
  }

  displayRecipe() {
	super.displayRecipe();
	console.log(`Injera Included: ${this.injeraIncluded}`);
  }
}


class NigerianRecipe extends Recipe {
  constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, jollofRiceIncluded) {
	super(name, ingredients, preparationTime, cookingMethod, nutritionalInfo);
	this.jollofRiceIncluded = jollofRiceIncluded;
  }

  displayRecipe() {
	super.displayRecipe();
	console.log(`Jollof Rice Included: ${this.jollofRiceIncluded}`);
  }
}


const moroccanRecipe = new MoroccanRecipe( 'Moroccan maize floor',
  ['oil', 'greens', 'Carrots', 'Tomatoes', 'Spices'],'2 hours', 'Well cooked and ready to be eaten','Calories, Fat, Protein', 'small'
 
);
moroccanRecipe.displayRecipe();

const ethiopianRecipe = new EthiopianRecipe( 'shabwe', ['Chicken', 'Onions', 'Greens', 'Ginger'],
'1.5 hours','Simmering in a spicy sauce only the spices and others', ' Fat: 5g, Protein: 15g',)
 
 
ethiopianRecipe.displayRecipe();

const nigerianRecipe = new NigerianRecipe( 'Jollof Rice', ['Rice', 'Tomatoes', 'Onions', 'Peppers', 'Chicken'],
'45 minutes','One-pot cooking', 'Calories: 350, Fat: 10g, Protein: 20g')
 
nigerianRecipe.displayRecipe();


// **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.


class Spicies{
  constructor(diet,lifespan,migrationPatters,name){
    this.lifespan=lifespan
    this.migrationPatters=migrationPatters
    this.diet=diet
    this.name=name
  }
  getDiscription(){
    return `${this.name} feeds on ${this.diet} and it stays for ${this.lifespan}`;
  }
  getDiet(){
    return` ${this.name} mostly feed on ${this.diet}`
  }
  getmigrationPatterns(){
    return`Gazelles move every ${this.migrationPatters} look for water and pasture`;
  }
}

class Predator extends Spicies{
  constructor(name,lifespan,migrationPatters,diet,huntaingMethods){
    super(name,diet,lifespan,migrationPatters)
    this.huntaingMethods=huntaingMethods
  }
  getDiscription(){
    return ` ${super.getDiscription()} its a Predator that moves in groups when migrating ${this.migrationPatters}`;
  }

}
class pray extends Spicies{
  constructor(name,lifespan,migrationPatters,diet,predeterthreat){
    super(name,diet,migrationPatters,lifespan)
    this.predeterthreat=predeterthreat

  }
  getDiscription(){
    return`${this.getDiscription} this follows ${this.migrationPatters}.it faces a predators threat level of ${this.predeterthreat}.`;
  }
  
}
const species=new Spicies("Lion","meat",30,"abrapt Attack");

const Pray =new pray("Zebra","grass",20,"group migration");
console.log(Pray.getDiscription());
const predators=new Predator("Lion","meat",5,"ambush hunting")
console.log(predators.getDiscription());





//gggggg

//for art
class Artist {
  constructor(name, country) {
    this.name = name;
    this.country = country;
    
  }

  perform() {
    console.log(`${this.name} from ${this.country} is performing.`);
  }
}

class Musician extends Artist {
  constructor(name, country, instrument) {
    super(name, country);
    this.instrument = instrument;
  }

  perform() {
    console.log(`${this.name} from ${this.country} is performing with ${this.instrument}.`);
  }
}

class Dancer extends Artist {
  constructor(name, country, danceStyle) {
    super(name, country);
    this.danceStyle = danceStyle;
  }

  perform() {
    console.log(`${this.name} from ${this.country} is performing a ${this.danceStyle} dance.`);
  }
}

class Performance {
  constructor(artist, startTime, endTime) {
    this.artist = artist;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  start() {
    console.log(`Performance by ${this.artist.name} starts at ${this.startTime}.`);
  }

  end() {
    console.log(`Performance by ${this.artist.name} ends at ${this.endTime}.`);
  }
}

class Stage {
  constructor(name) {
    this.name = name;
    this.performances = [];
  }

  addPerformance(performance) {
    this.performances.push(performance);
  }

  showSchedule() {
    console.log(`Schedule for ${this.name}:`);
    this.performances.forEach((performance, index) => {
      console.log(`Performance ${index + 1}: ${performance.artist.name}, Start: ${performance.startTime}, End: ${performance.endTime}`);
    });
  }
}

const artist1 = new Musician("sauit", "kenya", "saxophone");
const artist2 = new Dancer("Kora", "Senegal", "traditional");
const artist3 = new Musician("Angelique Kidjo", "Benin", "vocals");

const performance1 = new Performance(artist1, "18:00", "19:00");
const performance2 = new Performance(artist2, "19:30", "20:00");
const performance3 = new Performance(artist3, "20:30", "21:30");

const stage1 = new Stage("Main Stage");
stage1.addPerformance(performance1);
stage1.addPerformance(performance2);
stage1.addPerformance(performance3);

stage1.showSchedule();
performance1.start();
performance1.end();

artist2.perform();



class Products{
  constructor(name,quatity,price){
    this.name=name
    this.quatity=quatity
    this.price=price
  }
  getTotalValue(){
    return this.price*this.quatity
  }
  
}
// const product1=new Product{}



//qution7
class FlightBooking{
  constructor(Destination,flight,Date,passangerSit){
    this.Destination=Destination
    this.flight=[]
    this.Date=Date
    this.passangerSit=passangerSit
  }
  availabeFlight(){
    for(flight in flights){
      if()
    } 
  }
}