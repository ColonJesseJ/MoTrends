'use client';

import VisualBar from "./Visualbar";
import Step from "./Step";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { LuSave } from "react-icons/lu";
import { useFormContext } from "../../context/FormContext";
import TrendPreview from "./TrendPreview";

const CreateDash: React.FC = () => {
    // dash with logic
    const [step, setStep] = useState(1); // steps for visual progress
    const [ready, setReady] = useState(false); // ready to allow to go next step
    const [generated, setGenerated] = useState(true);

    const { jsonData } = useFormContext();  // new context

    useEffect(() => { // use efefct t check if all data has been filled instead
        switch (step) {
            case 1: // step 1
                setReady(!!jsonData.industry) // if it has industry
                break;
            case 2: // step 2
                setReady(jsonData.dataSources.length > 0) // 1 or more is selected
                break;
            case 3: // step 3 
                setReady(!!jsonData.timeframe && // check if each is selected
                    !!jsonData.trendType &&
                    !!jsonData.keywords)
                break;
            case 4: // step 4, checks all?
                break;
        }

    }, [step, jsonData])

    return ( // make white dash, if sm-screen then put right component on bottom  
        <div className="bg-white shadow-sm rounded-lg flex flex-col lg:flex-row">
            <div className="">
                {/* visual bar, with steps */}
                <VisualBar
                    currentStep={step}
                    ready={ready}
                />
                {/* step component (always below visual), and change depending on step*/}
                <Step
                    currentStep={step}
                    generated={generated}
                    setGeneratedAction={setGenerated}
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
            <TrendPreview generated={generated} />
        </div >
    )
}

export default CreateDash;
