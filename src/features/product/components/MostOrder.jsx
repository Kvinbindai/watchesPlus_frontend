import CardProduct from "./CardProduct";
import Icon from "../../../components/Icon";
import useProduct from "../../../hooks/useProduct";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import IconNoHover from "../../../components/IconNoHover"

export default function MostOrder() {
    const { mostOrders } = useProduct();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="text-xl font-semibold">Recommend</div>
                <div className="flex flex-wrap gap-4">
                    {mostOrders.length > 0 ? (
                        mostOrders.map((product, index) => (
                            <CardProduct data={product.watch} key={index} />
                        ))
                    ) : (
                        <div className="w-full flex flex-col justify-center items-center">
                            <IconNoHover name="FileSearch" size="100" />
                            <div>No results found</div>
                            <div>Try different or more general keywords</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Button bg='scarlet' color="white" onClick={() => navigate('/search')}>
                    More Gallery
                </Button>
            </div>
        </>
    );
}
