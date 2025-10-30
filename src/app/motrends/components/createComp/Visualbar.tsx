'use client';

import { FaRegBuilding } from "react-icons/fa";
import { LuDatabase } from "react-icons/lu";
import { RiInputField, RiAiGenerate2 } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";

export default function VisualBar({ currentStep, ready }: { currentStep: number, ready: boolean }) {
    // ui for visualdash
    const steps = [ // for each step, have each icon & title
        { id: 1, icon: <FaRegBuilding />, title: "Industry" },
        { id: 2, icon: <LuDatabase />, title: "Source" },
        { id: 3, icon: <RiInputField />, title: "Detail" },
        { id: 4, icon: <RiAiGenerate2 />, title: "Preview" },
    ];
    return (
        <div className="flex items-center justify-center py-4 px-6 ">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center justify-center">
                    {/* Format each circle, with:
                        light blue if on the step.
                        dark blue if past the step,
                        gray if havent reached yet
                    */}
                    <div className="flex flex-col items-center">
                        <div className="text-sm text-gray-500 pb-1">
                            Step {step.id}
                        </div>
                        <div className={`w-[55px] h-[55px] flex items-center justify-center rounded-full shrink-0 shadow-sm text-2xl z-10
                       
                            ${currentStep === step.id
                                ? "bg-blue-100 border-2 border-blue-500 text-blue-500"
                                : currentStep > step.id
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-300 text-white"
                            }`}
                        >
                            {/* Display icon if past, then checkmark*/}
                            {currentStep > step.id ? (<IoMdCheckmark />) : step.icon}
                        </div>
                        <div className={`text-sm mt-1 font-semibold px-1
                            ${currentStep >= step.id
                                ? "text-blue-600"
                                : "text-gray-400"
                            }`}>
                            {step.title}
                        </div>
                    </div>
                    {/* Line */}
                    {index < steps.length - 1 && (
                        <div
                            className={`relative w-[66px] h-[8px] rounded-full -ml-[6px] -mr-[6px] z-0 shadow-sm transition-all duration-500 ease-in-out
                                ${currentStep > step.id
                                    ? "bg-blue-600"
                                    : currentStep === step.id && ready
                                        ? "bg-blue-600"
                                        : "bg-gray-300"
                                }`}
                        ></div>
                    )}


                </div>
            ))
            }
        </div >
    );
}

