// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';
import Filter from 'components/Filter/Filter';
import { getContacts } from 'redux/contacts/slice';
import { getFilter } from 'redux/filter/slice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactList__item}>
            {name}: {number}
            <button
              name="delete"
              className={css.contactList__btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
