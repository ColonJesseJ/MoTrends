"use client";

import Dropdown, { DropdownItem } from './Dropdown';
import { industries, dataSources, timeframe } from '/Users/johan/moflo-app/src/app/motrends/data/options'

export default function Step({
    isReadyAction,
    currentStep,
    jsonData,
    setJSONDataAction
}: {
    isReadyAction: (ready: boolean) => void;
    currentStep: number;
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
                        onClick={() => { // set jsondata to all industries
                            setJSONDataAction({ ...jsonData, industry: 'All Industries' });
                            isReadyAction(true); // set ready
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
                                        setJSONDataAction({ ...jsonData, industry });
                                        isReadyAction(true);
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
                                        setJSONDataAction({ ...jsonData, dataSources: newSources });
                                        // ready if at least 1
                                        isReadyAction(newSources.length > 0);
                                    } else { // not selected
                                        // so add to array
                                        const newSources = [...jsonData.dataSources, source.value];
                                        setJSONDataAction({ ...jsonData, dataSources: newSources });

                                        // ready since u def just selected one 
                                        isReadyAction(true);
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
                    Select the following details
                </p>

                {/* Dropdowns for timeframe & current or predicted*/}
                <div className='mt-2'>
                    <Dropdown
                        buttonText='Timeframe'
                        content={<> {
                            timeframe.map(time =>
                                <DropdownItem
                                    key={time}
                                    onClickAction={() => { // set jsondata to all industries
                                        setJSONDataAction({ ...jsonData, timeframe: time });
                                        isReadyAction(true); // set ready
                                    }}
                                >
                                    {time}
                                </DropdownItem>)
                        } </>}
                    />
                </div>
            </div>
        )

    // Preview Step
    if (currentStep == 4)
        return (
            <h2 className="text-2xl flex font-extrabold justify-center">Preview</h2>
        )


}
