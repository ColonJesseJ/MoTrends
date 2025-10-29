"use client";

import { industries, dataSources } from "../data/options"

export default function Step({
    isReadyAction,
    currentStep,
    jsonData,
    setJSONDataAction
}: {
    isReadyAction: (ready: boolean) => void;
    currentStep: number
    jsonData: any;
    setJSONDataAction: (ready: any) => void;
}) {

    // Industry Step
    if (currentStep == 1)
        return (
            <div className="flex flex-col items-center px-4">
                <h2 className="text-2xl font-extrabold">Industries</h2>
                <p className="text-sm font-semibold text-gray-400">
                    Choose your industry you want to cater to
                </p>

                <div className="mt-4 w-full max-w-2xl">
                    <button
                        onClick={() => {
                            setJSONDataAction({ ...jsonData, industry: 'All Industries' });
                            isReadyAction(true);
                        }}
                        className={`font-bold rounded-lg p-3 px-6 w-full max-w mx-auto block transition-colors ${jsonData.industry === 'All Industries'
                            ? 'text-white hover:bg-blue-700 bg-blue-600'
                            : 'bg-gray-400 text-white hover:bg-gray-500'
                            }`}
                    >
                        All Industries
                    </button>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {industries.filter((industry) => industry !== 'All Industries')
                            .map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => {
                                        setJSONDataAction({ ...jsonData, industry });
                                        isReadyAction(true);
                                    }}
                                    className={`font-bold rounded-lg p-3 px-6 w-full max-w mx-auto block transition-colors 
                                    ${jsonData.industry === industry ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-gray-400 text-white hover:bg-gray-500'
                                        }`}

                                >
                                    {industry}
                                </button>
                            ))}
                    </div>
                </div>
            </div>)

    // Sources Step
    if (currentStep == 2)
        return (
            <div>
                <h2 className="text-2xl flex font-extrabold justify-center">Sources</h2>
            </div>
        )

    // Industry Step
    if (currentStep == 3)
        return (
            <h2 className="text-2xl flex font-extrabold justify-center">Details</h2>
        )

    // Industry Step
    if (currentStep == 4)
        return (
            <h2 className="text-2xl flex font-extrabold justify-center">Preview</h2>
        )


}
