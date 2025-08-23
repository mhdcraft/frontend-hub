import { useState } from "react";
import TranslateLayout from "./features/translate/TranslateLayout";
import axios from "axios";
import useTranslateParams from "./hooks/useTranslateParams";
import toast, { Toaster } from "react-hot-toast";

const rightLanguage = ["fa"];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const { query, soure, target, setLangPair, setQuery } = useTranslateParams();

  const handleTranslate = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.mymemory.translated.net/get?q=${query}&langpair=${soure}|${target}`
      );
      setTranslatedText(data.responseData.translatedText);
    } catch (error) {
      // console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied!");
  };

  const hanleSwap = () => {
    setLangPair({ newSrc: target, newTgt: soure });
    setQuery(translatedText);
    setTranslatedText(query);
  };

  const handleSpeak = (text, lang) => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <Toaster />
      <TranslateLayout
        isLoading={isLoading}
        translatedText={translatedText}
        rightLanguage={rightLanguage}
        onTranslate={handleTranslate}
        onCopy={handleCopyText}
        onSwap={hanleSwap}
        onSpeak={handleSpeak}
      />
    </>
  );
}

export default App;
