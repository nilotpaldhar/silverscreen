/* eslint-disable react/no-array-index-key */

import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import cx from 'classnames';
import styles from './styles.module.scss';

/**
 * Render the Tabs component.
 *
 * @return {Element} The Tabs component.
 */
const Tabs = ({ items, prepend, append, className, headerClassName, bodyClassName, ...props }) => {
	/** Get tab labels & content. */
	const labels = items?.map((item) => item?.label);
	const contents = items?.map((item) => item?.content);

	/** ClassNames. */
	const classNames = cx(styles.tabs, className);
	const headerClassNames = cx(styles.tabs_header, headerClassName);
	const bodyClassNames = cx(styles.tabs_body, bodyClassName);

	return (
		<Tab.Group as="div" className={classNames} {...props}>
			<Tab.List className={headerClassNames}>
				{prepend}
				<div className={styles.tabs_label_wrapper}>
					{labels?.map((label, idx) => (
						<Tab as={Fragment} key={idx}>
							{({ selected }) => (
								<button
									type="button"
									className={cx(styles.tabs_label, {
										[styles.active]: selected,
									})}
								>
									{label}
								</button>
							)}
						</Tab>
					))}
				</div>
				{append}
			</Tab.List>
			<Tab.Panels className={bodyClassNames}>
				{contents?.map((content, idx) => (
					<Tab.Panel as="div" key={idx} className={styles.tabs_content}>
						{content}
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	);
};

/**
 * Default Props.
 */
Tabs.defaultProps = {
	items: [],
	prepend: null,
	append: null,
	className: '',
	headerClassName: '',
	bodyClassName: '',
};

/**
 * Prop Types.
 */
Tabs.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.node,
			content: PropTypes.node,
		})
	),
	prepend: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(null)]),
	append: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(null)]),
	className: PropTypes.string,
	headerClassName: PropTypes.string,
	bodyClassName: PropTypes.string,
};

export default Tabs;
