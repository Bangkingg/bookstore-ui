import { useParams } from "react-router-dom";
import { buku } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Detail({ addToChart }) {
    const { id } = useParams();

    const item = buku.find(i => i.id === parseInt(id));

    if (!item) {
        return (
            <div className="container mt-5 text-center">
                <h3>Item tidak ditemukan 😢</h3>
            </div>
        );
    }

    return (
        <div className="container p-3">
            <div
                className="px-3 mb-4 mt-4"
                style={{
                    display: "flex",
                    gap: "60px",
                    alignItems: "center",
                }}
            >
                <div className="border-0 shadow-sm">
                    <img
                        src={item.img}
                        alt={item.title}
                        style={{
                            width: "200px",
                            height: "260px",
                            objectFit: "cover",
                            borderRadius: "5px"
                        }}
                    />
                </div>
                <div className="d-flex align-items-center" style={{ gap: "200px" }}>
                    <div style={{ flex: 1 }}>
                        <p className="penulis mb-2">
                            {item.writer}
                        </p>
                        <h4 className="fw-bold mb-3">{item.title}</h4>
                        <p>4.9/5.0 | 2432 Sold</p>
                    </div>
                    <div>
                        <p className="mb-2">Disc.20%</p>
                        <h4 className="fw-bold mb-3">IDR. {item.price.toLocaleString()}</h4>
                        <button
                            className="btn btn-sm w-100 text-white" 
                            style={{background: "#4A90E2"}}
                            onClick={() => addToChart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <h4 className="mb-3">Synopsis</h4>
            <p dangerouslySetInnerHTML={{ __html: item.synopsis }} />
            <hr />
            <h4>Leave The Ratings: </h4>
            <div className="d-flex" style={{ gap: '25px' }}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="d-flex">
                <textarea className="w-100 mt-3 mb-3" rows={4}></textarea>
            </div>
            <div style={{ textAlign: 'right' }}>
                <button
                    className="btn btn-sm text-white" style={{ background: "#4A90E2", width: '100px' }}
                >
                    Save
                </button>
            </div>
        </div >
    );
}