class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

let dog = new Dog();
dog.speak(); // ✅ Inherited from Animal
dog.bark();  // ✅ Dog’s own method
