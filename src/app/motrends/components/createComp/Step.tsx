"use client";

import { json } from 'stream/consumers';
import { useFormContext } from '../../context/FormContext';
import Dropdown, { DropdownItem } from './Dropdown';
import TextInput from './TextInput';
import { industries, dataSources, timeframe, trendType } from '/Users/johan/moflo-app/src/app/motrends/data/options'
import Generate from './Generate';
import { Trend } from "../../../../../data/Trend";

export default function Step({
    currentStep,
    setTrendsAction,
    setGeneratedAction
}: {
    currentStep: number;
    setTrendsAction: (trends: Trend[]) => void;
    setGeneratedAction: (generated: boolean) => void;
}) {
    const { jsonData, setJSONData } = useFormContext();  // new context

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
                        onClick={() => { // set jsondata to all industries
                            setJSONData({ ...jsonData, industry: 'All Industries' });
                        }}
                        className={`font-bold rounded-lg p-3 px-6 w-full max-w mx-auto block transition-colors ${jsonData.industry === 'All Industries' // if industry then blue, not gray
                            ? 'text-white hover:bg-blue-700 bg-blue-600'
                            : 'bg-gray-400 text-white hover:bg-gray-500'
                            }`}
                    >
                        All Industries
                    </button>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {industries.filter((industry) => industry !== 'All Industries')
                            .map((industry) => ( // iterate thru every industry thus filling out grid
                                <button
                                    key={industry}
                                    onClick={() => { // set json data and ready since selected
                                        setJSONData({ ...jsonData, industry });
                                    }} // if selected, then blue
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
            <div className="flex flex-col items-center px-4">
                <h2 className="text-2xl flex font-extrabold justify-center">Sources</h2>
                <div className=" mt-4 flex flex-col justify-center items-center w-full shadow-sm border-1 border-gray-300 rounded-xl max-w-2xl">
                    <p className="m-5 text-sm font-bold">
                        Choose which data sources to use
                    </p>
                    <div className=" mb-4 grid grid-cols-4 gap-4">
                        {dataSources.map((source) => (
                            <button
                                key={source.value}
                                onClick={() => {
                                    const isAlreadySelected = jsonData.dataSources.includes(source.value);

                                    if (isAlreadySelected) { // if already selected
                                        // remove if selected again
                                        const newSources = jsonData.dataSources.filter((s: string) => s !== source.value);
                                        setJSONData({ ...jsonData, dataSources: newSources });
                                    } else { // not selected
                                        // so add to array
                                        const newSources = [...jsonData.dataSources, source.value];
                                        setJSONData({ ...jsonData, dataSources: newSources });
                                    }
                                }} // set those selected to blue
                                className={`p-7 rounded-2xl text-2xl transition-colors
                                    ${jsonData.dataSources?.includes(source.value)
                                        ? "text-white bg-blue-600"
                                        : "text-gray-500 bg-gray-300"
                                    }`}
                            >
                                {source.icon}
                            </button>
                        ))}
                    </div>
                </div>
            </div >
        )

    // Details Step
    if (currentStep == 3)
        return (
            <div className="flex flex-col items-center px-4">
                <h2 className="text-2xl flex font-extrabold justify-center">Details</h2>
                <p className="mt-2 text-sm font-bold">
                    Fill out the following details
                </p>

                {/* Dropdowns for timeframe & current or predicted*/}
                <div className=" my-3 grid grid-cols-2 gap-4">
                    <Dropdown
                        buttonText={jsonData.timeframe || 'Timeframe'}
                        selectedValue={jsonData.timeframe}
                        content={<> {
                            timeframe.map(time =>
                                <DropdownItem
                                    key={time}
                                    value={time}
                                    selectedValue={jsonData.timeframe}
                                    onClickAction={() => { // set jsondata to all industries
                                        setJSONData({ ...jsonData, timeframe: time });
                                    }}
                                >
                                    {time}
                                </DropdownItem>)
                        } </>}
                    />
                    <Dropdown
                        buttonText={jsonData.trendType || 'Trend Type'}
                        selectedValue={jsonData.trendType}
                        content={<> {
                            trendType.map(type =>
                                <DropdownItem
                                    key={type}
                                    value={type}
                                    selectedValue={jsonData.trendType}
                                    onClickAction={() => { // set jsondata to all industries
                                        setJSONData({ ...jsonData, trendType: type });
                                    }}
                                >
                                    {type}
                                </DropdownItem>)
                        } </>}
                    />

                </div>
                {/* Text input for keywords */}
                <div>
                    <p className='flex justify-center text-sm font-semibold'>Input 3 keywords (seperate with commas)</p>
                    <TextInput />
                </div>

                {/* custom notes like the chatgpt moflo  */}
            </div>
        )

    // Preview Step
    if (currentStep == 4)
        return (
            <div className='flex flex-col items-center'>
                <h2 className="text-2xl flex font-extrabold justify-center">Preview</h2>
                <div className=" my-3 flex flex-col justify-center items-center w-9/10 shadow-sm border-1 border-gray-300 rounded-xl max-w-xl">
                    <div className="mt-3 text-lg font-extrabold flex items-center flex-col">
                        Ready to generate!
                    </div>
                    <div className='text-sm font-semibold '>
                        Review over your inputs before generating...
                        <div className='mt-6 flex justify-center text-blue-600'>What you get after generating:</div>
                    </div>
                    <div className="my-1 p-4 flex justify-center items-center w-9/10 shadow-sm border-1 bg-blue-500 text-white rounded-xl text-xl max-w-xl"
                    > <h1 className='font-extrabold'>AI</h1>
                        -powered Trends
                    </div>
                    <div className="my-1 p-4 flex flex-col justify-center items-center w-9/10 shadow-sm border-1 bg-blue-500 text-white rounded-xl text-lg max-w-xl"
                    >Engagement Score
                    </div>
                    <div className="my-1 mb-4 p-4 flex flex-col justify-center items-center w-9/10 shadow-sm border-1 bg-blue-500 text-white rounded-xl text-lg max-w-xl"
                    >Action ideas
                    </div>
                </div >
                {/* GENERATE*/}
                <Generate setGeneratedAction={setGeneratedAction} setTrendsAction={setTrendsAction} />
            </div >

        )


}
