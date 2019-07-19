class PreviewSlider {
	constructor(options) {
		this.previewSectionSlider = document.querySelector('.preview-section__slider');
		this.previewSectionSlide = document.querySelectorAll('.preview-section__slide');
		this.activeSlide = 0;
		this.autoMove = this.autoMove.bind(this);
		this.timeLastMove = 0;
		this.speedAutoMove = options.speedAutoMove;

		this.arrowClick();
		if (this.autoMove) {
			requestAnimationFrame(this.autoMove);
		}
	}

	changeActiveSlide(number) {
		this.activeSlide += number;

		if (this.activeSlide > this.previewSectionSlide.length - 1) {
			this.activeSlide = 0;
		}

		if (this.activeSlide < 0) {
			this.activeSlide = this.previewSectionSlide.length - 1;
		}

		this.moveSlide();
	}

	moveSlide() {
		const x = this.previewSectionSlide[this.activeSlide].getBoundingClientRect().left - this.previewSectionSlider.getBoundingClientRect().left;
		this.previewSectionSlider.style.left = x * -1 + 'px';
		this.timeLastMove = performance.now();
	}

	arrowClick() {
		this.arrow = document.querySelectorAll('.arrow');

		for (let i = 0; i < this.arrow.length; i++) {
			this.arrow[i].addEventListener('click', e => {
				const { target } = e;
				if (target.classList.contains('arrow')) {
					if (target.classList.contains('arrow_left')) {
						this.changeActiveSlide(-1);
					} else {
						this.changeActiveSlide(1);
					}
				}
			});
		}
	}

	autoMove()
	{
		if (performance.now() - this.timeLastMove >= this.speedAutoMove) {
			this.changeActiveSlide(1);
		}

		requestAnimationFrame(this.autoMove);
	}
}

const previewSlider = new PreviewSlider({
	autoMove: true,
	speedAutoMove: 4000,
});




class Bouquet {
	constructor(options) {
		this.bouquetText = document.querySelector('.gallery__text');
		this.bouquet = document.querySelector('.bouquet');

		this.bouquetClick();
	}

	bouquetClick() {
		this.bouquetText.addEventListener('click', e => {
			setTimeout(() => {
				this.bouquet.classList.toggle('bouquet_hidden'); 
			}, 30);
		});
	}

}

const bouquet = new Bouquet({});


class Menu {
	constructor(options) {
		this.humburger = document.querySelector('.humburger');
		this.humburgerLine = document.querySelectorAll('.humburger__line');
		this.menu = document.querySelector('.menu');

		this.menuClick();
	}

	menuClick() {
		this.humburger.addEventListener('click', e => {

			if (this.menu.classList.contains('menu_hidden')) {
				setTimeout(() => {
					this.menu.classList.remove('menu_hidden');

					for (let i = 0; i < this.humburgerLine.length; i++) {
						this.humburgerLine[0].style.transform = 'rotate(50deg)';
						this.humburgerLine[0].style.top = '21px';
						this.humburgerLine[1].style.display = 'none';
						this.humburgerLine[2].style.transform = 'rotate(-50deg)';
						this.humburgerLine[0].style.top = '22px';
						this.humburgerLine[i].style.background = '#ffffff';
					}
				}, 30);
				
			} else {
				setTimeout(() => {
					this.menu.classList.add('menu_hidden');
					for (let i = 0; i < this.humburgerLine.length; i++) {
						this.humburgerLine[0].style.top = '0';
						this.humburgerLine[1].style.top = '11';
						this.humburgerLine[2].style.top = '22';
						this.humburgerLine[1].style.display = 'block';
						this.humburgerLine[i].style.transform = 'rotate(0deg)';
						this.humburgerLine[i].style.background = '#000000';
					}
				}, 30);
			}
		});
	}
}

const menu = new Menu({});

class GallerySlider {
	constructor(options) {
		this.gallerySlider = document.querySelector('.gallery-slider');
		this.gallerySlide = document.querySelectorAll('.gallery-slide');
		this.activeSlide = 0;
		this.autoMove = this.autoMove.bind(this);
		this.timeLastMove = 0;
		this.speedAutoMove = options.speedAutoMove;

		this.arrowClick();
		if (this.autoMove) {
			requestAnimationFrame(this.autoMove);
		}
	}

	changeActiveSlide(number) {
		this.activeSlide += number;

		if (this.activeSlide > this.gallerySlide.length - 1) {
			this.activeSlide = 0;
		}

		if (this.activeSlide < 0) {
			this.activeSlide = this.gallerySlide.length - 1;
		}

		this.moveSlide();
	}

	moveSlide() {
		const x = this.gallerySlide[this.activeSlide].getBoundingClientRect().left - this.gallerySlider.getBoundingClientRect().left;
		this.gallerySlider.style.left = x * -1 + 'px';
		this.timeLastMove = performance.now();
	}

	arrowClick() {
		this.arrow = document.querySelectorAll('.gallery-wrapper__arrow');

		for (let i = 0; i < this.arrow.length; i++) {
			this.arrow[i].addEventListener('click', e => {
				const { target } = e;
				if (target.classList.contains('gallery-wrapper__arrow')) {
					if (target.classList.contains('gallery-wrapper__arrow_left')) {
						this.changeActiveSlide(-1);
					} else {
						this.changeActiveSlide(1);
					}
				}
			});
		}
	}

	autoMove()
	{
		if (performance.now() - this.timeLastMove >= this.speedAutoMove) {
			this.changeActiveSlide(1);
		}

		requestAnimationFrame(this.autoMove);
	}
}

const gallerySlider = new GallerySlider({
	autoMove: false,
	speedAutoMove: 5000,
});