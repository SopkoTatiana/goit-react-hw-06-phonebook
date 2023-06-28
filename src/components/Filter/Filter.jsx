import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Filter;
