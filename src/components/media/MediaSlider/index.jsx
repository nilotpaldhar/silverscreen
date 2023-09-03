import PropTypes from 'prop-types';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import MediaCard from '@components/media/MediaCard';
import MediaSliderLoader from '@components/media/MediaSlider/MediaSliderLoader';

import cx from 'classnames';
import styles from './styles.module.scss';

import 'swiper/css';

/**
 * Render the MediaSlider component.
 *
 * @return {Element} The MediaSlider component.
 */
const MediaSlider = ({
	overflow,
	collection,
	breakpoints,
	spaceBetween,
	slidesPerView,
	loader: Loader,
	loaderProps,
	componentProps,
	component: Component,
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
				<Loader {...loaderProps} />
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
	overflow: false,
	spaceBetween: 10,
	slidesPerView: 1,
	componentProps: {},
	component: MediaCard,
	loaderProps: {},
	loader: MediaSliderLoader,
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
	overflow: PropTypes.bool,
	spaceBetween: PropTypes.number,
	slidesPerView: PropTypes.number,
	breakpoints: PropTypes.shape({}),
	loaderProps: PropTypes.shape({}),
	componentProps: PropTypes.shape({}),
	collection: PropTypes.arrayOf(PropTypes.shape({})),
	loader: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default MediaSlider;
