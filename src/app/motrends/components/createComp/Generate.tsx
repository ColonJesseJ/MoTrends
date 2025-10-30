'use client'

import { useState } from "react";
import { useFormContext } from "../../context/FormContext";
import { Trend } from "../../types/Trend";

export default function Generate({
    setGeneratedAction,
    setTrendsAction
}: {
    setGeneratedAction: (generated: boolean) => void;
    setTrendsAction: (trends: Trend[]) => void;
}) {
    const { jsonData } = useFormContext();  // new context
    const [isGenerating, setIsGenerating] = useState(false);


    const generateTrends = () => {
        if (!jsonData.industry || !jsonData.dataSources.length || !jsonData.keywords || !jsonData.timeframe || !jsonData.trendType) {
            alert('Please fill out all required fields!');
            return;
        }
        setIsGenerating(true);

        setTimeout(() => {
            const keywords = jsonData.keywords.split(',').map(k => k.trim()); //parse
            const timestamp = Date.now();
            const baseDate = new Date();

            const newTrends: Trend[] = [
                {
                    id: `trend_${timestamp}`,
                    createdAt: new Date(baseDate.getTime()).toISOString(),
                    status: 'active',
                    industry: jsonData.industry,
                    dataSources: jsonData.dataSources,
                    keywords: keywords,
                    trendType: jsonData.trendType as 'current' | 'predicted',
                    timeframe: jsonData.timeframe,
                    title: `${keywords[0]} Revolution in ${jsonData.industry}`,
                    engagementScore: Math.floor(Math.random() * 15) + 85,
                    prediction: `Based on ${jsonData.dataSources.join(', ')}, "${keywords[0]}" shows explosive 300% YoY growth in ${jsonData.industry}. Early investment critical for ${jsonData.timeframe.toLowerCase()}.`,
                    actionItems: [
                        `Launch premium ${keywords[0]} offering immediately`,
                        `Invest 40% of budget into ${jsonData.dataSources[0]} campaigns`,
                        `Build partnerships with industry leaders`,
                        `Position as thought leader with webinar series`,
                        `Hire dedicated team to capture opportunity`
                    ]
                }, {
                    id: `trend_${timestamp}_medium`,
                    createdAt: new Date(baseDate.getTime() + 1000).toISOString(),
                    status: 'active',
                    industry: jsonData.industry,
                    dataSources: jsonData.dataSources,
                    keywords: keywords,
                    trendType: jsonData.trendType as 'current' | 'predicted',
                    timeframe: jsonData.timeframe,
                    title: `${keywords[0]} Integration in ${jsonData.industry}`,
                    engagementScore: Math.floor(Math.random() * 20) + 60,
                    prediction: `Based on ${jsonData.dataSources.join(', ')}, "${keywords[0]}" shows steady 45% growth in ${jsonData.industry}. Pilot programs recommended for ${jsonData.timeframe.toLowerCase()}.`,
                    actionItems: [
                        `Launch beta ${keywords[0]} features with select customers`,
                        `Monitor ${jsonData.dataSources[0]} weekly for shifts`,
                        `Create educational content series`,
                        `Allocate 20% of budget for testing`,
                        `Survey customers quarterly about interest`
                    ]
                }, {
                    id: `trend_${timestamp}_low`,
                    createdAt: new Date(baseDate.getTime() + 2000).toISOString(),
                    status: 'active',
                    industry: jsonData.industry,
                    dataSources: jsonData.dataSources,
                    keywords: keywords,
                    trendType: jsonData.trendType as 'current' | 'predicted',
                    timeframe: jsonData.timeframe,
                    title: `${keywords[0]} Awareness in ${jsonData.industry}`,
                    engagementScore: Math.floor(Math.random() * 20) + 40,
                    prediction: `Based on ${jsonData.dataSources.join(', ')}, "${keywords[0]}" shows 15% interest in ${jsonData.industry}. Watch-and-learn approach for ${jsonData.timeframe.toLowerCase()}.`,
                    actionItems: [
                        `Subscribe to ${keywords[0]} newsletters`,
                        `Attend industry webinars`,
                        `Run small $500 test on ${jsonData.dataSources[0]}`,
                        `Set aside 5% exploration budget`,
                        `Document competitor strategies`
                    ]
                }
            ];

            setTrendsAction(newTrends);
            setIsGenerating(false);
            setGeneratedAction(true);

        }, 2000); // 2 sec daylay
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
