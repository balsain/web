export type Locale = 'en' | 'es';

export const almena = {
	name: 'Almena',
	url: 'https://almena.network/',
} as const;

export const messages = {
	en: {
		meta: {
			title: 'balsain — Studio',
			description:
				'balsain is a product studio working on decentralised systems and AI agents. Currently building Almena.',
		},
		brand: 'balsain',
		tagline: 'Product studio. Decentralised systems and AI agents.',
		lede:
			'Built on years of cloud and platform engineering — that background shapes how we work, not what we work on.',
		productTitle: 'Product',
		productBefore: 'Currently building ',
		productAfter: '.',
		focusTitle: 'Areas of work',
		focus: [
			'Decentralised architectures and protocols',
			'AI agents and automation',
			'Own product from design to operation',
		],
		contact: 'info@balsain.io',
		contactHref: 'mailto:info@balsain.io',
		langLabel: 'Language',
	},
	es: {
		meta: {
			title: 'balsain — Studio',
			description:
				'balsain es un studio de producto que trabaja en sistemas descentralizados y agentes de IA. Actualmente desarrollando Almena.',
		},
		brand: 'balsain',
		tagline: 'Studio de producto. Sistemas descentralizados y agentes de IA.',
		lede:
			'Con años de ingeniería cloud y plataforma detrás — ese trasfondo define cómo trabajamos, no a qué nos dedicamos.',
		productTitle: 'Producto',
		productBefore: 'Ahora mismo construyendo ',
		productAfter: '.',
		focusTitle: 'Áreas de trabajo',
		focus: [
			'Arquitecturas y protocolos descentralizados',
			'Agentes de IA y automatización',
			'Producto propio, del diseño a la operación',
		],
		contact: 'info@balsain.io',
		contactHref: 'mailto:info@balsain.io',
		langLabel: 'Idioma',
	},
} as const;

export function t(locale: string | undefined) {
	const key = locale === 'es' ? 'es' : 'en';
	return messages[key];
}
