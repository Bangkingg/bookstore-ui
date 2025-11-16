import { Link } from "react-router-dom";
import { buku } from "../../data/data.jsx";

const fav = buku.filter(item => item.favorite == true);

export default function Favorite({ addToChart }) {
    return (
        <div className="container p-3">
            <h2 className="text-center fw-bold mb-5">BEST SELLER</h2>
            {fav.map((item, index) => (
                <div
                    key={index}
                    className="px-3 mb-4"
                    style={{
                        display: "flex",
                        gap: "100px",
                    }}
                >
                    <div className="border-0 shadow-sm">
                        <img
                            src={item.img}
                            alt={item.title}
                            style={{
                                width: "300px",
                                height: "400px",
                                objectFit: "cover",
                                borderRadius: "5px"
                            }}
                        />
                    </div>
                    <div>
                        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h4 className="fw-bold mb-1">{item.title}</h4>
                        </Link>
                        <p className="text-muted mb-4 penulis" style={{ fontSize: "0.9rem" }}>
                            {item.writer}
                        </p>
                        <p className="deskripsi mb-4">{item.description}</p>
                        <button
                            className="btn btn-sm text-white"
                            style={{ background: "#4A90E2" }}
                            onClick={() => addToChart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
