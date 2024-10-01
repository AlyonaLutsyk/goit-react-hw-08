import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);
    
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
}
