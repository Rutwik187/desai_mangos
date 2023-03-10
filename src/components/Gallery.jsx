import React from "react";
import ZoomGallery from "./ZoomGallery";
import rajThakre from "../img/raj-thakre.jpeg";
import amitabhBacchan from "../img/amitabhBachan.jpeg";
import dhoni from "../img/dhoni.jpeg";
import ImagesSlider from "./ImagesSlider";
import SocialWorkSlider from "./SocialWorkSlider";
import Instagram from "./Instagram";

const Gallery = () => {
  return (
    <section class="overflow-hidden pt-20 pb-12 lg:pt-[60px] lg:pb-[90px] md:mx-24 mx-6">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap items-center justify-between">
          <div class="w-full px-4 lg:w-6/12">
            <div class="-mx-3 flex items-center sm:-mx-4">
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="py-3 sm:py-4">
                  <img
                    src={rajThakre}
                    alt=""
                    class="w-full rounded-2xl float-animation shadow-lg"
                  />
                </div>
                <div class="py-3 sm:py-4">
                  <img
                    src={dhoni}
                    alt=""
                    class="w-full rounded-2xl float-animation shadow-lg"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="relative z-10 my-4 ">
                  <img
                    src={amitabhBacchan}
                    alt=""
                    class="w-full rounded-2xl float-animation shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div class="mt-10 lg:mt-0">
              <span class="text-textColorYellow mb-2 block text-lg font-semibold">
                Some of our celebrity customers
              </span>
              <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                We make our costumers happy
              </h2>
              <p class="text-body-color mb-8 text-base">
                Our commitment to excellence has allowed us to grow and expand
                over the years, and we are proud to offer our products to
                customers across the country. One of our proudest moments was
                when we had the opportunity to meet and gift a basket of our
                finest mangoes to some of the very legendary personalities.
              </p>
              <p class="text-body-color mb-12 text-base">
                Few of them are Amitabh Bachchan, M.S Dhoni, Raj Thakery, Nitin
                Gadkari, Devendra Fadnavis, Chandrakant Patil...
              </p>
              <p class="text-body-color mb-12 text-base">
                We are also glad to receive apprication letters form Prime
                Minister Indira Gandhi, Amitabh Bachchan, Road and Transport
                Department, Government of Maharashtra...
              </p>
            </div>
          </div>
        </div>
      </div>

      <ZoomGallery />
      <ImagesSlider />
      <SocialWorkSlider />
      <Instagram />
    </section>
  );
};

export default Gallery;
