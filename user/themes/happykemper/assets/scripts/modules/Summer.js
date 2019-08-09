import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

class Summer {
	constructor(){
        this.ocean = document.querySelector('.summer__animation-container');
        this.imgSequence = document.querySelectorAll('.summer__animation-container > img');

		this.animation();
	}

	animation() {
        const tl = new TimelineMax();
        const totalImg = this.imgSequence.length - 1;
        const height = this.imgSequence[0].offsetHeight * totalImg;
        const fps = 8;
        const totalPlayTime = totalImg / fps;

        tl.to('.summer__animation-container', totalPlayTime, {
                y: -height,
                ease: SteppedEase.config(totalImg)
        })

        .to('.logo', 6, {
                y: -300,
                delay: 5.9
        },0)
        
        .fromTo('#mask-path', 5, {
                y: -150
        },{
                y: 50,
                delay: 5.67
        },0)



        .add('end', totalPlayTime + 1)

        const controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
        triggerElement: '.summer',
        duration: totalPlayTime * 100,
        triggerHook: 0
        })
        .setTween(tl)
        .setPin('.summer__animation-container')
        .addTo(controller)

        
    }
    


	
}

export default Summer;
