import MainAdvantages from '../../components/main/Advantages';
import MainBanner from '../../components/main/Banner';
import MainIntroduction from '../../components/main/Introduction';

export default function MainPageView() {
	return (
		<main className="flex flex-col gap-10">
			<MainBanner />

			<MainIntroduction />

			<MainAdvantages />

			<div className='w-full h-[50dvh]'></div>
		</main>
	);
}
