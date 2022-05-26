import { Component } from "solid-js";
import { Language } from "../../schemas/languages";

interface Props {
  selected: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageSelector: Component<Props> = (props) => {
  return (
    <select
      onChange={(ev) =>
        props.setLanguage((ev.target as HTMLSelectElement).value as Language)
      }
    >
      <option value="sl" selected>
        sl
      </option>
    </select>
  );
};

export default LanguageSelector;
