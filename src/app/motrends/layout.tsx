import Header from "./components/layoutComp/Header"
import Sidebar from "./components/layoutComp/Sidebar"
import { FormProvider } from "./context/FormContext";

const MoLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <FormProvider>
            <div className="flex flex-col h-screen overflow-x-hidden">
                <Header />
                <div className="flex flex-1 overflow-x-hidden">
                    <Sidebar />
                    <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFD]">
                        {children}
                    </main>
                </div>
            </div>
        </FormProvider>
    )
}
export default MoLayout;
