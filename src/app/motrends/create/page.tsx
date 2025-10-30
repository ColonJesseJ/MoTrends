import CreateDash from "../components/createComp/CreateDash";

const Create: React.FC = () => {

    return (
        <div>
            <h1 className="text-4xl flex mt-10 font-extrabold justify-center">Generate Trends</h1>
            <h3 className="text-cyan-600 text-sm flex justify-center font-extrabold mt-2">Need Help?</h3>
            <div className="flex justify-center items-center mt-4 px-2">
                <CreateDash />
            </div>
        </div>
    )
}
export default Create;
