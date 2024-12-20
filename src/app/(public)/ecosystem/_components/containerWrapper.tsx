import Loading from "@/components/loading"

interface IContainerWrapper {
    children: React.ReactNode;
    isLoaded: boolean;
}

/**
 * For Preventing ClientSideRender
 */
const ContainerWrapper = ({ children, isLoaded }: IContainerWrapper) => {
    return (
        <Loading isLoaded={true}>
            <div className="bg-cryaistal bg-[length:120%_300%] bg-top">
                {children}
            </div>
        </Loading>
    )
}

export default ContainerWrapper