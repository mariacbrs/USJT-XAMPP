// objeto js
person={
    name: "Maria",
    age: 21,
    // array
    graduations: ["Tecnichal School", "University", "Mestrado"],
    // array
    dateOfgraduation: [2006, 2013, 2017],
    // objeto
    spouse:{
        name: "John",
        age:26
    },
    // boolean
    hasChildren: true,
    // array de objetos
    children: [
        {
            name: "Julia",
            age: 10
        },
        {
            name: "Peter",
            age: 8
        }
    ],
    // function of the obj
    getYear: function(){
        return 2025 - this.age
    }
}

function printInfo(){
   var infoContainer = document.getElementById("infoContainer");
    
    infoContainer.innerHTML = "Name: " + person.name + "<br>" + "Age: " + person.age;

    infoContainer.innerHTML += "<br>" + "Courses: ";
    person.graduations.forEach(course => {
        infoContainer.innerHTML += course + " - ";
    }); 

    infoContainer.innerHTML += "<br> Spouse: " + person.spouse.name + " Age: " + person.spouse.age;

    // Não é preciso fazer checagem de boolean no if, pois ele já faz 
    if(person.hasChildren){
        infoContainer.innerHTML += "<br> Has Children? YES ";
        person.children.forEach(child =>{
            infoContainer.innerHTML +=  "<br> Name: " + child.name + " Age: " + child.age;
        })
    }else{
        infoContainer += "<br> Has Children? NO"
    }
    infoContainer.innerHTML += "<br> Birth Year: " + person.getYear();
}