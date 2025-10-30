import { useFormContext } from "../../context/FormContext";


export default function TrendPreview({
    currentStep,
    generated
}: {
    currentStep: number
    generated: boolean
}) {
    const { jsonData } = useFormContext();  // new context

    if (!generated) {
        if (jsonData) {
            return (
                <div className='flex flex-col items-center justify-center'>
                    <div className=" m-6 flex flex-col justify-center items-center w-100 h-120 shadow-sm border-1 border-gray-300 rounded-xl">

                    </div >

                </div >
            )
        }
    }
}
