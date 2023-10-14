import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(el => {
        return (
          <li key={el.id} className={css.itemContLst}>
            <button
              type="button"
              className={css.btnDelCont}
              onClick={() => onRemoveContact(el.id)}
            >
              del
            </button>
            {el.name} : {el.number}
          </li>
        );
      })}
    </ul>
  );
};
