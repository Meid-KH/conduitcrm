import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import avatar from "assets/img/avatar.png";

const Testimonials = () => {
	return (
		<section className="bg-white text-primary-600 py-24">
			<div className="container mx-auto">
				<div className="max-w-5xl mx-auto flex gap-8 items-center justify-between">
					<h3 className="text-4xl font-light leading-snug">
						See what our <br /> customers{" "}
						<strong className="font-semibold">
							have <br /> to say
						</strong>
					</h3>
					{/* Testimonial Cards */}
					<Swiper
						modules={[Pagination]}
						slidesPerView={1}
						pagination={{ clickable: true }}
						className="max-w-md overflow-visible"
					>
						{[0, 1, 2].map((slide, i) => (
							<SwiperSlide key={i} className="p-3 pr-10 pb-10">
								<div className="relative max-w-md">
									<div className="bg-primary-500 text-white px-7 py-8 rounded-lg shadow-lg shadow-primary-500/75">
										<div className="pb-8 text-xl leading-normal">
											“This is the best thing out there
											for real, Conduit give us leverage
											of everything and anyone in our
											team.”
										</div>
										<div className="">
											<div className="font-light ">
												Travis Helmig | Head of
												Operations
											</div>
											<div className="text-lg font-semibold">
												LIVHOMEOFFERS
											</div>
										</div>
									</div>
									<div className="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 w-20 h-20 rounded-full overflow-hidden bg-primary-600">
										<img
											className="max-w-full"
											src={avatar.src}
											// src="https://i.pravatar.cc/150"
											alt="Author avatar"
										/>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
