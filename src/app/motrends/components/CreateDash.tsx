'use client';

import VisualBar from "./Visualbar";
import { useState } from "react";

const CreateDash: React.FC = () => {
    // dash with logic
    const [step, setStep] = useState(4); // steps for visual progress


    return ( // make white dash, if sm-screen then put right component on bottom  
        <div className="bg-white shadow-sm rounded-lg">
            <div>
                {/* visual bar, with steps */}
                <VisualBar currentStep={step} />
                {/* step component (always below visual), and change depending on step*/}

                {/* buttons */}
                <div>
                    <button>

                    </button>
                    <button>

                    </button>
                </div>

            </div>
            {/* seperate so output screen goes on the right side when not small*/}
        </div>
    )
}

export default CreateDash;
