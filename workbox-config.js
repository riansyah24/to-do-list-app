module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{jpeg,css,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};