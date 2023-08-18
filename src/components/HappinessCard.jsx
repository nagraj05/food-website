import card from "../assets/menu-images/card.jpg";

export default function HappinessCard() {
  return (
    <div className="bg-black">
      <h1 className="mx-20 mb-5 pt-5 text-2xl font-poppins text-white">
        Hapiness Card For You
      </h1>
      <div className="flex gap-8 mx-20">
        <div className="relative ">
          <img
            src={card}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "400px", height: "200px" }}
            className="rounded-lg"
          />
          <div className="absolute left-2 top-4 p-4 w-36 bg-white rounded-lg">
            <h2 className="text-md font-light">
              Happiness Gift Card For Twelve
            </h2>
            <p className="font-semibold">&#8377;10,250</p>
            <button className="mt-2 px-3  py-2 rounded-full bg-red-400 hover:bg-red-600 text-white text-xs">
              Buy Now
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={card}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "400px", height: "200px" }}
            className="rounded-lg"
          />
          <div className="absolute left-2 top-4 p-4 w-36 bg-white rounded-lg">
            <h2 className="text-md font-light">
              Happiness Gift Card For Eight
            </h2>
            <p className="font-semibold">&#8377;7000</p>
            <button className="mt-2 px-3  py-2 rounded-full bg-red-400 hover:bg-red-600 text-white text-xs">
              Buy Now
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={card}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "400px", height: "200px" }}
            className="rounded-lg"
          />
          <div className="absolute left-2 top-4 p-4 w-36 bg-white rounded-lg">
            <h2 className="text-md font-light">Happiness Gift Card For Two</h2>
            <p className="font-semibold">&#8377;1,850</p>
            <button className="mt-2 px-3  py-2 rounded-full bg-red-400 hover:bg-red-600 text-white text-xs">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
