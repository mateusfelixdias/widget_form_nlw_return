import { api } from "../../../lib/api";
import { ArrowLeft } from "phosphor-react";
import { CloseButtom } from "../../CloseButtom";
import { FeedbackType, feedbackTypes } from "..";
import { FormEvent, useState } from "react";
import { Loading } from "../../Loading";
import { ScreenshotButton} from "../ScreenshostButton";

interface FeedBackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestarRequested: () => void;
  onFeedbackSent: () => void;
};

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestarRequested,
  onFeedbackSent,
}: FeedBackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendngFeedback, setIsSendFeedback] = useState(false);

  const feedbackinfo = feedbackTypes[feedbackType];

  async function handleSumitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendFeedback(true);

    const feedback = await api.post("/feedbacks", {
      type: feedbackType,
      comment,
    });

    console.log(feedback.data);
    setIsSendFeedback(false);
    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestarRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 items-center gap-2">
          <span className="w-6 h-6 pr-6">{feedbackinfo.title}</span>
        </span>

        <CloseButtom />
      </header>

      <form onSubmit={handleSumitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detelhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendngFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-500 transsition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendngFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};