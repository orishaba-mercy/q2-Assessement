# class Artist:
#     def __init__(self,name,country,type_of_music):
#       self.name=name
#       self.country=country
#       self.type_of_music=type_of_music
     

#     def perform(self):
#        print (f"{self.name} from {self.country} playing {self.type_of_music} ")

# class Musicians(Artist):
#    def __init_(self,name,country,instrament) :
#       super.__init__(name,country)
#       self.instrament=instrament   

# def perform(self):
#         return (f"{self.name} from {self.country} using this {self.instrament}")   

# class Dancers(Artist):
#     def __init_(self,name,country,dancing_styles) :
#         super().__init__(name,country)
#         self.dancing_styles=dancing_styles



class Artist:
    def __init__(self, name, country, music_style, instrument):
        self.name = name
        self.country = country
        self.music_style = music_style
        self.instrument = instrument
    def display_details(self):
        return f'Name: {self.name}, Country: {self.country}, Music Style: {self.music_style}, Instrument: {self.instrument}'
class Performance(Artist):
    def __init__(self, name, country, music_style, instrument, end_time, start_time):
        super().__init__(name, country, music_style, instrument)
        self.end_time = end_time
        self.start_time = start_time
    def performance_duration(self):
        return self.end_time - self.start_time
class Stage(Artist):
    def __init__(self, name,  music_style, instrument, location):
        super().__init__(name, country, music_style, instrument)
        self.location = location
        self.schedule = []
    def addingTask(self, task):
        self.schedule.append(task)
# Create an instance of the Artist class
artist = Artist("Marisah", "USA", "dancing", "guiter")
print(artist.display_details())
# Create an instance of the Performance class
performance = Performance("Jane", "UK", "Pop", "Vocals", 24, 12)
print(performance.performance_duration())
# Create an instance of the Stage class
stage = Stage("Jesus", "Kenya", "rocking", "piano", "hall")
stage.addingTask("dancing")
print(stage.schedule)

#     def perform(self):
#         return (f"{self.name} from{self.country} with different{self.dancing_styles}")
    
# class perfomance: 
#     def __init__(self,name,start_time,end_time):
#         self.name=name
#         self.start_time=start_time
#         self.end_time=end_time

#     def start_end_time(self):
#         return (f"artist{self.name} his perfomance starts at {self.start_time} and it will end{self.end_time}")

# Artist1=Musicians("mercy","uganda","afro_music")
# dancers=Dancers("MERCY","nigeria","global",)



# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.

class Products:
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.quantity=quantity

    def total_value(self):
        return self.quantity*self.price
    
Product1=Products("Beans",3000,30)
product2=Products("oranges",600,10)

tatal_value1=Product1.total_value()
tatal_value2=product2.total_value()


print(f"the total value of{Product1.name} costs ${tatal_value1}")


         
         
# question6
class Students:
    def __init__(self,name,age,grades):
        self.name=name
        self.age=age
        self.grades=grades

    def  calculate_average_grade (self):
              total_marks=sum(self.grades) 
              return(total_marks/len(number_of_grades)) 
    


    def students_details(self):
        return (f"self.name" ,"Total_Marks")
        


    
       
       
        

 