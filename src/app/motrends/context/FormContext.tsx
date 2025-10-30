'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface jsonData { // set jsondata types
    industry: string;
    dataSources: string[];
    keywords: string;
    trendType: string;
    timeframe: string;
    customNotes: string;
}

// set types from state
interface FormContextType {
    jsonData: jsonData;
    setJSONData: (data: jsonData) => void;
}
// create context with typescript handling
const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
    const [jsonData, setJSONData] = useState<jsonData>({ // set state with default json
        industry: '',
        dataSources: [],
        keywords: '',
        trendType: '',
        timeframe: '',
        customNotes: '',
    })

    return (
        <FormContext.Provider value={{ jsonData, setJSONData }}>
            {children}
        </FormContext.Provider>
    )
}
// use json
export function useFormContext() {
    const context = useContext(FormContext); // sets context
    if (!context) // error handling
        throw new Error('useFormHandling not withing FormProvider')
    return context;
}




