import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SongCard from '../SongCard/SongCard';
import 'swiper/css';
import 'swiper/css/navigation';

const SongCarousel = ({ items }) => {

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

                <SwiperSlide><SongCard
                    key={item.id}
                    imageUrl={item.image}
                    name={item.title}
                    likes={item.likes}
                />
                </SwiperSlide>

            ))}
        </Swiper>
    )
}
export default SongCarousel;