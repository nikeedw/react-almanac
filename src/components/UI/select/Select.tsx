import { FC } from "react"
import { IOption } from "../../../models/interfaces";


interface SelectProps {
	options: IOption[];
	defaultValue: string;
	value: string | number;
	onChange: (value: any) => void;
}


const Select: FC<SelectProps> = ({ options, defaultValue, value, onChange }) => {
	return (
		<select
			value={value}
			onChange={onChange}
		>
			<option disabled value=''>{defaultValue}</option>
			{options.map((option) =>
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
		</select>
	)
}

export default Select
