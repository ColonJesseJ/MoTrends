import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const MoLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-screen overflow-x-hidden">
            <Header />
            <div className="flex flex-1 overflow-x-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#FCFCFD]">
                    {children}
                </main>
            </div>
        </div>
    )
}
export default MoLayout;
