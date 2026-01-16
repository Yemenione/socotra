import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getImageUrl(path: string | null | undefined) {
    if (!path) return "/images/placeholder-food.jpg"; // Default placeholder
    if (path.startsWith("http")) return path;

    // If it's a local upload, check if we need to serve it from a remote source
    // This is useful for:
    // 1. Local development (fetching from prod)
    // 2. Staging/Temp deployments (fetching from main prod server)
    if (path.startsWith("/uploads")) {
        const remoteUrl = process.env.NEXT_PUBLIC_REMOTE_URL;
        if (remoteUrl) {
            return `${remoteUrl}${path}`;
        }
    }

    return path;
}
