import { useRef } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useKey } from '../hooks/useKey';

function SearchBox({ query, setQuery }) {
  const inputElm = useRef(null);
  useKey('Enter', function () {
    if (document.activeElement === inputElm.current) return;
    inputElm.current.focus();
    setQuery('');
  });
  return (
    <div className="container relative mb-3">
      <CiSearch className="absolute right-10 top-4 text-2xl" />
      <input
        className="w-full rounded bg-gray-700 p-3"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.currentTarget.value);
        }}
        placeholder="Search by movie name..."
        ref={inputElm}
      />
    </div>
  );
}

export default SearchBox;
