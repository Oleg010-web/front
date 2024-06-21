type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (currentText: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// НУЖНО ДОПИСАТЬ
		let newValue = event.currentTarget.value;
		props.setCurrentText(newValue)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
