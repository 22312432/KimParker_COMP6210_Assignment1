import JSON from "./SCP_Data.json";


const SCP = JSON.map(
    (scp) => {
        return (
            <div key={scp.scpNumber} className='container card' style={{ width: "80%" }}>
                <div className='card-body'>
                <img src="/images/SCP-Logo.png" alt="" style={{marginLeft: "20px"}} width="240" height="80"/>
                    <img className="card-img-top" style={{marginTop:"-80px"}}src={scp.image}  alt="" />
                    <h3 className="card-text"><strong>Item Number: {scp.scpNumber}</strong> </h3>
                    <h2 className="card-text"><strong>Object Class: </strong><em>{scp.objectClass}</em></h2>
                    <p className="card-text">{scp.scp}</p>
                    <p className="card-text"><h5><strong>Description: </strong></h5>{scp.description}</p>
                    <p className="card-text"><h5><strong>Reference: </strong></h5>{scp.referenece}</p>
                    <p className="card-text"><strong>Other: </strong>{scp.other}</p>
                </div>
            </div>

        );
    }
);

function SCPs() {
    return (
        <div>
            {SCP}
        </div>
    )
};

export default SCPs;
