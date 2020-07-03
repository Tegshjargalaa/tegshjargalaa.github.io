/*********************Part2-1***********************/
function filter(sentence, bannedWords){

    var words = sentence.split(' ');
    for(i = 0; i < bannedWords.length; i++){
        words = words.filter(e => e !== bannedWords[i]);
    }
    console.log(words.join(" "));
    return words.join(" ");
}
/*********************Part2-2***********************/
function bubbleSort(inputArr){
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
}

/*********************Part2-3***********************/
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    console.log(this.name + " is " + this.age + " years old ");
    return this.name + ", " + this.age + " years old.";
}

var person = new Person();
person.initialize("Tjka ", 18);
person.describe();

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

var me = new Student();

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}

var teacher = new Teacher();

me.initialize("John", 25);
me.learn("Inheritance");

teacher.initialize("Micheal", 37);
teacher.teach("WAP");