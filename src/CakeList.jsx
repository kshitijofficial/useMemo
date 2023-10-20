import { useMemo,useState } from "react";
import "./App.css"

const CakeList = ({cakes}) => {
  
  const [count,incrementCount]=useState(0)
  const filter = 'chocolate'; // For example, we want to filter for chocolate cakes
  
  const filteredCakes = useMemo(()=>{
    return cakes.filter(cake => {
        console.log("Run")
        return cake.type === filter;
  })},[cakes,filter])
  
  const cakeCount = useMemo(()=>{ return filteredCakes.length;},[filteredCakes])

  return (
    <div>
      <h1>{count}</h1>
      <h2>{`List of ${filter} cakes`}</h2>
      <ul>
        {filteredCakes.map(cake => (
            <li key={cake.id}>{cake.name}</li>
        ))}
      </ul>
      <p>{`Total ${filter} cakes: ${cakeCount}`}</p>
      <button onClick={()=>incrementCount(count+1)}>Increment Count</button>
    </div>
  );
};

export default CakeList;
