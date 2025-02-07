import { useTranslation } from 'react-i18next';
import IntroImage from '../../assets/main/intro.jpg';
import ImageLoader from '../ImageLoader';

export default function MainIntroduction() {
	const { t } = useTranslation();

	return (
		<section className="flex px-[3rem] max-lg:flex-col-reverse gap-[50px] md:gap-[100px] max-lg:items-center justify-center">
			<div className="flex gap-4 md:gap-8 flex-col justify-between max-w-[500px]">
				<h1>{t('home-introduction-title')}</h1>
				<p className='text-justify'>{t('home-introduction-desc')}</p>
			</div>
			<ImageLoader
				className="w-fit self-center rounded-xl object-contain h-[150px] md:h-[250px]"
				src={IntroImage}
			/>
		</section>
	);
}
