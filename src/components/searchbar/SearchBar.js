import "./SearchBar.css";
export const SearchBar = () => {
  return (
    <div className="SearchBar-Container">
      <img src="/assets/icons/search.png" alt="search" />
      <input placeholder="Search Coin"/>
    </div>
  );
};
