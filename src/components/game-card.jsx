import Link from "next/link";

export default function GameCard({ image, backgroundColor, title, id }) {
    return (
        <Link
            href={`/game/${id}`}
            style={{ backgroundColor: `#${backgroundColor}` }}
            className="w-[20%] rounded-[5px] overflow-hidden"
        >
            <img
                src={image}
                className="object-cover h-[400px]"
                alt=""
            />
            <p className="text-center">{title}</p>
        </Link>
    )
}