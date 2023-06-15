//  **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.

class culturesStory{
    constructor(length,moralLessons,age_group){
       this.length= length
       this.moralLessons=moralLessons
       this.age_group=age_group
    }
    

}
class StoryTeller{
    constructor(name){
        this.name=name
       
    }
    
    Teller(story){

        
    }
}

class oldStoryTeller  extends StoryTeller{
    constructor(name,story){
        super(name);
        this.story=story

    }
}
class YouthStoryTeller extends StoryTeller{
    constructor(name,story){
        this.story=story
    super(name);   
    }

   
}
class Translator extends StoryTeller{
    constructor(differentlanguages){
        this.differentlanguages
    }

}  


const story = new story("The Lion and the Hare", "Medium", "Never underestimate your opponent.", "Children");


const oldStoryTeller = new oldStoryTeller("orishaba", 20);


const YouthStoryTeller = new YouthStoryTeller("Kwash hope", "12");


const translator = new Translator();
oldStoryTeller.tellStory(story);
const Translator = translator.translate(story, "Germeny",story,'kiswahili');
console.log(Translator);



// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.
class Recipe {
    constructor(name, country, ingredients, Time, cookingMethod, nutritionalInfo) {
      this.name = name;
      this.country = country;
      this.ingredients = ingredients;
      this.Time = Time;
      this.cookingMethod = cookingMethod;
      this.nutritionalInfo = nutritionalInfo;
    }
  
    displayRecipe() {
      console.log(nageria);
      console.log(uganda);
      console.log();
      console.log(6);
      console.log(mixtures);
      console.log(reach in vitamins);
    }
  }
  
  class MoroccanRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, spices) {
      super(name, "Morocco", ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.spices = spices;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`Spices: ${this.spiceLevel}`);
    }
  }
  
  class EthiopianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, injeraIncluded) {
      super(name, "Ethiopia", ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.mistMeat = mistMeat;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`mistMeat: ${this.mistMeat}`);
    }
  }
  
  class NigerianRecipe extends Recipe {
    constructor(name, ingredients, preparationTime, cookingMethod, nutritionalInfo, Spicy) {
      super(name, "Nigeria", ingredients, preparationTime, cookingMethod, nutritionalInfo);
      this.Spicy = Spicy;
    }
  
    displayRecipe() {
      super.displayRecipe();
      console.log(`Spicy: ${this.Spicy}`);
    }
  }
  
  
  const moroccanRecipe = new MoroccanRecipe(
    "Moroccan Couscous",
    ["Couscous", "Vegetables", "Meat", "Spices"],
    "1 hour",
    "Steam",
    "Calories: 300",
    "Medium"
  );
  moroccanRecipe.displayRecipe();
  
  
 
  
  
  
  
  
