import PropTypes from 'prop-types';

import Seo from '@components/general/Seo';
import Container from '@components/general/Container';
import BlurImage from '@components/general/BlurImage';
import MediaBlock from '@components/media/MediaBlock';
import MediaSlider from '@components/media/MediaSlider';

import PersonalInfo from '@templates/SingleCastTmpl/PersonalInfo';
import CastCredits from '@templates/SingleCastTmpl/CastCredits';
import SocialIds from '@templates/SingleCastTmpl/SocialIds';

import isEmpty from 'lodash/isEmpty';
import styles from './styles.module.scss';

/**
 * Render the SingleCastTmpl component.
 *
 * @return {Element} The SingleCastTmpl component.
 */
const SingleCastTmpl = ({ cast }) => {
	const seoTitle = cast?.name;
	const seoDesc = cast?.biography;

	/** Seo Config. */
	const seoConf = {
		title: seoTitle,
		metaDesc: seoDesc,
		opengraphTitle: seoTitle,
		opengraphImages: [
			{
				url: cast?.avatar,
				width: 420,
				height: 632,
				alt: seoTitle,
				type: 'image/jpg',
			},
		],
		opengraphDescription: seoDesc,
	};

	/** Cast name */
	const castName = <h1 className={styles.single_cast_tmpl_cast_name}>{cast?.name}</h1>;

	/** Media slider config. */
	const sliderConf = {
		spaceBetween: 10,
		slidesPerView: 1.3,
		breakpoints: {
			320: {
				slidesPerView: 2.3,
				spaceBetween: 10,
			},
			420: {
				slidesPerView: 3.3,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 4.3,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 4.3,
				spaceBetween: 16,
			},
			1200: {
				slidesPerView: 5.3,
				spaceBetween: 16,
			},
		},
	};

	return (
		<>
			<Seo {...seoConf} />
			<main className={styles.single_cast_tmpl}>
				<Container fluidLarge={false}>
					<div className={styles.single_cast_tmpl_wrapper}>
						<div className={styles.single_cast_tmpl_wrapper_col_left}>
							<section>
								<div className={styles.single_cast_tmpl_avatar_wrapper}>
									<figure className={styles.single_cast_tmpl_avatar_img}>
										<BlurImage
											priority
											layout="fill"
											src={cast?.avatar}
											alt={cast?.name}
											objectFit="cover"
											objectPosition="center"
										/>
									</figure>
									<div className={styles.single_cast_tmpl_avatar_social_ids_wrapper}>
										<SocialIds ids={cast?.socialIds} />
									</div>
									<div className={styles.single_cast_tmpl_avatar_overlay} />
								</div>
							</section>
							<section className="mt-6">
								<div className="mb-6 lg:hidden">{castName}</div>
								<PersonalInfo
									age={cast?.age}
									aka={cast?.aka}
									gender={cast?.gender}
									birthday={cast?.birthday}
									deathday={cast?.deathday}
									placeOfBirth={cast?.placeOfBirth}
									department={cast?.knownForDepartment}
								/>
							</section>
						</div>
						<div className={styles.single_cast_tmpl_wrapper_col_right}>
							<div className="hidden mb-8 lg:block">{castName}</div>
							{cast?.biography && (
								<section>
									<MediaBlock>
										<MediaBlock.Header>BIOGRAPHY</MediaBlock.Header>
										<MediaBlock.Body>
											{/* eslint-disable-next-line react/no-danger */}
											<div dangerouslySetInnerHTML={{ __html: cast?.biography }} />
										</MediaBlock.Body>
									</MediaBlock>
								</section>
							)}
							{!isEmpty(cast?.popular?.movies) && (
								<section className="mt-12">
									<MediaBlock>
										<MediaBlock.Header>POPULAR MOVIES</MediaBlock.Header>
										<MediaBlock.Body>
											<div className="overflow-hidden">
												<MediaSlider
													{...sliderConf}
													collection={cast?.popular?.movies}
													componentProps={{ type: 'movie', hrefPrefix: `movie` }}
												/>
											</div>
										</MediaBlock.Body>
									</MediaBlock>
								</section>
							)}
							{!isEmpty(cast?.popular?.tv) && (
								<section className="mt-12">
									<MediaBlock>
										<MediaBlock.Header>TV SHOWS APPEARANCE</MediaBlock.Header>
										<MediaBlock.Body>
											<div className="overflow-hidden">
												<MediaSlider
													{...sliderConf}
													collection={cast?.popular?.tv}
													componentProps={{ type: 'tv', hrefPrefix: `tv` }}
												/>
											</div>
										</MediaBlock.Body>
									</MediaBlock>
								</section>
							)}
							<CastCredits credits={cast?.knownFor} />
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

/**
 * Default Props.
 */
SingleCastTmpl.defaultProps = {
	cast: {},
};

/**
 * Prop Types.
 */
SingleCastTmpl.propTypes = {
	cast: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		birthday: PropTypes.string,
		deathday: PropTypes.string,
		aka: PropTypes.arrayOf(PropTypes.string),
		age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		biography: PropTypes.string,
		popularity: PropTypes.number,
		placeOfBirth: PropTypes.string,
		gender: PropTypes.string,
		avatar: PropTypes.string,
		socialIds: PropTypes.shape({}),
		knownForDepartment: PropTypes.string,
		knownFor: PropTypes.shape({}),
		popular: PropTypes.shape({
			tv: PropTypes.arrayOf(PropTypes.shape({})),
			movies: PropTypes.arrayOf(PropTypes.shape({})),
		}),
	}),
};

export default SingleCastTmpl;
