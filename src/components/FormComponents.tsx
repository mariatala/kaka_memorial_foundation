const InputField = ({
	label,
	name,
	type = 'text',
	required = false,
	value,
	onChange,
	placeholder,
}: {
	label: string;
	name: string;
	type?: string;
	required?: boolean;
	value: string | undefined;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}) => (
	<div>
		<label className="block text-sm font-medium text-gray-700">
			{label} {required && <span className="text-red-500">*</span>}
		</label>
		<input
			type={type}
			name={name}
			required={required}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="w-full mt-1 p-1 border-b border-gray-300 focus:border-b-2 focus:border-primary outline-none bg-transparent"
		/>
	</div>
);

const TextAreaField = ({
	label,
	name,
	value,
	onChange,
	rows = 3,
	placeholder,
}: {
	label: string;
	name: string;
	value: string | undefined;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	rows?: number;
	placeholder?: string;
}) => (
	<div>
		<label className="block text-sm font-medium text-gray-700">{label}</label>
		<textarea
			name={name}
			value={value}
			onChange={onChange}
			rows={rows}
			placeholder={placeholder}
			className="w-full mt-1 p-1 border-b border-gray-300 focus:border-b-2 focus:border-primary outline-none bg-transparent"
		/>
	</div>
);
