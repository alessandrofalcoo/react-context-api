import { useContext } from "react";
import CountContext from "../contexts/CountContext";
import PostCard from "./PostCard";

export default function PostsList() {
    const { people } = useContext(CountContext)
    console.log(people);
    console.log(PostCard);


    return (
        <>
            {

            }
        </>
    )
}