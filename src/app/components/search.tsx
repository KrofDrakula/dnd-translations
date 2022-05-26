import { Component, createSignal } from "solid-js";

interface Props {
  setSearchTerm: (text: string) => void;
}

const Search: Component<Props> = (props) => {
  return (
    <input
      type="search"
      onInput={(ev) =>
        props.setSearchTerm((ev.target as HTMLInputElement).value)
      }
    />
  );
};

export default Search;
