import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] =  useState("")
  const [plants, setPlants] = useState([])


  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=> r.json())
    .then(data=>setPlants(data))
  }, [])

  const searchedPlant = plants.filter(plant=>{
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
function addedPlant(newPlant){
  console.log(newPlant)
}

  return (
    <main>
      <NewPlantForm addedPlant={addedPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList search={search} plants={searchedPlant}/>
    </main>
  );
}

export default PlantPage;
