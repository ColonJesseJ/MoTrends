import CreateDash from "../components/CreateDash";

const Create: React.FC = () => {

    return (
        <div>
            <h1 className="text-4xl flex mt-10 font-extrabold justify-center">Generate Trends</h1>
            <h3 className="text-blue-600 text-sm flex justify-center font-extrabold mt-2">Got Stuck?</h3>
            <div className="flex flex-col md:flex-row justify-center items-center mt-4 px-2">
                <CreateDash />
            </div>
        </div>
    )
}
export default Create;
