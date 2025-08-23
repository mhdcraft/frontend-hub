import { BsTranslate } from "react-icons/bs";
import TranslatedForm from "./components/TranslatedForm";
import TranslatingForm from "./components/TranslatingForm";

function TranslateLayout({
  isLoading,
  translatedText,
  rightLanguage,
  onTranslate,
  onCopy,
  onSwap,
  onSpeak,
}) {
  return (
    <div className="flex items-center justify-center mt-12 md:h-screen md:mt-0">
      <div className="container m-auto xl:max-w-screen-xl">
        <div className="flex items-center justify-center gap-x-2 text-secondary-0 mb-12">
          <span>
            <BsTranslate size="36" />
          </span>
          <h1 className="font-bold text-2xl">Translytic</h1>
        </div>
        <div className="flex flex-col gap-3 p-4 md:flex-row">
          <TranslatingForm
            rightLanguage={rightLanguage}
            onTranslate={onTranslate}
            onCopy={onCopy}
            onSpeak={onSpeak}
          />
          <TranslatedForm
            isLoading={isLoading}
            translatedText={translatedText}
            rightLanguage={rightLanguage}
            onCopy={onCopy}
            onSwap={onSwap}
            onSpeak={onSpeak}
          />
        </div>
      </div>
    </div>
  );
}

export default TranslateLayout;
