import { Facebook, Instagram, Twitter, Youtube } from '@icons';

/**
 * Retrive social icons by name.
 *
 * @param {string} name Icon name.
 *
 * @return {Element} Icon element.
 */
const getSocialIcons = (name = '') => {
	const SocialIconsMap = {
		facebook: Facebook,
		instagram: Instagram,
		twitter: Twitter,
		youtube: Youtube,
	};

	if (name in SocialIconsMap) {
		const IconComponent = SocialIconsMap[name];
		return IconComponent;
	}

	return null;
};

export default getSocialIcons;
