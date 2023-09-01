import PropTypes from 'prop-types';
import MediaBlock from '@components/media/MediaBlock';
import isEmpty from 'lodash/isEmpty';
import styles from './styles.module.scss';

/**
 * Render the PersonalInfo component.
 *
 * @return {Element} The PersonalInfo component.
 */
const PersonalInfo = ({
	title,
	gender,
	birthday,
	deathday,
	age,
	placeOfBirth,
	department,
	aka,
}) => (
	<>
		<h2 className={styles.single_cast_tmpl_info_title}>{title}</h2>
		<div className={styles.single_cast_tmpl_info_wrapper}>
			<div className={styles.single_cast_tmpl_info_content}>
				<MediaBlock className="!gap-2">
					<MediaBlock.Header>KNOWN FOR</MediaBlock.Header>
					<MediaBlock.Body className="capitalize">{department || 'unknown'}</MediaBlock.Body>
				</MediaBlock>
				<MediaBlock className="!gap-2">
					<MediaBlock.Header>GENDER</MediaBlock.Header>
					<MediaBlock.Body className="capitalize">{gender || 'unknown'}</MediaBlock.Body>
				</MediaBlock>
				<MediaBlock className="!gap-2">
					<MediaBlock.Header>BIRTHDAY</MediaBlock.Header>
					<MediaBlock.Body>
						{birthday ? (
							<>
								<span>{birthday}</span>
								{!deathday && <span className="ml-1">&#40;{age} years old&#41;</span>}
							</>
						) : (
							<span>unknown</span>
						)}
					</MediaBlock.Body>
				</MediaBlock>
				{deathday && (
					<MediaBlock className="!gap-2">
						<MediaBlock.Header>DAY OF DEATH</MediaBlock.Header>
						<MediaBlock.Body>{deathday}</MediaBlock.Body>
					</MediaBlock>
				)}
				<MediaBlock className="!gap-2">
					<MediaBlock.Header>PLACE OF BIRTH</MediaBlock.Header>
					<MediaBlock.Body>{placeOfBirth || 'unknown'}</MediaBlock.Body>
				</MediaBlock>
			</div>
			{!isEmpty(aka) && (
				<MediaBlock className="!gap-2">
					<MediaBlock.Header>ALSO KNOWN AS</MediaBlock.Header>
					<MediaBlock.Body>
						<div className={styles.single_cast_tmpl_info_aka}>
							{aka?.map((name) => (
								<span key={name} className="block">
									{name}
								</span>
							))}
						</div>
					</MediaBlock.Body>
				</MediaBlock>
			)}
		</div>
	</>
);

/**
 * Default Props.
 */
PersonalInfo.defaultProps = {
	title: 'Personal Info:',
	gender: null,
	birthday: null,
	deathday: null,
	age: null,
	placeOfBirth: null,
	department: null,
	aka: [],
};

/**
 * Prop Types.
 */
PersonalInfo.propTypes = {
	title: PropTypes.node,
	gender: PropTypes.string,
	birthday: PropTypes.string,
	deathday: PropTypes.string,
	age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	placeOfBirth: PropTypes.string,
	department: PropTypes.string,
	aka: PropTypes.arrayOf(PropTypes.string),
};

export default PersonalInfo;
