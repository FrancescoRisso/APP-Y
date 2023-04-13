/*

description:
	An input field
	
state:
	
hooks:
	- useMemo inputType: computes the HTML input type from type
	
context:
	
*/

import { IonInput, IonItem, IonLabel, IonNote } from "@ionic/react";
import { useMemo } from "react";

export interface InputProps {
	// the type of input that should go inside
	type: "password" | "text" | "email" | "date";

	// what to do when the input value changes
	onInputAction: (e: React.FormEvent<HTMLIonInputElement>) => void;

	// the text that should be inserted as input label
	label: string;

	// If present, displays an error string
	error?: string;

	// The current content of the input
	value: string
}

const Input = ({ type, onInputAction, label, error, value }: InputProps) => {
	const inputType = useMemo(() => {
		switch (type) {
			case "email":
				return "email";
			case "password":
				return "password";
			case "date":
				return "date";
			default:
				return "text";
		}
	}, [type]);

	return (
		<IonItem fill="outline" color="main" className={`${error && "ion-invalid"}`}>
			<IonLabel position="stacked">{label}</IonLabel>
			<IonInput
				onInput={(e) => {
					onInputAction(e);
				}}
				type={inputType}
				value={value}
			></IonInput>
			{error && <IonNote slot="error">{error}</IonNote>}
		</IonItem>
	);
};

export default Input;
