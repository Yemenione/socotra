import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getImageUrl(path: string | null | undefined) {
    if (!path) return "/images/placeholder-food.jpg"; // Default placeholder
    if (path.startsWith("http")) return path;

    // In development, if the image is in /uploads, it might be on the remote server
    if (process.env.NODE_ENV === "development" && path.startsWith("/uploads")) {
        const remoteUrl = process.env.NEXT_PUBLIC_REMOTE_URL;
        if (remoteUrl) {
            return `${remoteUrl}${path}`;
        }
    }

    return path;
}
