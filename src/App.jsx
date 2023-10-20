import { useState } from "react";
import CakeList from "./CakeList";

const cakeList = [
    { id: 1, name: 'Chocolate Fudge Cake', type: 'chocolate' },
    { id: 2, name: 'Red Velvet Cake', type: 'red-velvet' },
    { id: 3, name: 'Vanilla Bean Cake', type: 'vanilla' },
    { id: 4, name: 'Strawberry Shortcake', type: 'strawberry' },
    { id: 5, name: 'Chocolate Cheesecake', type: 'chocolate' },
  ];
const App=()=>{
    const [cakes,setCakes]=useState(cakeList);
    const addCake =()=>{
        const newCake={
            id: cakes.length+1, name: `Cake ${cakes.length+1}`, type: 'chocolate'
        }
        setCakes([...cakes,newCake])
    }
    return<>
        <div>
            <CakeList cakes={cakes}/>
            <br></br>
            <button onClick={addCake}>Add Cake</button>
        </div>  
    </>
}
export default App;