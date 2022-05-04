import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeSteps({
    onFeedbackTypeChanged,
}: FeedbackTypeProps) {
    return (
        <>
            <header className="flex flex-col items-center">
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex justify-center py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            className="flex flex-1 flex-col items-center gap-2 py-8 w-24 bg-zinc-800 rounded-lg border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            key={key}
                            type="button"
                            onClick={() =>
                                onFeedbackTypeChanged(key as FeedbackType)
                            }
                        >
                            <img src={value.Image.src} alt={value.Image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
