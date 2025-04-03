export default function PostCard({ person }) {
    return (
        <>
            <div className="card">
                <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{person}</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>

        </>
    )
}