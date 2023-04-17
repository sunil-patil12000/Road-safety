import Feature from "./compontions/Feature";
import Footer from "./compontions/Footer";
import Nav from "./compontions/Nav";

const Home = () => {
  return (
    <div>
      <Nav className='mk' />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Welcome To Road Satety
            </h1>
            <p class="mb-8 leading-relaxed">
              Road Safety is a preventive measure for road accidents. All over
              world road accidents are the biggest issue to resolve. Day-by-day
              the rate of road accidents is increasing. Need for the Road-safety
              is crucial for surviving various innocent lives. In some cases, it
              is observed that pedestrians are killed due to the collision of
              vehicles. 
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 font-semibold focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Safety
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/hero.jpg"
            />
          </div>
        </div>
      </section>

      <Feature />

      <Footer />
    </div>
  );
};

export default Home;
