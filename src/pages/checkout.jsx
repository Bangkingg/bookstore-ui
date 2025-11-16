import { faTruckArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Checkout({ chart = [] }) {
    return (
        <div className="container mt-4 d-flex flex-column" style={{ minHeight: "calc(100vh - 120px)" }}>
            <h3 className="text-center mb-4">Your Cart</h3>

            {chart.length === 0 ? (
                <p className="text-muted text-center">Keranjang masih kosong 🛒</p>
            ) : (
                chart.map((item, index) => (
                    <div key={index}>
                        <div
                            className="d-flex mb-4"
                            style={{ gap: "100px", alignItems: "flex-start" }}
                        >
                            <div className="border-0 shadow-sm">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: "120px",
                                        height: "160px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                    }}
                                />
                            </div>

                            <div className="flex-grow-1">
                                <h4 className="fw-bold">{item.title}</h4>

                                <div
                                    className="d-grid"
                                    style={{
                                        gridTemplateColumns: "120px 1fr",
                                        rowGap: "6px",
                                    }}
                                >
                                    <span>Writer</span>
                                    <span>{item.writer}</span>

                                    <span>Price</span>
                                    <span>IDR {item.price.toLocaleString()}</span>

                                    <span>Quantity</span>
                                    <span>{item.quantity}</span>
                                </div>

                                <div
                                    className="d-grid"
                                    style={{
                                        gridTemplateColumns: "120px 1fr",
                                        marginTop: "15px",
                                    }}
                                >
                                    <h5>Total</h5>
                                    <h5>IDR {(item.price * item.quantity).toLocaleString()}</h5>
                                </div>
                            </div>
                        </div>

                        {index !== chart.length - 1 && (
                            <hr
                                style={{
                                    border: "none",
                                    borderTop: "1px dashed black",
                                    margin: "15px 0",
                                }}
                            />
                        )}
                    </div>
                ))
            )}
            <div className="mt-auto">
                <CartTotal chart={chart} />
            </div>
        </div>
    );
}

function CartTotal({ chart = [] }) {
    const totalPrice = chart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = chart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div
            className="container py-3"
            style={{
                position: "sticky",
                bottom: 0,
                background: "#F6F6F6",
                borderTop: "1px solid #ddd",
                zIndex: 900,
            }}
        >
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-grid" style={{ gridTemplateColumns: "150px 1fr", rowGap: "10px" }}>
                    <h5 className="m-0">Total Items</h5>
                    <h5 className="m-0">{totalItems}</h5>

                    <h5 className="m-0">Price</h5>
                    <h5 className="m-0">IDR {totalPrice.toLocaleString()}</h5>
                </div>
                <button
                    className="btn text-white px-4 py-2"
                    style={{ background: "#4A90E2", borderRadius: "12px" }}
                >
                    <FontAwesomeIcon icon={faTruckArrowRight} className="me-2" />
                    Checkout
                </button>

            </div>
        </div>
    );
}
