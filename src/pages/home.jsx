import Carosel from "../components/home/carosel";
import Produk from "../components/home/produk";
import Favorite from "../components/home/favorite";
import "../style/index.css";

export default function Home({ addToChart }) {

    return (
        <div>
            <Carosel addToChart={addToChart} />
            <Produk addToChart={addToChart} />
            <Favorite addToChart={addToChart} />
        </div>
    )
}