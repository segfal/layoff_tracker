import img from "../images/fired.jpeg";
import news from "../images/news.jpeg";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 px-2 lg:p-0">
      <a
        className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
        style={{ height: "24em" }}
        href="#"
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={img}
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          alt="First Example"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            Layoffs
          </span>
          <h2 className="md:text-4xl text-3xl font-semibold text-gray-100 leading-tight">
            The tech industry is facing a wave of layoffs as companies
            reevaluate their growth and scalability strategies amidst economic
            shifts.
          </h2>
        </div>
      </a>

      <a
        className="w-full md:w-1/3 relative rounded"
        style={{ height: "24em" }}
        href="#"
      >
        <div
          className="absolute left-0 top-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={news}
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          alt="Second Example"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            News
          </span>
          <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
            {" "}
            Layoff Insights is your trusted source for layoff news and insights.
          </h2>
        </div>
      </a>
    </div>
  );
};

export default Banner;
