import React from "react";

const ContactUs = () => {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="text-gray-800 text-center">
        {/* <style>
      .map-container {
        height: 700px;
        z-index: -1;
      }
    </style> */}
        <div class=" md:px-12">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 flex items-center">
              <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 backdrop-blur-sm bg-white/30 z-10 relative">
                  <h2 class="text-3xl font-bold mb-12">Contact us</h2>
                  <form>
                    <div class="form-group mb-6">
                      <input
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Name"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <input
                        type="email"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email address"
                      />
                    </div>
                    <div class="form-group mb-6">
                      <textarea
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button
                      type="button"
                      className=" w-full mt-8 inline-block py-4 text-sm font-bold uppercase tracking-widest  text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 "
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div class="md:mb-12 lg:mb-0">
                <div class=" h-[700px] relative shadow-lg rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121074.2363441299!2d73.74869863363251!3d18.503131916267566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfeaa9aec6a9%3A0x717795527535622f!2sDesai%20Bandhu%20Ambewale!5e0!3m2!1sen!2sin!4v1677692398764!5m2!1sen!2sin"
                    class="left-0 top-0 h-full w-full absolute rounded-lg"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
