import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import litera from "../img/litera.png";
import { useState } from "react";
import { useEffect } from "react";
import { buku } from "../data/data";

export default function Navbar({ chart }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top shadow-sm" style={{ zIndex: 1000 }}>
            <div className="container-fluid px-4 d-flex align-items-center">
                <Link to="/">
                    <img src={litera}
                        style={{ height: "50px", marginRight: "15px" }} />
                </Link>
                <Search buku={buku} />
                <Icon chart={chart} />
            </div>
        </nav>
    );
}

function Search({ buku }) {
    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (search.trim() === "") {
            setFilterData([]);
            return;
        }

        const result = buku.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );

        setFilterData(result);
        setShowList(true);
    }, [search, buku]);

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (filterData.length > 0) {
            window.location.href = `/detail/${filterData[0].id}`;
            setShowList(false);
        }
    };

    return (
        <div style={{ position: "relative", width: "55%" }}>
            <form onSubmit={HandleSubmit}>
                <input
                    className="form-control shadow-sm"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="🔎 Cari produk"
                    aria-label="Search"
                    onFocus={() => search && setShowList(true)}
                    style={{
                        borderRadius: "25px",
                        paddingLeft: "18px",
                    }}
                />
            </form>

            {showList && search && filterData.length > 0 && (
                <ul
                    className="list-group shadow-sm"
                    style={{
                        position: "absolute",
                        top: "45px",
                        width: "100%",
                        borderRadius: "15px",
                        zIndex: 999,
                        maxHeight: "260px",
                        overflowY: "auto",
                        background: "white"
                    }}
                >
                    {filterData.map(item => (
                        <Link
                            to={`/detail/${item.id}`}
                            key={item.id}
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setShowList(false)}
                        >
                            <li
                                className="list-group-item d-flex align-items-center"
                                style={{
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "10px 14px",
                                    gap: "12px"
                                }}
                                onMouseEnter={(e) => (e.target.style.background = "#f3f4f6")}
                                onMouseLeave={(e) => (e.target.style.background = "white")}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: "40px",
                                        height: "55px",
                                        objectFit: "cover",
                                        borderRadius: "6px",
                                    }}
                                />
                                <div>
                                    <span className="fw-bold">{item.title}</span> <br />
                                    <small className="text-muted">{item.writer}</small>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}


function Icon({ chart = [] }) {
    return (
        <div className="d-flex align-items-center gap-4">
            <Notification icon={faBell} />
            <Notification icon={faTruck} />

            <Link to="/checkout" className="text-secondary position-relative">
                <FontAwesomeIcon icon={faCartArrowDown} className="text-primary" style={{ fontSize: '20px' }} />
                <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.6rem" }}
                >
                    {chart.length > 0 && chart.length}
                </span>
            </Link>

            <Link to="/profil" className="text-secondary">
                <FontAwesomeIcon icon={faUser} className="text-primary" style={{ fontSize: '20px' }} />
            </Link>
        </div>
    )
}

function Notification({ icon }) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <FontAwesomeIcon
                icon={icon}
                style={{ fontSize: "22px", cursor: "pointer", color: "#1A73E8" }}
                onClick={() => setOpen(!open)}
            />

            {open && (
                <div className="notif-popup">
                    <div className="arrow-up"></div>
                    Nothing Here.
                </div>
            )}
        </div>
    )
}