import { useContext } from "react";
import CountContext from "../contexts/CountContext";
import PostCard from "./PostCard";

export default function PostsList() {
    const { people } = useContext(CountContext)
    console.log(people);

    return (
        <>
            <div className="container">
                <div className="row g-4 d-flex justify-content-center">
                    {people.map(person => (
                        <PostCard key={person.id} person={person} />

                    ))}
                </div>
            </div>
        </>
    )
}