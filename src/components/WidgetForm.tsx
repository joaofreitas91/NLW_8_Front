import { useState } from "react";
import { CloseButton } from "./CloseButton";
import bug from "../assets/bug.svg";
import idea from "../assets/idea.svg";
import thought from "../assets/thought.svg";

const feedbackTypes = {
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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header className="flex flex-col items-center">
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            {!feedbackType ? (
                <div className="flex justify-center py-8 gap-2 w-full">
                    {Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            <button
                                className="flex flex-1 flex-col items-center gap-2 py-8 w-24 bg-zinc-800 rounded-lg border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                key={key}
                                type="button"
                                onClick={() =>
                                    setFeedbackType(key as FeedbackType)
                                }
                            >
                                <img
                                    src={value.Image.src}
                                    alt={value.Image.alt}
                                />
                                <span>{value.title}</span>
                            </button>
                        );
                    })}
                </div>
            ) : (
                <span>{feedbackType}</span>
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
