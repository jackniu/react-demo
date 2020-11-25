import React from 'react'

const Contact = (props) => {
    // console.log(props)
    const { contactForm, deleteContact } = props;
    const formList = contactForm.map(contact => {
        // 三元运算符
        // return contact.age > 19 ? (
        //     <div className='ContactForm' key={contact.id}>
        //         <div>{contact.name}</div>
        //         <div>{contact.age}</div>
        //         <div>{contact.sex}</div>
        //     </div>
        // ) : null;

        return (
            <div className='ContactForm' key={contact.id}>
                <div>{contact.name}</div>
                <div>{contact.age}</div>
                <div>{contact.sex}</div>
                <button onClick={()=> deleteContact(contact.id)}>Delete</button>
            </div>
        );
    })
    return (
        <div>
            {formList}
        </div>
    )
}

export default Contact
