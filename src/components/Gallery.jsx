import React from "react";
import ZoomingGallery from "./ZoomingGallery";
import rajThakre from "../img/raj-thakre.jpeg";
import amitabhBacchan from "../img/amitabhBachan.jpeg";
import dhoni from "../img/dhoni.jpeg";

const Gallery = () => {
  return (
    <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] md:mx-24 mx-6">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap items-center justify-between">
          <div class="w-full px-4 lg:w-6/12">
            <div class="-mx-3 flex items-center sm:-mx-4">
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="py-3 sm:py-4">
                  <img src={rajThakre} alt="" class="w-full rounded-2xl" />
                </div>
                <div class="py-3 sm:py-4">
                  <img src={dhoni} alt="" class="w-full rounded-2xl" />
                </div>
              </div>
              <div class="w-full px-3 sm:px-4 xl:w-1/2">
                <div class="relative z-10 my-4">
                  <img src={amitabhBacchan} alt="" class="w-full rounded-2xl" />
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
                Make your customers happy by giving our Mangos.
              </h2>
              <p class="text-body-color mb-8 text-base">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <p class="text-body-color mb-12 text-base">
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ZoomingGallery />
    </section>
  );
};

export default Gallery;
