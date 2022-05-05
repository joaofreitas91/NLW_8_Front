import { CircleNotch } from "phosphor-react";

export function Loading() {
    return (
        <div className="flex items-center justify-center w-6 h-6 overflow-hidden">
            <CircleNotch weight="bold" className="animate-spin w-4 h-4" />
        </div>
    );
}
