import ViewDash from "../components/viewComp/ViewDash"

export default function Page() {

    return (
        <div>
            <h1 className="text-4xl flex mt-10 font-extrabold justify-center">Generate Trends</h1>
            <h3 className="text-cyan-600 text-sm flex justify-center font-extrabold mt-2">Need Help?</h3>
            <div className="flex justify-end items-center mt-4 px-2">
                {<ViewDash />}
            </div>
        </div>
    )
}
