import { getGameById, getGameTrailers } from "@/actions/serverActions";
import Image from "next/image";

export default async function Page({ params, searchParams }) {

    const resolvedParams = await params;
    const searchParamsResueltos = await searchParams;

    const { id } = resolvedParams;
    const { name, background_image, description, rating } = await getGameById(id);

    console.log('search params son', searchParamsResueltos)

    return (
        <>
            <div className="flex gap-10">
                <div className="relative h-[600px] w-[30%]">
                    <Image
                        fill
                        className="object-cover"
                        sizes="100vw"
                        src={background_image}
                    />
                </div>
                <div className="w-[70%]">
                    <h2 className="font-bold text-3xl">{name}</h2>
                    {description}
                    <p><b>Rating:</b> {rating}</p>
                </div>
            </div>
        </>
    )
}