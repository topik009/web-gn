import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image, { type StaticImageData } from "next/image";
import agro from "@/public/img/local.jpg";
import regional from "@/public/img/regional.jpg";
import insti from "@/public/img/insti.jpeg";

const reviews = [
    { body: "Gobiernos Locales", img: agro },
    { body: "Gobiernos Regionales", img: regional },
    { body: "Instituciones", img: insti },
];

const firstRow = reviews;

const ReviewCard = ({ img, body }: { img: StaticImageData; body: string }) => {
    return (
        <figure
        className={cn(
            "relative h-52 w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
        >
        <blockquote className="mt-2 text-xl text-center">{body}</blockquote>
        <div className="flex justify-center mt-3">
            <Image
            src={img}
            alt={body}
            width={180}
            height={180}
            className="rounded-lg object-cover w-[180px] h-auto"
            />
        </div>
        </figure>
    );
};

export function MarqueeHorizontalDos() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden min-w-0">
            <h1 className="text-3xl mb-7 md:mt-0 mt-10 text-orange-400">Sector público</h1>

            <div className="relative inset-x-0 w-full overflow-hidden contain-paint">
                <Marquee
                pauseOnHover
                className="w-full [--duration:15s] justify-start"
                >
                {firstRow.map((review) => (
                    <div key={review.body} className="shrink-0">
                    <ReviewCard {...review} />
                    </div>
                ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
            </div>
        </div>
    );
}