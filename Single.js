import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Cards";
import { BsPencil } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Single = () => {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-3 h-screen ">
        <div className="bg-white justify-center col-span-2 ">
          <div className="grid grid-cols-3">
            <div>
              {/* Image */}
              <div class="max-w-[400px] bg-orange-400 border border-orange-600 rounded-3xl ml-20 mt-20 p-2">
                <a href="#">
                  <img
                    class="rounded-3xl hover:shadow-5xl duration-300"
                    src="https://i.pinimg.com/474x/a9/b9/6e/a9b96ea5bc4af3db0a33ffc6fd88a318.jpg"
                    alt=""
                  />
                </a>
              </div>

              {/* Other Details */}
              <div className="ml-20 grid grid-cols-2 mt-5">
                <div className="p-3">
                  <p className="m-2">
                    <span className="text-lg text-bold">Owner:</span>{" "}
                    <span className="text-bold text-orange-600">Harry</span>
                  </p>
                  <p className="m-2">
                    <span className="text-lg text-bold">Posted on:</span>{" "}
                    <span className="text-bold text-orange-600">
                      10/12/2023
                    </span>
                  </p>
                </div>
                <div className="p-3">
                  <p className="m-2">
                    <BsPencil className=" text-orange-600" size={20} />
                  </p>
                  <p className="m-2">
                    <MdDelete className=" text-orange-600" size={20} />
                  </p>
                </div>
              </div>
            </div>


            {/* Description */}
            <div className="col-span-2 m-auto text-xl">
              <p className="p-10 m-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll  bg-orange-400">
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Single;
