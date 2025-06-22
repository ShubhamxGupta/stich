import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupCardType }) => {
    const {
        _id,
        description,
        image,
        category,
        title,
        author: { _id: authorId, name: authorName },
        _createdAt,
        views,
    } = post;
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">{formatDate(_createdAt)}</p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-[#EE2B69]" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">
                            {authorName}
                        </p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <p className="text-26-semibold line-clamp-1">{title}</p>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image
                        src="https://picsum.photos/48"
                        alt="placeholder"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">{description}</p>
                <img
                    src={image}
                    alt="placeholder"
                    className="startup-card_img"
                />
            </Link>
            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button
                    className="rounded-full bg-black font-medium text-[16px] text-white px-5 py-3"
                    asChild>
                    <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>
        </li>
    );
};

export default StartupCard;
