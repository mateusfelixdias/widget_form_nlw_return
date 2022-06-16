import Bug from "../../image/Bug.png";
import Ideia from "../../image/Ideia.png";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypesStep";
import { useState } from "react";
import Thought from "../../image/Thought.png"


export const feedbackTypes = {
    BUG: {
       image: {
        alt: 'imagem de um inseto.',
        img: Bug
       },
       title: 'Problema',
    },
    IDEA: {
        image: {
            alt: 'imagem de uma lâmpada.',
            img: Ideia
        },
        title: 'Ideia'
    },
    OTHER: {
        image: {
            alt: 'imagem de uma nuvem.',
            img: Thought
        },
        title: 'Outro'
    }
};


export type FeedbackType = keyof typeof feedbackTypes;

export function Widgetform() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);


    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedbackType(null)
    } ;   

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

                { feedbackSent ? (
                    <FeedbackSuccessStep onFeedbackRestarRequested={handleRestartFeedback}/>
                ) : (
                    <>
                       {!feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                       ): (
                        <FeedbackContentStep  
                            feedbackType={feedbackType}
                            onFeedbackRestarRequested={handleRestartFeedback}
                            onFeedbackSent={ () => setFeedbackSent(true) }
                        />
                       )}
                    </>
                )}
            <footer className="text-xs text-neutral-400">
                Ferito Com Carinho Pelo <a className="underline underline-offset-2 text-blue-200" href="https://github.com/mateusfelixdias/widget_form_nlw_return">Mateus Felix.</a>
            </footer>  
        </div>
    );
};