import ImageLoader from '../ImageLoader';
import LiquidityImage from '../../assets/main/liquidity.png';
import ProfessionalityImage from '../../assets/main/professionality.png';
import TransparencyImage from '../../assets/main/transparency.png';

interface AdvantageItem {
	image: string;
	title: string;
	desc: string;
}

const advantageList: Array<AdvantageItem> = [
	{
		image: LiquidityImage,
		title: '',
		desc: '',
	},
	{
		image: ProfessionalityImage,
		title: '',
		desc: '',
	},
	{
		image: TransparencyImage,
		title: '',
		desc: '',
	},
];

const AdvantageItem = ({ image, title, desc }: AdvantageItem) => {
	return (
		<div>
			<ImageLoader
				className="w-full object-cover min-h-[75px] md:h-[120px]"
				src={image}
			/>
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	);
};

export default function MainAdvantages() {
	return (
		<section className="w-full flex flex-col items-center justify-center md:flex-row px-[3rem] bg-[#0000000a]">
			{advantageList.map((data) => (
				<AdvantageItem
					image={data.image}
					title={data.title}
					desc={data.desc}
				/>
			))}
		</section>
	);
}
