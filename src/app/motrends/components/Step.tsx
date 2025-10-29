'use client';

const steps = [ // for each step, have each icon
    { id: 1, title: "Industry" },
    { id: 2, title: "Sources" },
    { id: 3, title: "Details" },
    { id: 4, title: "Preview" },
];

export default function Step({
    isReady,
    currentStep
}: {
    isReady: (ready: boolean) => void;
    currentStep: number
}) {
    return (
        <div>

        </div>
    )

}
