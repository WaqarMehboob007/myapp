"use client";
import * as React from "react";
import { useState, useEffect } from "react";
const greetingArray: string[] = [
      `Birth Day`,
      `Aniversary`,
      `Best Wishes`,
      `Father's Day`,
      `Mother's Day`,
];
import {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
} from "@/components/ui/select";
import Cards from "@/component/cards";

const birthDayImages = [
      "/images/BirthDay/BirthDay1.JPG",
      "/images/BirthDay/BirthDay2.JPG",
      "/images/BirthDay/BirthDay3.JPG",
      "/images/BirthDay/BirthDay4.JPG",
];
const BestWishesImages = [
      "/images/BestWishes/BestWishes1.JPG",
      "/images/BestWishes/BestWishes2.JPG",
      "/images/BestWishes/BestWishes3.JPG",
      "/images/BestWishes/BestWishes4.JPG",
      "/images/BestWishes/BestWishes5.JPG",
];
const AnniversaryImages = [
      "/images/Aniversary/Anniversary1.JPG",
      "/images/Aniversary/Anniversary2.JPG",
      "/images/Aniversary/Anniversary3.JPG",
];
const FatherDayImages = [
      "/images/FatherDay/FatherDay1.JPG",
      "/images/FatherDay/FatherDay2.JPG",
      "/images/FatherDay/FatherDay3.JPG",
      "/images/FatherDay/FatherDay4.JPG",
      "/images/FatherDay/FatherDay5.JPG",
      
];
const MotherDayImages = [
      "/images/MotherDay/MotherDay1.JPG",
      "/images/MotherDay/MotherDay2.JPG",
      "/images/MotherDay/MotherDay3.JPG",
];

export type Data = {
      to: string;
      from: string;
      message: string;
};

export default function Home() {
      const [greeting, setgreeting] = useState("Birth Day");
      const [bgImage, setbgImage] = useState(MotherDayImages);
      const [data, setdata] = useState({
            to: "Waqar",
            from: "Parents",
            message: "I wish this Birthday will bring happiness and Joy in you Life and May Allah Bestow HIS Countless Blessing upon You.",
      });

      useEffect(() => {
            switch (greeting) {
                  case "Birth Day":
                        setbgImage(birthDayImages);

                        break;
                  case "Aniversary":
                        setbgImage(AnniversaryImages);
                        break;
                  case "Best Wishes":
                        setbgImage(BestWishesImages);
                        break;
                  case `Father's Day`:
                        setbgImage(FatherDayImages);
                        break;
                  case `Mother's Day`:
                        setbgImage(MotherDayImages);
                        break;
            }
      }, [greeting, bgImage]);
      return (
            <div className="bg-slate-50 bg-gradient-to-r from-indigo-200 to-emerald-200 h-screen w-screen ">
                  <div className=" flex flex-col md:mx-5 md:pt-20">
                        

                        <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 py-5 justify-center md:mx-5 mx-2">
                              
                              
                              <div className="md:w-2/6">
                                    <div className=" mb-10 flex items-center ">
                                          <div className="bg-black flex text-white p-2.5">
                                                 <label htmlFor="SelectGreetings" >Select</label>
                                          </div>
                                         
                                          <select
                                                name="SelectGreetings"
                                                id="SelectGreetings"
                                                onChange={(e) =>
                                                      setgreeting(e.target.value)
                                                }
                                                defaultValue={greeting}
                                                className="flex w-full font-sans bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                          >
                                                {greetingArray.map((item, index) => (
                                                      <option className="">{item}</option>
                                                ))}
                                          </select>
                                    </div>
                                    <form className="flex flex-col space-y-6 text-slate-700">
                                          <div className="relative z-0 w-full mb-6 group">
                                                <input
                                                      type="text"
                                                      name="To"
                                                      id="To"
                                                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                      placeholder=" "
                                                      required
                                                      value={data.to}
                                                      onChange={(e) =>
                                                            setdata({
                                                                  ...data,
                                                                  to: e.target.value,
                                                            })
                                                      }
                                                />
                                                <label
                                                      htmlFor="To"
                                                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                      Greetings For
                                                </label>
                                          </div>
                                          <div className="relative z-0 w-full mb-6 group">
                                                <input
                                                      type="text"
                                                      name="From"
                                                      id="From"
                                                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                      placeholder=" "
                                                      required
                                                      value={data.from}
                                                      onChange={(e) =>
                                                            setdata({
                                                                  ...data,
                                                                  from: e.target.value,
                                                            })
                                                      }
                                                />
                                                <label
                                                      htmlFor="From"
                                                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                      Well Wisher
                                                </label>
                                          </div>
                                          <div className="relative z-0 w-full mb-6 group">
                                                <textarea
                                                      name="Message"
                                                      id="Message"
                                                      className="resize-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                      placeholder=" "
                                                      required
                                                      value={data.message}
                                                      onChange={(e) =>
                                                            setdata({
                                                                  ...data,
                                                                  message: e.target.value,
                                                            })
                                                      }
                                                />
                                                <label
                                                      htmlFor="Message"
                                                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                >
                                                      Message
                                                </label>
                                          </div>
                                          
                                    </form>
                              </div>
                              <div className="flex flex-col flex-grow-0 justify-center items-center md:w-4/6">
                                    <Cards
                                          bgImage={bgImage}
                                          data={data}
                                          greeting={
                                                greeting != "Best Wishes"
                                                      ? `Happy ${greeting}`
                                                      : greeting
                                          }
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
}
