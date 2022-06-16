import { CloseButtom } from "../../CloseButtom";
import { FeedbackType, feedbackTypes } from "..";

interface FeedbackTypeStepPros {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
};

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepPros) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 pr-4">Deixe seu feedback</span>
        <CloseButtom />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, values]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center grap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={values.image.img} alt={values.image.alt} />
              <span> {values.title} </span>
            </button>
          );
        })}
      </div>
    </>
  );
};