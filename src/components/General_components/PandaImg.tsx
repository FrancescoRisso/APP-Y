/*

description:
	
	
state:
	- 
	
hooks:
	- 
	
context:
	- 
	
imported into:
	- 
	
component dependences:
	- 
	
other dependences:
	- 
	
*/

import { IonCol, IonGrid, IonRow } from "@ionic/react";
import waving from "../../images/pandas/waving.svg";
import bamboo from "../../images/pandas/bamboo.svg";
import cantSee from "../../images/pandas/cantSee.svg";
import computer from "../../images/pandas/computer.svg";
import confused from "../../images/pandas/confused.svg";
import relaxed from "../../images/pandas/relaxed.svg";
import skateboard from "../../images/pandas/skateboard.svg";
import smiley from "../../images/pandas/smiley.svg";
import surprised from "../../images/pandas/surprised.svg";

export interface PandaImgProps {
	type: "waving" | "bamboo" | "cantSee" | "computer" | "confused" | "relaxed" | "skateboard" | "smiley" | "surprised";
}

const PandaImg = ({ type }: PandaImgProps) => {
	let img;

	switch (type) {
		case "waving":
			img = waving;
			break;
		case "bamboo":
			img = bamboo;
			break;
		case "cantSee":
			img = cantSee;
			break;
		case "computer":
			img = computer;
			break;
		case "confused":
			img = confused;
			break;
		case "relaxed":
			img = relaxed;
			break;
		case "skateboard":
			img = skateboard;
			break;
		case "smiley":
			img = smiley;
			break;
		case "surprised":
			img = surprised;
			break;
	}

	return (
		<IonGrid>
			<IonRow className="ion-justify-content-center">
				<IonCol>
					<img src={img} alt="Panda che saluta" className="icon-center-vertically" width="80%" />
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default PandaImg;
