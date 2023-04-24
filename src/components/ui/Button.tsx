interface IProps {
	text: string;
	onClick: () => void;
	crimson?: boolean;
}

export default function Button({ text, onClick, crimson }: IProps) {
	return (
		<button
			className={`border-none rounded-md py-2 px-8 text-white font-bold leading-4 ${
				crimson ? 'bg-red-500' : 'bg-sky-500'
			}`}>
			{text}
		</button>
	);
}
