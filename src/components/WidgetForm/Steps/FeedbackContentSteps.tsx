import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".";
import { CloseButton } from "../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentProps {
    feedbackType: FeedbackType;
    onFeedbackRestart: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentSteps({
    feedbackType,
    onFeedbackRestart,
    onFeedbackSent,
}: FeedbackContentProps) {
    const [screenShot, setScreenShot] = useState<string | null>(null);
    const [comment, setComment] = useState("");
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        onFeedbackSent();
    }

    return (
        <>
            <header className="flex flex-col items-center">
                <button
                    onClick={onFeedbackRestart}
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.Image.src}
                        alt={feedbackTypeInfo.Image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className=" min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-2 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin pr-3"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onInput={(event: FormEvent) => {
                        const { target } = event;
                        if (target)
                            setComment((target as HTMLButtonElement).value);
                    }}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        onScreenShotTook={setScreenShot}
                        screenShot={screenShot}
                    />
                    <button
                        type="submit"
                        disabled={!comment && true}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    );
}
