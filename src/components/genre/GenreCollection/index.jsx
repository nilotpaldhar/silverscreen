import PropTypes from 'prop-types';
import { Button } from '@components/general';
import { GenreCard } from '@components/genre';
import { ArrowDown } from '@icons';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

/**
 * Render the GenreCollection component.
 *
 * @return {Element} The GenreCollection component.
 */
const GenreCollection = ({ type, steps, collection }) => {
	const itemsLength = collection?.length ?? 0;
	const [itemsToShow, setItemsToShow] = useState(itemsLength > steps ? steps : itemsLength);
	const [showMore, setShowMore] = useState(itemsLength > steps);

	/** Check show more state. */
	useEffect(() => {
		setShowMore(itemsLength > itemsToShow);
	}, [itemsToShow, itemsLength, steps]);

	/** Handle show more. */
	const handleShowMore = () => {
		setItemsToShow((prevVal) => {
			const nextVal = prevVal + steps;
			return itemsLength <= nextVal ? itemsLength : nextVal;
		});
	};

	return (
		<div className={styles.genre_collection}>
			<div className={styles.genre_collection_grid}>
				{collection?.slice(0, itemsToShow)?.map((item) => (
					<div key={item?.id} className={styles.genre_collection_item}>
						<GenreCard type={type} data={item} />
					</div>
				))}
			</div>
			{showMore && (
				<div className={styles.genre_collection_btn_wrapper}>
					<Button icon={<ArrowDown />} onClick={handleShowMore}>
						Load More
					</Button>
				</div>
			)}
		</div>
	);
};

/**
 * Default Props.
 */
GenreCollection.defaultProps = {
	type: 'movie',
	steps: 12,
	collection: [],
};

/**
 * Prop Types.
 */
GenreCollection.propTypes = {
	type: PropTypes.oneOf(['tv', 'movie']),
	steps: PropTypes.number,
	collection: PropTypes.arrayOf(PropTypes.shape({})),
};

export default GenreCollection;
