
export default function Footer() {
  return (
    <div className=" py-16 px-8 flex flex-wrap justify-between border-t bg-black text-white ">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">The Food Website</h3>
        <p className="text-gray-600 w-80">
          Welcome to our delightful food place, where you can indulge in a
          mouthwatering array of pizzas, burgers, and pastas that will tantalize
          your taste buds and leave you craving for more.
        </p>
        <div className="flex items-center font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          <p>+91-9876543210</p>
        </div>
        <div className="flex items-center font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          <p>thefoodwebsite@demo.com</p>
        </div>
        <p className="font-light text-md font-poppins">
          Coded & developed completely by Nagraj Tadingi
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">Company</h3>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          Careers
        </p>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          Blog
        </p>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          Locations
        </p>
        <p className="font-semibold hover:text-red-500 transition duration-200 cursor-pointer">
          How we work
        </p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">Working Hours</h3>
        <p className="font-semibold">Mon - Sun 12:00PM - 12:00AM</p>
        <p className="font-semibold">Thursday: Closed</p>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-poppins">Subscription</h3>
        <p className="w-72">
          Subscribe your Email address for latest news & updates.
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="border border-gray-400 px-4 py-2 rounded-l"
            placeholder="Enter your email"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-r">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
