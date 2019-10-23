class Video {
	constructor(){
		this.videos = document.querySelectorAll('.content__img-container > video');
		this.playAndPauseVideo();
		this.events();
	}

	events() {
		window.addEventListener('scroll', event => {
			this.playAndPauseVideo();
		})
	}

	playAndPauseVideo() {
		this.videos.forEach((video, index) => {
			this.isInViewport(video) ? video.play() : video.pause();
		})
	}

	isInViewport(elem) {
		let bounding = elem.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};
}

export default Video;
