import Link from "next/link";

export default function PersonName({person}) {
    return (
        person.link == "" ? <span>{person.name}</span> : <Link href={person.link} target="_blank">{person.name}</Link>
    )
}