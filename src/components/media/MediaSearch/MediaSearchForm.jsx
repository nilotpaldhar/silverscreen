/* eslint-disable jsx-a11y/label-has-associated-control */

import { useRouter } from 'next/router';
import { useId } from 'react';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '@components/general';
import { Search, Close } from '@icons';
import cx from 'classnames';
import { isEmpty } from 'lodash';
import styles from './styles.module.scss';

/**
 * Render the MediaSearchForm component.
 *
 * @return {Element} The MediaSearchForm component.
 */
const MediaSearchForm = ({
	open,
	searchTerm,
	getLabelProps,
	getInputProps,
	onInputChange,
	onReset,
}) => {
	const router = useRouter();
	const inputId = useId();

	/** Reset Button ClassNames. */
	const resetBtnClassNames = cx(styles.btn_reset, {
		[styles.visible]: open,
	});

	/** Handle Submit. */
	const handleSubmit = (_evt) => {
		_evt.preventDefault();
		if (!isEmpty(searchTerm)) {
			router.push({ pathname: '/search', query: { term: searchTerm } });
			onReset();
		}
	};

	/** Label Props. */
	const labelProps = getLabelProps({ htmlFor: inputId });

	/** Input Props. */
	const inputProps = getInputProps({
		id: inputId,
		onChange: onInputChange,
		placeholder: 'Search for movies and tv shows...',
	});

	return (
		<div className={styles.media_search_form}>
			<form onSubmit={handleSubmit}>
				<button type="submit" className={styles.btn_search}>
					<Search />
					<VisuallyHidden>Search</VisuallyHidden>
				</button>
				<label {...labelProps} className={styles.input_label}>
					<VisuallyHidden>Search for movies and tv shows</VisuallyHidden>
					<input {...inputProps} className={styles.input_search} />
				</label>
				<button type="button" className={resetBtnClassNames} onClick={onReset}>
					<Close />
					<VisuallyHidden>Close Search</VisuallyHidden>
				</button>
			</form>
		</div>
	);
};

/**
 * Default Props.
 */
MediaSearchForm.defaultProps = {
	open: false,
	searchTerm: '',
	onReset: () => {},
	getLabelProps: () => {},
	getInputProps: () => {},
	onInputChange: () => {},
};

/**
 * Prop Types.
 */
MediaSearchForm.propTypes = {
	open: PropTypes.bool,
	onReset: PropTypes.func,
	searchTerm: PropTypes.string,
	getLabelProps: PropTypes.func,
	getInputProps: PropTypes.func,
	onInputChange: PropTypes.func,
};

export default MediaSearchForm;
