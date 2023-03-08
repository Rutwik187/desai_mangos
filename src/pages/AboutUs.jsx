const AboutUs = () => {
  return (
    <div className="m-6 md:m-12 xl:m-20">
      <h1 className="mb-4 font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-5xl ">
        About Us
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">
        Welcome to Desai Bandhu Ambewale - a family-owned business with a legacy
        of 92 years and counting. We are Maharashtra's pride since 1932, and we
        take great pride in providing the best quality and naturally ripened
        mangoes to our customers.
      </p>

      <section className="bg-white dark:bg-gray-900 my-12 md:my-24 ">
        <div className="gap-16 items-center   max-w-screen-xl lg:grid lg:grid-cols-2 ">
          <div className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl  tracking-tight font-semibold text-gray-900 ">
              Services
            </h2>
            <p className="mb-4">
              At Desai Bandhu Ambewale, we have 400-acre farms in Ratnagiri,
              Devgad, and Pawas, where we grow our mangoes using organic and
              sustainable farming practices. We are GI-certified and take great
              care to ensure that our mangoes are free from harmful chemicals
              and are naturally ripened. Our mission is to provide our customers
              with the authentic and natural taste of mangoes.
            </p>
            <p>
              We believe in sustainable farming practices and taking care of our
              environment. We are committed to providing the best quality and
              naturally ripened mangoes to our customers, whether they are in
              India or anywhere in the world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      {/* Company Background */}
      <div className="py-8">
        <div className="container m-auto ">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 ">
              <h1 className="mb-4 font-semibold leading-none tracking-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl ">
                Company Background
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">
                Desai Bandhu Ambewale is a family-owned business that's been
                growing organic, GI-certified mangoes on 400-acre farms in
                Ratnagiri, Devgad, and Pawas since 1932. We prioritize
                sustainable farming practices, avoiding harmful chemicals and
                ensuring natural ripening. Customers can taste our pure,
                high-quality mangoes at three Pune stores or order online for
                worldwide delivery.
                <br />
                <br />
                Vasantrao Desai now carries forward Bhausaheb's legacy, leading
                our team of passionate individuals committed to providing a
                convenient way for customers to enjoy nature's sweetness.
              </p>
            </div>
            <div className="lg:w-5/12 order-2">
              <img
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
