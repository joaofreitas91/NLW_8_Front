import { useState } from "react";
import bug from "../../../assets/bug.svg";
import idea from "../../../assets/idea.svg";
import thought from "../../../assets/thought.svg";
import { FeedbackTypeSteps } from "./FeedbackTypeSteps";
import { FeedbackContentSteps } from "./FeedbackContentSteps";
import { FeedbackSuccessStep as FeedbackSuccessStep } from "./FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        Image: {
            src: bug,
            alt: "Imagem de um inseto",
        },
    },
    IDEA: {
        title: "Ideia",
        Image: {
            src: idea,
            alt: "Imagem de uma lâmpada",
        },
    },
    OTHER: {
        title: "Outro",
        Image: {
            src: thought,
            alt: "Imagem de um balão de ideia",
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep
                    onFeedbackRestart={handleRestartFeedback}
                />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeSteps
                            onFeedbackTypeChanged={setFeedbackType}
                        />
                    ) : (
                        <FeedbackContentSteps
                            feedbackType={feedbackType as FeedbackType}
                            onFeedbackRestart={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela{" "}
                <a
                    className="underline underline-offset-2  hover:text-zinc-100"
                    href="https://www.rocketseat.com.br/"
                >
                    Rocketseat
                </a>
            </footer>
        </div>
    );
}
