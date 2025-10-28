import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const MoLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-screen">
            {/* Header at the top*/}
            <Header />
            <div className="flex flex-1 ">
                {/* Sidebar right next to the main content*/}
                <Sidebar />
                {/* Main content next to sidebar*/}
                <main className="flex flex-1 overflow-auto justify-center">
                    {children}
                </main>
            </div>
        </div>
    )
}
export default MoLayout;
