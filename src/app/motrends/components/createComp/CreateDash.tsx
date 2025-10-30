'use client';

import VisualBar from "./Visualbar";
import Step from "./Step";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { LuSave } from "react-icons/lu";
import { useFormContext } from "../../context/FormContext";

const CreateDash: React.FC = () => {
    // dash with logic
    const [step, setStep] = useState(1); // steps for visual progress
    const [ready, setReady] = useState(false); // ready to allow to go next step

    const { jsonData, setJSONData } = useFormContext();  // new context

    return ( // make white dash, if sm-screen then put right component on bottom  
        <div className="bg-white shadow-sm rounded-lg">
            <div>
                {/* visual bar, with steps */}
                <VisualBar
                    currentStep={step}
                    ready={ready}
                />
                {/* step component (always below visual), and change depending on step*/}
                <Step
                    isReadyAction={setReady}
                    currentStep={step}
                    jsonData={jsonData}
                    setJSONDataAction={setJSONData}
                    ready={ready}
                />
                {/* buttons */}
                <div className="p-4 flex justify-end">
                    {step !== 1 && (
                        <button
                            onClick={() => {
                                setStep(step - 1);
                                setReady(true);
                            }}
                            className={"mr-auto bg-blue-600 font-bold text-white rounded-2xl "}
                        >
                            <div className="flex justify-between items-center text-sm gap-1 p-2 px-3">
                                <IoIosArrowBack className="text-md" />{"Step "}{step - 1}
                            </div>
                        </button>
                    )}
                    {step !== 4 ?
                        (
                            <button
                                onClick={() => {
                                    setStep(step + 1);
                                    setReady(false);
                                }}
                                disabled={!ready}
                                className={` font-bold text-white rounded-2xl 
                                    ${ready
                                        ? "bg-blue-600"
                                        : "bg-gray-400"
                                    }`}>
                                <div className="flex justify-between items-center text-sm gap-1 p-2 px-3">
                                    {"Step "}{step + 1}<IoIosArrowForward className="text-md" />
                                </div>

                            </button >)
                        : (
                            <button
                                disabled={!ready}
                                className={`font-bold text-white rounded-2xl 
                                    ${ready
                                        ? "bg-blue-600"
                                        : "bg-gray-400"
                                    }`}>
                                <div className="flex justify-between items-center text-sm gap-3 p-2 px-[14px]">
                                    Save<LuSave className="text-md" />
                                </div>
                            </button>
                        )}
                </div>

            </div>
            {/* seperate so output screen goes on the right side when not small*/}
        </div >
    )
}

export default CreateDash;
