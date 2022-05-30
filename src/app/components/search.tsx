import type { Component } from "solid-js";

interface Props {
  setSearchTerm: (text: string) => void;
}

const Search: Component<Props> = (props) => {
  return (
    <input
      type="search"
      placeholder="Type to search"
      autofocus={true}
      onInput={(ev) =>
        props.setSearchTerm((ev.target as HTMLInputElement).value)
      }
    />
  );
};

export default Search;
