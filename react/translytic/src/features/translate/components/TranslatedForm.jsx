import FormHeader from "../../../ui/FormHeader";
import FormBody from "../../../ui/FormBody";
import FormFooter from "../../../ui/FormFooter";
import useTranslateParams from "../../../hooks/useTranslateParams";
import { MdSwapVert } from "react-icons/md";

const languageItem = [
  {
    lable: "France",
    value: "fr",
  },
  {
    lable: "English",
    value: "en",
  },
  {
    lable: "Spain",
    value: "es",
  },
  {
    lable: "Persian",
    value: "fa",
  },
];

function TranslatedForm({
  isLoading,
  translatedText,
  rightLanguage,
  onCopy,
  onSwap,
  onSpeak,
}) {
  const { target, setLangPair } = useTranslateParams();

  return (
    <div className="translate__wrapper bg-primary-500">
      <FormHeader
        languageItem={languageItem}
        currentLangpair={target}
        handleLang={(value) => setLangPair({ newTgt: value })}
      >
        <button onClick={onSwap} className="btn btn--secondary p-0.5">
          <MdSwapVert className="md:rotate-90" size="20" />
        </button>
      </FormHeader>
      <FormBody>
        <div
          dir={
            !isLoading && rightLanguage.includes(target) && translatedText
              ? "rtl"
              : "ltr"
          }
        >
          {isLoading ? "Translation ..." : translatedText || "Translation"}
        </div>
      </FormBody>
      <FormFooter
        onCopy={() => onCopy(translatedText)}
        onSpeak={() => onSpeak(translatedText, target)}
        query={translatedText}
      />
    </div>
  );
}

export default TranslatedForm;
