import { useFormContext } from "../../context/FormContext";
import { FaGoogle, FaTiktok, FaLinkedin, FaFacebook } from "react-icons/fa";
import { json } from "node:stream/consumers";

export default function TrendPreview({
    //currentStep,
    generated
}: {
    //currentStep: number
    generated: boolean
}) {
    const { jsonData } = useFormContext();  // new context

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
                                    {jsonData.dataSources.includes('google') && <FaGoogle />}
                                    {jsonData.dataSources.includes('tk') && <FaTiktok />}
                                    {jsonData.dataSources.includes('fb') && <FaFacebook />}
                                    {jsonData.dataSources.includes('li') && <FaLinkedin />}
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
                            <div className="flex justify-start items-center w-9/10 bg-blue-400 rounded-lg p-4 m-2 font-mono shadow-md">
                                Trend Type:
                                <p className="flex justify-center flex-1">{jsonData.trendType}</p>
                            </div >
                        }
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div>

            </div>
        )
    }
}
