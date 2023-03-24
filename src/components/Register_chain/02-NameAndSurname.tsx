/*

description:
	Happy asks you name and surname
	
state:
	
hooks:
	
context:
	- RegisterContext
	
*/

import { useContext, useEffect, useCallback } from "react";
import { IonGrid, IonRow, IonCol, IonInput, IonItem } from "@ionic/react";

import { RegisterComponentProps } from "../../types";

import SpeechBubble from "../General_components/SpeechBubble";
import { RegisterContext } from "./Common/RegisterContext";

import PandaImg from "../General_components/PandaImg";

const NameAndSurname = ({ canProceed, setCanProceed }: RegisterComponentProps) => {
	const context = useContext(RegisterContext);

	const inputsChanged = useCallback(
		(name: string, surname: string) => {
			if (name !== "" && surname !== "") {
				if (!canProceed) setCanProceed(true);
			} else if (canProceed) setCanProceed(false);
		},
		[canProceed, setCanProceed]
	);

	const getInputChangeEventListerner = (field: "name" | "surname") => {
		return (event: React.FormEvent<HTMLIonInputElement>) => {
			const otherField = field === "name" ? "surname" : "name";

			context[field].set(event.currentTarget.value?.toString() ?? "");

			inputsChanged(context[otherField].val, event.currentTarget.value?.toString() ?? "");
		};
	};

	useEffect(() => {
		inputsChanged(context.name.val, context.surname.val);
	}, [context.name, context.surname, inputsChanged]);

	return (
		<IonGrid className="h-100percent">
			<IonRow className="h-100percent ion-align-items-center">
				<IonCol>
					<form>
						<IonItem className="mx-10px" fill="outline" color="main">
							<IonInput
								type="text"
								placeholder="Nome"
								value={context.name.val}
								onInput={getInputChangeEventListerner("name")}
							/>
						</IonItem>

						<br />

						<IonItem className="mx-10px" fill="outline" color="main">
							<IonInput
								type="text"
								placeholder="Cognome"
								value={context.surname.val}
								onInput={getInputChangeEventListerner("surname")}
							/>
						</IonItem>
					</form>

					<br />

					<SpeechBubble content={<p>Innanzitutto, mi serve sapere il tuo nome e cognome</p>} />
					<PandaImg type="skateboard" />
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default NameAndSurname;
