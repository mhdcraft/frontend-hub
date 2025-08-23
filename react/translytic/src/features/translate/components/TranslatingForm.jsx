import FormHeader from "../../../ui/FormHeader";
import FormBody from "../../../ui/FormBody";
import FormFooter from "../../../ui/FormFooter";
import useTranslateParams from "../../../hooks/useTranslateParams";
import toast from "react-hot-toast";

const languageItem = [
  {
    lable: "Detect Language",
    value: "auto",
  },
  {
    lable: "English",
    value: "en",
  },
  {
    lable: "France",
    value: "fr",
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

function TranslatingForm({ onTranslate, onCopy, rightLanguage, onSpeak }) {
  const { soure, setLangPair, query, setQuery } = useTranslateParams();

  return (
    <div className="translate__wrapper bg-primary-400">
      <FormHeader
        languageItem={languageItem}
        currentLangpair={soure}
        handleLang={(value) => {
          if (value === "auto") return toast.success("Coming soon! 😍");
          setLangPair({ newSrc: value });
        }}
      />
      <FormBody>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="textarea__field scrollbar-hide"
          maxLength="500"
          autoFocus
          dir={rightLanguage.includes(soure) ? "rtl" : "ltr"}
        ></textarea>
      </FormBody>
      <FormFooter
        onCopy={() => onCopy(query)}
        onSpeak={() => onSpeak(query, soure)}
        query={query}
      >
        <span className="text-secondary-100 text-right">
          {query.length}/500
        </span>
        <button
          disabled={!query}
          onClick={onTranslate}
          className="btn btn--primary"
        >
          Translate
        </button>
      </FormFooter>
    </div>
  );
}

export default TranslatingForm;
