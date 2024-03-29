interface IProps {
	text: string;
	onClick: () => void;
	size?: 'small' | 'big';
}

export default function ColorButton({ text, onClick, size = 'small' }: IProps) {
	return (
		<div
			className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 
		${size === 'big' ? 'p-[0.3rem' : 'p-[0.2rem]'}
		`}>
			<button
				className={`bg-white rounded-sm text-base hover:opacity-90 transition-opacity
				${size === 'big' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base'}`}
				onClick={onClick}>
				{text}
			</button>
		</div>
	);
}
