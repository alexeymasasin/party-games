export type GameCardProps = {
	title: string;
	description: string;
	playersRequired: number;
	bgColor: string;
	path: string;
};

export type RulesProps = {
	rules: string;
};

export type GameProps = {
	title: string;
};

export type OptionsProps = {
	text: string;
	icon: JSX.Element;
};
