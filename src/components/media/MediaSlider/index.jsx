import { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MediaCard } from '@components/media';
import cx from 'classnames';
import styles from './styles.module.scss';
import 'swiper/css';

/**
 * Render the MediaSlider component.
 *
 * @return {Element} The MediaSlider component.
 */
const MediaSlider = ({
	collection,
	component: Component,
	componentProps,
	slidesPerView,
	spaceBetween,
	breakpoints,
	overflow,
	...props
}) => {
	/** Swiper Buttons State. */
	const [loading, setLoading] = useState(true);

	/** Swiper ClassNames. */
	const classNames = cx(styles.media_slider, {
		'!overflow-visible': overflow,
	});

	/** Handle Swiper Initialization. */
	const handleInit = () => {
		setLoading(false);
	};

	/** Swiper Config. */
	const swiperConf = {
		className: classNames,
		slidesPerView,
		spaceBetween,
		breakpoints,
		onInit: handleInit,
		...props,
	};

	return (
		<Swiper {...swiperConf}>
			{loading ? (
				<div className="flex items-center justify-center text-gray-300 py-14">Loading...</div>
			) : (
				<div>
					{collection?.map((item) => (
						<SwiperSlide key={item?.id}>
							<Component data={item} {...componentProps} />
						</SwiperSlide>
					))}
				</div>
			)}
		</Swiper>
	);
};

/**
 * Default Props.
 */
MediaSlider.defaultProps = {
	collection: [],
	component: MediaCard,
	componentProps: {},
	slidesPerView: 1,
	spaceBetween: 10,
	overflow: false,
	breakpoints: {
		340: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 16,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 16,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 16,
		},
		2000: {
			slidesPerView: 8,
			spaceBetween: 16,
		},
	},
};

/**
 * Prop Types.
 */
MediaSlider.propTypes = {
	collection: PropTypes.arrayOf(PropTypes.shape({})),
	component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	componentProps: PropTypes.shape({}),
	slidesPerView: PropTypes.number,
	spaceBetween: PropTypes.number,
	breakpoints: PropTypes.shape({}),
	overflow: PropTypes.bool,
};

export default MediaSlider;
