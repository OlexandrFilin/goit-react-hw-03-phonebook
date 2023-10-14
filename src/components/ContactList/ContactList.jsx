import {
  ContactListStyle,
  BtnDelCont,
  ItemContLst,
} from './ContactList.styled';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ContactListStyle>
      {contacts.map(el => {
        return (
          <ItemContLst key={el.id}>
            <BtnDelCont type="button" onClick={() => onRemoveContact(el.id)}>
              del
            </BtnDelCont>
            {el.name} : {el.number}
          </ItemContLst>
        );
      })}
    </ContactListStyle>
  );
};
