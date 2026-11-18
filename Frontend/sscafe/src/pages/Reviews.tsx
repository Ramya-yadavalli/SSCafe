
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Reviews.css";

interface Review {
  id: number;
  name: string;
  image: string;
  review: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "John Deo",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rerum Optio Quasi Ut, Illo Ipsam Assumenda.",
  },
  {
    id: 2,
    name: "John Deo",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eius Asperiores Aliquam Hic Quis! Eligendi, Adipisci.",
  },
  {
    id: 3,
    name: "Sarah Smith",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The coffee here is absolutely amazing! The taste, aroma and atmosphere make it my favorite place to relax.",
  },
  {
    id: 4,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "A wonderful place with delicious coffee and a comfortable atmosphere. Highly recommended!",
  },
];

function Reviews() {
  return (
    <section className="reviews-section" id="review">

      {/* SECTION HEADING */}
      <div className="reviews-heading">

        <h1 className="reviews-outline">
          REVIEWS
        </h1>

        <h2 className="reviews-subtitle">
          What People Says
        </h2>

      </div>

      {/* REVIEW SLIDER */}
      <Swiper
        className="reviews-slider"
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={20}
        loop={true}
        speed={800}
        grabCursor={true}
        watchOverflow={true}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}

        pagination={{
          clickable: true,
        }}

        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 15,
          },

          650: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        }}
      >

        {reviews.map((review) => (
          <SwiperSlide key={review.id}>

            <div className="review-card">

              {/* QUOTE ICONS */}
              <Quote className="review-quote-left" />

              <Quote className="review-quote-right" />

              {/* REVIEW CONTENT */}
              <div className="review-content">

                {/* CUSTOMER IMAGE */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-image"
                />

                {/* STAR RATING */}
                <div className="review-stars">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      strokeWidth={2}
                      fill="currentColor"
                    />
                  ))}

                </div>

                {/* REVIEW TEXT */}
                <p className="review-text">
                  {review.review}
                </p>

                {/* CUSTOMER NAME */}
                <h3 className="review-name">
                  {review.name}
                </h3>

                {/* CUSTOMER DESIGNATION */}
                <span className="review-customer">
                  Satisfied Client
                </span>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}

export default Reviews;
