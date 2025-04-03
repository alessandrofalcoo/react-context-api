
export default function PostCard({ person }) {
    return (
        <>

            <div className="card shadow-lg border-0 " style={{ width: "18rem" }}>
                <div className="card-header bg-success text-white text-center">
                    <h5 className="card-title mb-0 text-uppercase">{person.name}</h5>
                </div>
                <div className="card-body text-center">
                    <p className="card-text">
                        <strong>Età:</strong> {person.age}
                    </p>
                    <p className="card-text">
                        <strong>Città:</strong> {person.city}
                    </p>
                </div>
            </div>


        </>
    )
}