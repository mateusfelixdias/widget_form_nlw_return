import { CloseButtom } from "../../CloseButtom";
import Sucess from "../../../image/Sucess.png";

interface FeedbackSuccessStepProps {
    onFeedbackRestarRequested: () => void;

};

export function FeedbackSuccessStep(
    { onFeedbackRestarRequested }: 
    FeedbackSuccessStepProps){
    return (
        <>
            <header className="flex flex-col items-center">
                <CloseButtom />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">

                <img src={Sucess} alt="Secesso." />
                <span className="pt-2">
                    Agradecemos o Feedback.
                </span>

                <button
                type="button"
                    onClick={ onFeedbackRestarRequested }
                    className="py-2 px-6 mt-6 bg-zinc-600 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-500 transsition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Quero enviar outro
                </button>

            </div>
        </>
    );
};
