import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, breed, age)
    setName("")
    setBreed("")
    setAge("")
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input 
          type="text" 
          id="name" 
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          />
      </label>
      <label htmlFor="breed">
        Breed:
        <input 
          type="text" 
          id="breed" 
          name="breed" 
          value={breed}
          onChange={event => setBreed(event.target.value)}
          />
      </label>
      <label htmlFor="age">
        Age:
        <input 
          type="text" 
          id="age" 
          name="age"
          value={age}
          onChange={event => setAge(event.target.value)}
          />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default DogForm;


































