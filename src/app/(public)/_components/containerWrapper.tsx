import Loading from "@/components/loading"

interface IContainerWrapper {
    children: React.ReactNode;
    isLoading: boolean;
}

/**
 * For Preventing ClientSideRender
 */
const ContainerWrapper = ({ children, isLoading } : IContainerWrapper) => {
    return (
        <Loading isLoaded={!isLoading}>
            <div className="relative min-h-screen overflow-x-hidden bg-cryaistal bg-[length:120%_300%] bg-top">
                {children}
            </div>
        </Loading>
    )
}

export default ContainerWrapper