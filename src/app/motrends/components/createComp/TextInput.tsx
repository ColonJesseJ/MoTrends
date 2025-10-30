'use client'

import { useEffect, useState } from "react"
import { useFormContext } from "../../context/FormContext";

export default function TextInput() {
    const { jsonData, setJSONData } = useFormContext();  // new context
    const [value, setValue] = useState(jsonData.keywords || "");

    useEffect(() => { // syncs state with context
        setValue(jsonData.keywords || "");
    }, [jsonData.keywords]);

    return (
        <div className="flex justify-center w-full max-w-full">
            <input
                type="text"
                value={value} //value will be jsondata unless empty
                className={`text-xl p-2 w-104 font-semibold text-white rounded-xl flex justify-center 
                ${jsonData.keywords ? "bg-blue-600" : "bg-gray-400"
                    }`}
                onChange={(e) => setValue(e.target.value)} // change text
                onBlur={() => setJSONData({ ...jsonData, keywords: value })} // save when exit
                placeholder="             keyword, keyword, keyword"
                required
            />

        </div>
    )
}

