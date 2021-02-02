import browserUpdate from 'browser-update';

class OutdatedBrowser {
	constructor(){
		this.initialize();
	}

	initialize() {
		browserUpdate({
			required: {
				e:79,
				f:67,
				o:59,
				s:7,
				c:72
			},
			reminder: 24,
			style: 'top',
			l: 'nl',
			container: document.querySelector('.body-text'),
			test: false
		})
	}
}

export default OutdatedBrowser;
