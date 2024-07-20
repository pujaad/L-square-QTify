import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import AlbumCard from '../Card/Card';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = ({ items }) => {

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

        >
            {items.map((item) => (

                <SwiperSlide><AlbumCard
                    key={item.id}
                    imageUrl={item.image}
                    name={item.title}
                    follows={item.follows}
                />
                </SwiperSlide>

            ))}
        </Swiper>
    )
}
export default Carousel;