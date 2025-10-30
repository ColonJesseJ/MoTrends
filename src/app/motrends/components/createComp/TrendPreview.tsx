import { useFormContext } from "../../context/FormContext";
import { FaGoogle, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Trend } from "../../types/Trend";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function TrendPreview({
    generated,
    trends
}: {
    generated: boolean;
    trends: Trend[] | null;
}) {
    const { jsonData } = useFormContext();  // new contextA

    // generation card logic
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        if (trends && currentIndex < trends.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentTrend = trends && trends[currentIndex];
    if (!generated) {
        if (jsonData.industry) {
            return (
                <div className='flex flex-col items-center justify-center'>
                    <div className=" m-6 flex flex-col justify-self-auto items-center w-100 h-110 shadow-sm border-1 border-gray-300 rounded-xl">
                        <h1 className="text-2xl font-extrabold p-4 pb-2 bg-gradient-to-r from-blue-200 to-blue-700 bg-clip-text text-transparent">
                            Trend Preview
                        </h1>                      {/* INDUSTRY */}
                        <div className="flex justify-start items-center w-9/10 bg-blue-100 rounded-lg p-4 m-2 font-mono shadow-md">
                            Industry:
                            <p className="flex justify-center flex-1">{jsonData.industry}</p>
                        </div>
                        {/* SOURCE */}
                        {jsonData.dataSources.length > 0 &&
                            <div className="flex justify-start w-9/10 bg-blue-200 rounded-lg p-4 m-2 font-mono shadow-md">
                                Source(s):
                                <div className="flex flex-1 justify-evenly items-center text-3xl">
                                    {jsonData.dataSources.includes('Google Trends') && <FaGoogle />}
                                    {jsonData.dataSources.includes('TikTok') && <FaTiktok />}
                                    {jsonData.dataSources.includes('Facebook') && <FaFacebook />}
                                    {jsonData.dataSources.includes('LinkedIn') && <FaLinkedin />}
                                </div>
                            </div >
                        }
                        {/* timeframe */}
                        {jsonData.timeframe &&
                            <div className="flex justify-start  items-center w-9/10 bg-blue-300 rounded-lg p-4 m-2 font-mono shadow-md">
                                Timeframe:
                                <p className="flex justify-center flex-1">{jsonData.timeframe}</p>
                            </div>
                        }
                        {/* Trend Type */}
                        {jsonData.trendType &&
                            <div className="flex justify-start items-center w-9/10 bg-blue-400 rounded-lg p-4 m-2 font-mono shadow-md">
                                Trend Type:
                                <p className="flex justify-center flex-1">{jsonData.trendType}</p>
                            </div >
                        }
                        {jsonData.keywords &&
                            <div className="flex justify-start items-center w-9/10 bg-blue-400 rounded-lg p-4 m-2 mb-auto font-mono shadow-md">
                                <p className="flex justify-center flex-1">{jsonData.keywords}</p>
                            </div >
                        }
                    </div>
                </div>
            )
        }
    } else if (trends && trends.length > 0 && currentTrend !== null) {
        return (
            <div className='flex flex-col items-center justify-center'>
                <div className=" m-6 flex flex-col justify-center w-100 h-130 shadow-sm text-xs border-1 border-gray-300 rounded-xl">
                    <div
                        className="flex justify-center items-center w-9/10 bg-pink-300 rounded-lg p-4 my-2 mx-5 font-mono shadow-md">
                        Title:
                        <p className="ml-4 flex justify-center flex-1">{currentTrend.title}</p>
                    </div>
                    <div
                        className="flex justify-start items-center w-9/10 bg-purple-300 rounded-lg p-4 my-2 mx-5 font-mono shadow-md">
                        Engagement Score:
                        <p className="ml-4 flex justify-center flex-1">{currentTrend.engagementScore}</p>
                    </div>
                    <div
                        className="flex justify-start items-center w-9/10 bg-blue-300 rounded-lg p-4 my-2 mx-5 font-mono shadow-md">
                        <p className="ml-4 flex justify-center flex-1">{currentTrend.prediction}</p>
                    </div>
                    <div
                        className="flex justify-start items-center w-9/10 bg-indigo-300 rounded-lg p-4 my-2 mx-5 font-mono shadow-md">
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            {currentTrend.actionItems.map((item, index) => (
                                <li key={index} className="text-xs">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Buttons*/}
                    <div className="px-4 py-2 flex justify-end">
                        {currentIndex !== 0 &&
                            <button
                                onClick={goToPrevious}
                                className={" mr-auto bg-blue-600 font-bold text-white rounded-2xl "}
                            >
                                <div className="flex justify-between items-center text-sm gap-1 p-2 px-3">
                                    <IoIosArrowBack className="text-md" />{"Previous"}
                                </div>
                            </button>
                        }
                        {currentIndex !== 2 &&
                            <button
                                onClick={goToNext}
                                className={" bg-blue-600 font-bold text-white rounded-2xl "}
                            >
                                <div className="flex justify-between items-center text-sm gap-1 p-2 px-3">
                                    {"Next"}<IoIosArrowForward className="text-md" />
                                </div>
                            </button>
                        }

                    </div>

                </div>
            </div>
        )
    }
}
