import React from "react";
import { useState } from 'react';
//include images into your bundle


//create your first component
const Home = () => {
	const [lightColor, setLightColor] = useState("yellow");


	return (
		<div className="text-center">
            
		<div className="cable" >  </div>

			<div className="trafficLight"> 
				
				<div className={"light red "  + (lightColor=="red"? "on" : "")} onClick={()=>setLightColor("red")}></div>
				<div className={"light yellow " + (lightColor=="yellow"? "on" : "")} onClick={()=>setLightColor("yellow")}></div>
				<div className={"light green "  + (lightColor=="green"? "on" : "")}onClick={()=>setLightColor("green")}></div>
				
				
				 </div>

		</div>
	);
};

export default Home;