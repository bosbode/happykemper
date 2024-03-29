class Animations {
	constructor(){
		this.contentTitle = document.querySelectorAll('.content__bodytext > h1');
		this.bubbles = document.querySelector('.animation__bubbles');
		this.fireContainer = document.querySelector('.animation__fire');
		this.tentaclesContainer = document.querySelectorAll('.animation__octopus-tentacles');
		this.octopusHeadContainer = document.querySelectorAll('.animation__octopus-head');
		this.smokeContainer = document.querySelectorAll('.animation__smoke');
		this.birdContainer = document.querySelector('.animation__bird');
		this.octopusTentacles = document.querySelector('#octopus-tentacle-group');
		this.octopusHead = document.querySelector('#octopus-head-group');
		this.fire = document.querySelector('#fire-group');
		this.smoke = document.querySelector('#smoke-group');
		this.birdTree = document.querySelector('#tree-top');
		this.icon = document.querySelectorAll('.site-header__icon');
		this.treeShade = document.querySelectorAll('.tree-shade');
		this.tree = document.querySelectorAll('.tree');
		this.fish = document.querySelector('#fish-group');
		this.sun = document.querySelector('#sun');
		this.night = document.querySelector('#night');
		this.contentClass = document.querySelectorAll('.content');
		this.siteHeader = document.querySelectorAll('.site-header');
		
		this.valuePlayButton = document.querySelectorAll('.btn__play--values');
		
		this.popup = document.querySelectorAll('.animation__value-01-pop-up');
		this.popupGroup = document.querySelector('#pop-up-group');
		this.popupLove = document.querySelector('#pop-up-love');
		this.popupItem = document.querySelectorAll('.animation__value-01-pop-up-item');

		this.valueTwoHearts = document.querySelectorAll('.animation__value-02-hearts');
		this.valueTwoWindow = document.querySelectorAll('.animation__value-02-window');
		this.valueTwoWebsite = document.querySelectorAll('.animation__value-02-website');
		this.valueTwoCmsText = document.querySelectorAll('.animation__value-02-cms-text');
		this.valueTwoCmsImage = document.querySelectorAll('.animation__value-02-cms-image');
		this.valueTwoCmsButton = document.querySelector('.animation__value-02-cms-btn');

		this.valueThreeBrowsers = document.querySelectorAll('.animation__value-03-browsers');
		this.valueThreeBrowserText = document.querySelectorAll('.animation__value-03-browser-text');
		this.valueThreeBolts = document.querySelectorAll('.animation__value-03-bolts');
		this.valueThreeMainBrowser = document.querySelector('.animation__value-03-main-browser');
		this.valueThreeMainBolt = document.querySelector('.animation__value-03-main-bolt');
		this.valueThreeWebsite = document.querySelector('.animation__value-03-website');

		this.treeClicked = false;
		
		this.initialize();
	}

	initialize() {
		if(this.bubbles && this.sun && this.fireContainer && this.birdTree && this.valuePlayButton) {
			this.events();
		}
	}

	events() {
		this.bubbles.addEventListener('click', this.animateFish.bind(this));
		this.sun.addEventListener('click', this.nightMode.bind(this));
		this.fireContainer.addEventListener('click', this.animateSmoke.bind(this));
		this.birdTree.addEventListener('click', this.flyBird.bind(this));
		this.valuePlayButton[0].addEventListener('click', this.valueOne.bind(this));
		this.valuePlayButton[1].addEventListener('click', this.valueTwo.bind(this));
		this.valuePlayButton[2].addEventListener('click', this.valueThree.bind(this));
	}

	animateFish() {
		// Hide bubbles
		this.addOrRemoveClass(this.bubbles, 'animation--hide', 'add');

		// Undo hide bubbles after 2400 milliseconds
		setTimeout(() => {
			this.addOrRemoveClass(this.bubbles, 'animation--hide', 'remove');
		}, 1400);

		// Play fish animation
		this.addOrRemoveClass(this.fish, 'fish-group--play-animation', 'add');
		
		// Remove fish animation so it can play again
		setTimeout(() => {
			this.addOrRemoveClass(this.fish, 'fish-group--play-animation', 'remove');
		}, 1200);
	}

	animateSmoke() {
		// If fire is visable, hide fire and show smoke
		// Else show fire and stop smoke animation
		if(!this.fire.classList.contains('fire-group--hidden')){
			this.addOrRemoveClass(this.fire, 'fire-group--hidden', 'add');
			this.addOrRemoveClass(this.smoke, 'smoke-group--play-animation', 'add');
		} else {
			this.addOrRemoveClass(this.fire, 'fire-group--hidden', 'remove');
			this.addOrRemoveClass(this.smoke, 'smoke-group--play-animation', 'remove');
		}
	}
	
	flyBird() {
		if (!this.treeClicked) {
			// Show bird container and append animation, remove tree shake animation
			this.addOrRemoveClass(this.birdContainer, 'animation--show', 'add');
			this.addOrRemoveClass(this.birdContainer, 'animation__bird-animate', 'add');
			this.addOrRemoveClass(this.birdTree, 'animation__tree', 'remove');
	
			// Hide bird container after animation is ended
			this.addListenerMulti(this.birdContainer, 'webkitAnimationEnd animationend', () => this.addOrRemoveClass(this.birdContainer, 'animation--show', 'remove'));

			this.treeClicked = true;
		}
	}

	nightMode() {
		// Shows and appends tentacle animation
		this.addOrRemoveClass(this.octopusTentacles, 'octopus-tentacles-group--play-animation', 'add');
		this.addOrRemoveClass(this.octopusHead, 'octopus-head-group--play-animation', 'add');
		
		// Show moon, stars and tentacles
		this.addOrRemoveClass([this.tentaclesContainer, this.octopusHeadContainer, this.night], 'animation--show', 'add');
		
		// Hide bubbles and sun
		this.addOrRemoveClass([this.bubbles, this.sun], 'animation--hide', 'add');
		
		// Swap tree colors so the shade is on the correct side
		this.addOrRemoveClass(this.treeShade, 'tree-shade--white', 'add');
		this.addOrRemoveClass(this.tree, 'tree--blue', 'add');

		// Inverts the colors so it looks like this these items are unaffected by the night swap
		this.addOrRemoveClass([this.contentClass, this.contentTitle, this.siteHeader, this.fireContainer, this.icon], 'content--invert', 'add');

		// Undo all above changes after 2.5 seconds
		setTimeout(() =>  {
			this.addOrRemoveClass(this.octopusTentacles, 'octopus-tentacles-group--play-animation', 'remove');
			this.addOrRemoveClass(this.octopusHead, 'octopus-head-group--play-animation', 'remove');
			
			this.addOrRemoveClass([this.tentaclesContainer, this.octopusHeadContainer, this.night], 'animation--show', 'remove');
			
			this.addOrRemoveClass([this.bubbles, this.sun], 'animation--hide', 'remove');
			
			this.addOrRemoveClass(this.treeShade, 'tree-shade--white', 'remove');
			this.addOrRemoveClass(this.tree, 'tree--blue', 'remove');

			this.addOrRemoveClass([this.contentClass, this.contentTitle, this.siteHeader, this.fireContainer, this.icon], 'content--invert', 'remove');
		}, 2500);
	}

	valueOne() {
		let animationDelayTotal = 2.2;
		const animationDelayDeduct = 0.2;

		this.addOrRemoveClass(this.valuePlayButton[0], 'animation--hide', 'add');

		this.addOrRemoveClass(this.popupLove, 'animation__value-01-pop-up--play-animation', 'add');
		this.popupLove.style.animationDelay = `${ animationDelayTotal }s`;
		animationDelayTotal -= animationDelayDeduct;
		
		this.addOrRemoveClass(this.popupGroup, 'animation__value-01-pop-up--play-animation', 'add');
		this.popupGroup.style.animationDelay = `${ animationDelayTotal }s`;
		animationDelayTotal -= animationDelayDeduct;
		
		this.addOrRemoveClass(this.popup, 'animation__value-01-pop-up--play-animation', 'add');
		this.popup.forEach(item => {
			item.style.animationDelay = `${ animationDelayTotal }s`;
			animationDelayTotal -= animationDelayDeduct;
		})

		this.addListenerMulti(this.popupLove, 'webkitAnimationEnd animationend', this.resetValueOne.bind(this));
	}

	resetValueOne() {
		setTimeout(() => {
			this.addOrRemoveClass(this.popupLove, 'animation__value-01-pop-up--play-animation', 'remove');
			this.addOrRemoveClass(this.popupGroup, 'animation__value-01-pop-up--play-animation', 'remove');
			this.addOrRemoveClass(this.popup, 'animation__value-01-pop-up--play-animation', 'remove');
			this.addOrRemoveClass(this.valuePlayButton[0], 'animation--hide', 'remove');
		}, 1000);
	}

	valueTwo() {
		this.addOrRemoveClass(this.valuePlayButton[1], 'animation--hide', 'add');
		
		this.addOrRemoveClass(this.valueTwoCmsButton, 'animation__value-02-cms-btn--play-animation', 'add');

		this.addListenerMulti(this.valueTwoCmsButton, 'webkitAnimationEnd animationend', () => {
			let animationDelayTotal = 2.3;
			const animationDelayDeduct = 0.1;

			this.addOrRemoveClass(this.valueTwoCmsText, 'animation--hide', 'add');

			this.addOrRemoveClass(this.valueTwoCmsImage, 'animation--hide', 'add');
			this.addOrRemoveClass(this.valueTwoCmsButton, 'animation__value-02-cms-btn--play-animation', 'remove');
			this.addOrRemoveClass(this.valueTwoCmsButton, 'animation--hide', 'add');
			
			this.addOrRemoveClass(this.valueTwoWebsite, 'animation__value-02-website--play-animation', 'add');
			
			this.addOrRemoveClass(this.valueTwoWindow, 'animation__value-02-window--play-animation', 'add');

			this.addOrRemoveClass(this.valueTwoHearts, 'animation__value-02-hearts--play-animation', 'add');
			this.valueTwoHearts.forEach((item, index, arr) => {
				item.style.animationDelay = `${ animationDelayTotal }s`;
				animationDelayTotal += animationDelayDeduct;
				
				if (Object.is(arr.length - 1, index)) {
					this.addListenerMulti(item, 'webkitAnimationEnd animationend', this.resetValueTwo.bind(this));
				}
			})	
		})
	}

	resetValueTwo() {
		setTimeout(() => {
			this.addOrRemoveClass(this.valueTwoCmsText, 'animation--hide', 'remove');
			this.addOrRemoveClass(this.valueTwoCmsButton, 'animation--hide', 'remove');
			this.addOrRemoveClass(this.valueTwoCmsImage, 'animation--hide', 'remove');
			this.addOrRemoveClass(this.valueTwoWebsite, 'animation__value-02-website--play-animation', 'remove');
			this.addOrRemoveClass(this.valueTwoWindow, 'animation__value-02-window--play-animation', 'remove');
			this.addOrRemoveClass(this.valueTwoHearts, 'animation__value-02-hearts--play-animation', 'remove');
			this.addOrRemoveClass(this.valuePlayButton[1], 'animation--hide', 'remove');
		}, 1000);
	}

	valueThree() {
		let animationDelayTotal = 0;
		const animationDelay = 0.2;

		this.addOrRemoveClass(this.valuePlayButton[2], 'animation--hide', 'add');

		this.addOrRemoveClass(this.valueThreeBrowsers, 'animation__value-03-browsers--play-animation', 'add');
		this.addOrRemoveClass(this.valueThreeBolts, 'animation__value-03-bolts--play-animation', 'add');
		this.valueThreeBrowsers.forEach(item => {
			item.style.animationDelay = `${ animationDelayTotal }s`;
			animationDelayTotal += animationDelay;
		})

		this.addOrRemoveClass(this.valueThreeMainBrowser, 'animation__value-03-main-browser--play-animation', 'add');
		
		this.addListenerMulti(this.valueThreeMainBrowser, 'webkitAnimationEnd animationend', () => {
			this.addOrRemoveClass(this.valueThreeMainBolt, 'animation__value-03-main-bolt--play-animation', 'add');
		})

		this.addListenerMulti(this.valueThreeMainBolt, 'webkitAnimationEnd animationend', () => {
			this.addOrRemoveClass(this.valueThreeWebsite, 'animation__value-03-website--play-animation', 'add');
		})

		this.addListenerMulti(this.valueThreeBolts[0], 'webkitAnimationEnd animationend', this.resetValueThree.bind(this));
	}

	resetValueThree() {
		this.addOrRemoveClass(this.valueThreeBrowsers, 'animation__value-03-browsers--play-animation', 'remove');
		this.addOrRemoveClass(this.valueThreeBolts, 'animation__value-03-bolts--play-animation', 'remove');
		this.addOrRemoveClass(this.valueThreeMainBolt, 'animation__value-03-main-bolt--play-animation', 'remove');
		this.addOrRemoveClass(this.valueThreeWebsite, 'animation__value-03-website--play-animation', 'remove');
		this.addOrRemoveClass(this.valueThreeMainBrowser, 'animation__value-03-main-browser--play-animation', 'remove');
		this.addOrRemoveClass(this.valuePlayButton[2], 'animation--hide', 'remove');
	}

	addListenerMulti(selector, events, cb) {
		events.split(' ').forEach(event => selector.addEventListener(event, cb, false));
	}

	addOrRemoveClass(selector, className, specifier) {
		// Check if selector is an array
		if(Array.isArray(selector)) {
			// Loop through array
			selector.forEach(item => {
				// Check if each item in array is a nodelist
				if(NodeList.prototype.isPrototypeOf(item)) {
					// Check if specifier is add or remove
					if(specifier === 'add') {
						// Loop through nodelist and add or remove classname
						item.forEach(element => {
							element.classList.add(className);
						})
					} else if (specifier === 'remove') {
						item.forEach(element => {
							element.classList.remove(className);
						})
					} else {
						console.log('Specifier must be add or remove. Current: ' + specifier);
					}
				// If selector is not a nodelist, add or remove classname directly to selector	
				} else {
					if(specifier === 'add') {
						item.classList.add(className);
					} else if (specifier === 'remove') {
						item.classList.remove(className);
					} else {
						console.log('Specifier must be add or remove. Current: ' + specifier);
					}
				}
			})
		// If selector is not an array, check if it's a nodelist
		} else if(NodeList.prototype.isPrototypeOf(selector)){
			// Check if specifier is add or remove
			if(specifier === 'add') {
				// Loop through nodelist and add or remove classname
				selector.forEach(element => {
					element.classList.add(className);
				})
			} else if (specifier === 'remove') {
				selector.forEach(element => {
					element.classList.remove(className);
				})
			} else {
				console.log('Specifier must be add or remove. Current: ' + specifier);
			}
		// If selector is not a nodelist, add or remove classname directly to selector	
		} else {
			if(specifier === 'add') {
				selector.classList.add(className);
			} else if (specifier === 'remove') {
				selector.classList.remove(className);
			} else {
				console.log('Specifier must be add or remove. Current: ' + specifier);
			}
		}
	}
}

export default Animations;
