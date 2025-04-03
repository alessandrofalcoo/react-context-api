
export default function PostCard({ person }) {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{person.name}</h4>
                        <p className="card-text fw-bold">Età: {person.age}</p>
                    </div>
                </div>

            </div>

        </>
    )
}