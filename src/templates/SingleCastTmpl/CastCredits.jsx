import PropTypes from 'prop-types';
import { LIST_OF_DEPARTMENTS } from '@constants';

import Credit from '@components/cast/Credit';

import { v4 as uuid } from 'uuid';
import isEmpty from 'lodash/isEmpty';

import styles from './styles.module.scss';

/**
 * Render the CastCredits component.
 *
 * @return {Element} The CastCredits component.
 */
const CastCredits = ({ credits }) => {
	const departments = [{ acting: 'acting' }, ...LIST_OF_DEPARTMENTS];

	return (
		<div className={styles.single_cast_tmpl_cast_credits}>
			{departments.map((dept) => {
				const key = Object.keys(dept)[0];
				const title = Object.values(dept)[0];
				const collection = credits[key] ?? [];

				return !isEmpty(collection) ? (
					<section key={key}>
						<Credit>
							<Credit.Title as="h2">{title}</Credit.Title>
							<Credit.List>
								{collection?.map((credit, index) => {
									const id = credit.id + uuid();
									const prevReleaseYear = collection[index - 1]?.releaseYear;
									const showDivider = prevReleaseYear !== credit?.releaseYear;

									return (
										<div key={id}>
											{prevReleaseYear && showDivider && <Credit.Divider className="my-3" />}
											<Credit.Item data={credit} department={credit?.job ? 'other' : 'acting'} />
										</div>
									);
								})}
							</Credit.List>
						</Credit>
					</section>
				) : null;
			})}
		</div>
	);
};

/**
 * Default Props.
 */
CastCredits.defaultProps = {
	credits: {},
};

/**
 * Prop Types.
 */
CastCredits.propTypes = {
	credits: PropTypes.shape({}),
};

export default CastCredits;
