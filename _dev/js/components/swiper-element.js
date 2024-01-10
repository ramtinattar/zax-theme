const AxSwiper = class extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('[id^="Swiper-"]')
    this.slides = this.querySelectorAll('.swiper-slide')
    this.sliderLength = this.slides.length
    this.prevButtonEl = this.querySelector(".swiper-button-prev")
    this.nextButtonEl = this.querySelector(".swiper-button-next")
    this.paginationEl = this.querySelector(".swiper-pagination")
    this.config = JSON.parse(this.slider.dataset.options)
    this.swiperInstance = null
    this.init()
  }

  init() {
    const {
      loop,
      effect,
      grabCursor,
      speed,
      slideInView,
      slidesToMove
    } = this.config

    this.swiperInstance = new window.Swiper(this.slider, {
      loop,
      effect,
      grabCursor,
      speed,
      pagination: {
        el: this.paginationEl
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          slidesPerGroup: 1,
          navigation: false
        },
        768: {
          slidesPerView: 2,
          navigation: false
        },
        1200: {
          slidesPerView: slideInView,
          slidesPerGroup: slidesToMove,
          navigation: {
            prevEl: this.prevButtonEl,
            nextEl: this.nextButtonEl
          }
        },
        2000: {
          slidesPerView: (slideInView === 4 || slideInView === 3) && this.sliderLength >= 5 ? slideInView + 1 : slideInView,
          slidesPerGroup: slidesToMove,
          navigation: {
            prevEl: this.prevButtonEl,
            nextEl: this.nextButtonEl
          }
        }
      }
    })
  }
}

export default AxSwiper;