import Slider from "react-slick";
import { buku } from "../../data/data";
import { Link } from "react-router-dom";

const display = buku.filter(item => item.display == true);

export default function Produk({ addToChart }) {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992, // tablet
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // hp
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576, // layar kecil
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container-fluid p-4 produk-section">
            <h2 className="text-center fw-bold mb-5">RECENTLY</h2>
            <Slider {...settings}>
                {display.map((item, index) => (
                    <div key={index} className="px-3">
                        <div className="card border-0 shadow-sm">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="card-img-top"
                                style={{
                                    height: "270px",
                                    objectFit: "cover",
                                    borderRadius: "5px 5px 0 0",
                                }}
                            />
                            <div className="card-body text-center p-3">
                                <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <h6 className="fw-bold mb-1">{item.title}</h6>
                                </Link>
                                <p className="text-muted mb-2 penulis" style={{ fontSize: "0.9rem" }}>
                                    {item.writer}
                                </p>
                                <button className="btn btn-sm text-white" style={{ background: "#4A90E2" }} onClick={() => addToChart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
