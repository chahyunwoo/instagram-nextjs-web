import dynamic from 'next/dynamic';

const GridLoader = dynamic(
	() => import('react-spinners').then((lib) => lib.GridLoader),
	{
		ssr: false,
	}
);

interface IProps {
	color?: string;
}

export default function GridSpinner({ color = 'crimson' }: IProps) {
	return <GridLoader color={color} />;
}
