import Slider from "react-slick";
import { buku } from "../../data/data";
import { Link } from "react-router-dom";


const Slide = buku.filter(item => item.carosel == true);

export default function Carosel({ addToChart }) {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carosel-section">
            <Slider {...settings}>
                {Slide.map((item, index) => (
                    <div
                        className="slide-item p-5 bg-light"
                        key={index}
                    >
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <h2 className="fw-bold">{item.title}</h2>
                                    </Link>
                                    <p className="text-muted mb-2 penulis">{item.writer}</p>
                                    <p className="deskripsi">{item.description}</p>
                                    <button className="btn text-white" style={{ background: "#4A90E2" }} onClick={() => addToChart(item)}>Add to Cart</button>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-3 text-center">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        style={{ marginRight: '10px', maxHeight: "300px", borderRadius: "10px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
