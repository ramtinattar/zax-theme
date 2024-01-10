import SectionObserver from "../components/observer";
import AxSwiper from "../components/swiper-element";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "Styles/layout/theme.scss";
import "../components/obfuscations";

import Swiper, { Navigation, Pagination, Manipulation, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Manipulation, Autoplay])

window.Swiper = Swiper

customElements.get('swiper-component') || customElements.define('swiper-component', AxSwiper)
new SectionObserver('[data-ax-section]', 0)