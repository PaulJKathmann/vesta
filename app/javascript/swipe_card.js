function addSwipePageListeners() {
    const reject_btn = document.getElementById('reject-btn');
    const accept_btn = document.getElementById('accept-btn');
    const swiper_card = document.getElementById('swiper_card');
    const home_btn = document.getElementById('home-btn');
    const image_swiper= document.getElementById('image-swiper');
    const btn_box= document.getElementById('buttons-box');
    const whole_swiper= document.getElementById('scroll-card');
    const white_shadow = document.getElementById('white_shadow');

    if (reject_btn) {
      reject_btn.addEventListener('click', (event) => {
        swiper_card.classList.add("rotateOutUpLeft");
      });
    }

    if (accept_btn) {
      accept_btn.addEventListener('click', (event) => {
        swiper_card.classList.add("rotateOutUpRight");
      });
    }

    if (whole_swiper) {
      whole_swiper.addEventListener('touchstart', (event) => {
        btn_box.classList.add("transparent-box");
        white_shadow.classList.remove("white-bottom-shadow");
      });

      whole_swiper.addEventListener('onscroll', (event) => {
        btn_box.classList.add("transparent-box");
        white_shadow.classList.remove("white-bottom-shadow");
      });

      whole_swiper.addEventListener('wheel', (event) => {
        btn_box.classList.add("transparent-box");
        white_shadow.classList.remove("white-bottom-shadow");
      });

      whole_swiper.addEventListener('ontouchmove', (event) => {
        btn_box.classList.add("transparent-box");
        white_shadow.classList.remove("white-bottom-shadow");
      });

      whole_swiper.addEventListener('ontouchend', (event) => {
        btn_box.classList.remove("transparent-box");
      });
    }
  }


export { addSwipePageListeners };
