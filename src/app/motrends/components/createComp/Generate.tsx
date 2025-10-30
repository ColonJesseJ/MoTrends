'use client'

import { useState } from "react";
import { useFormContext } from "../../context/FormContext";

export default function Generate({
    generated,
    setGeneratedAction
}: {
    generated: boolean;
    setGeneratedAction: (generated: boolean) => void;
}) {
    const { jsonData, setJSONData } = useFormContext();  // new context
    const [isGenerating, setIsGenerating] = useState(false);

    const generateTrends = () => {
        setIsGenerating(true);
    }

    return (
        <button
            onClick={generateTrends}
            disabled={isGenerating}
            className={`my-2 flex flex-col justify-center items-center w-100 shadow-sm border-1 bg-blue-600 hover:bg-blue-700 rounded-xl max-w-xl
        ${isGenerating
                    ? "cursor-progress"
                    : ""
                }`}
        >
            <div className="m-5 text-xl font-bold text-white items-center ">
                {isGenerating
                    ? (<>
                        <div className="animate-pulse">
                            Generating...
                        </div>
                    </>)
                    : (<>
                        Generate
                    </>)
                }
            </div>
        </button>
    )
}
