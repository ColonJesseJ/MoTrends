'use client';

import VisualBar from "./Visualbar";
import Step from "./Step";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { LuSave } from "react-icons/lu";
import { useFormContext } from "../../context/FormContext";
import TrendPreview from "./TrendPreview";
import { Trend } from "../../types/Trend";
import { useRouter } from "next/navigation";

const CreateDash: React.FC = () => {
    // dash with logic
    const [step, setStep] = useState(1); // steps for visual progress
    const [ready, setReady] = useState(false); // ready to allow to go next step
    const [generated, setGenerated] = useState(false);
    const [generatedTrends, setGeneratedTrends] = useState<Trend[] | null>(null); // Store generated trends 


    const { jsonData, setJSONData } = useFormContext();  // new context

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
                setReady(generatedTrends !== null)
                break;
        }

    }, [step, jsonData, generatedTrends])

    const downloadJSONFile = (trends: Trend[]) => {
        const jsonString = JSON.stringify(trends, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });

        // download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `motrends-output-${Date.now()}.json`; // Filename

        // Download
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleSave = () => {
        if (!generatedTrends) {
            alert('Trends not generated');
            return;
        }
        // Save localStorage & download
        const existingTrends = JSON.parse(localStorage.getItem('motrends') || '[]');
        const allTrends = [...existingTrends, ...generatedTrends];
        localStorage.setItem('motrends', JSON.stringify(allTrends));
        downloadJSONFile(generatedTrends);

        // Reset form and generated trends
        setJSONData({
            industry: '',
            dataSources: [],
            keywords: '',
            trendType: '',
            timeframe: '',
            customNotes: '',
        });
        setGeneratedTrends(null);
        setStep(1);

        // Redirect to view page
        alert('Saved Successfully!\n\nRedirecting to View page...');

        setTimeout(() => {
            useRouter().push('/motrends/view');
        }, 1000);
    };

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
                    setTrendsAction={setGeneratedTrends}
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
                                onClick={handleSave}
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
            <TrendPreview generated={generated} trends={generatedTrends} />
        </div >
    )
}

export default CreateDash;
