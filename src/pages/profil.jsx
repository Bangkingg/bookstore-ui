import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilUser from "../img/profil_user.jpg";
import { faMars, faVenus, faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Profil() {
    return (
        <div className="container p-3">
            <div className="px-3 mt-4 d-flex" style={{ gap: "70px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                    <img
                        src={ProfilUser}
                        alt="Profil User"
                        style={{
                            width: "220px",
                            height: "220px",
                            objectFit: "cover",
                            borderRadius: "5px",
                        }}
                    />
                    <button className="btn text-white" style={{ background: "#4A90E2", width: "150px" }}>
                        Change Avatar
                    </button>
                </div>
                <div>
                    <h5 className="fw-bold mb-4">Profil User</h5>
                    <div className="mb-4 d-flex align-items-center" style={{ gap: "100px" }}>
                        <p className="penulis" style={{ margin: 0, width: "120px" }}>Username</p>
                        <input
                            type="text"
                            name="username"
                            placeholder="@username"
                            style={{ flex: 1 }}
                        />
                    </div>
                    <div className="mb-4 d-flex align-items-center" style={{ gap: "100px" }}>
                        <p className="penulis" style={{ margin: 0, width: "120px" }}>Real Name</p>
                        <p className="penulis" style={{ margin: 0 }}>Random User</p>
                    </div>
                    <div className="mb-4 d-flex align-items-center">
                        <button
                            className="btn text-white"
                            style={{ background: "#4A90E2", width: "120px" }}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div style={{ background: "#F6F6F6", padding: "20px", borderRadius: "10px" }}>
                <Item label="Email User" value="Example@User.com" />
                <div className="mb-4 d-flex align-items-center" style={{ gap: "100px" }}>
                    <p className="penulis" style={{ margin: 0, width: "320px" }}>Gender</p>
                    <GenderOption icon={faMars} label="Male" />
                    <GenderOption icon={faVenus} label="Female" />
                    <GenderOption icon={faQuestion} label="Rather not Say" />
                </div>
                <Item label="Date of Birth" value="11/09/2001" />
                <Item label="Phone Number" value="+1 453 xxx xxxx" />
                <Item
                    label="Address"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus nulla, maximus nec diam id."
                />
            </div>
        </div>
    );
}

function Item({ label, value }) {
    return (
        <div className="mb-4 d-flex align-items-start" style={{ gap: "100px" }}>
            <p className="penulis" style={{ margin: 0, width: "320px" }}>{label}</p>
            <p className="penulis" style={{ margin: 0, maxWidth: "500px" }}>{value}</p>
        </div>
    );
}

function GenderOption({ icon, label }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <input type="radio" name="gender" />
            <FontAwesomeIcon icon={icon} />
            {label}
        </div>
    );
}
