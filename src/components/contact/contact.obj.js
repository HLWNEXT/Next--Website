import React, { Fragment } from 'react';
import { ContactForm } from '../subcomponents/forms/form.obj';
import { ContactInfoList } from '../subcomponents/contactinformation/contactinfo.obj';
import './contact.style.desktop.scss';
import './contact.style.mobile.scss';

export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:''
      }
    }
  
  setName = (name) => {
    this.setState({name});
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__title">
          <p>See What's Next</p>
        </div>
        <div className="contact__form">
          <ContactForm />
        </div>
        <div className="contact__info">
          <ContactInfoList />
        </div>
      </div>
    )
  }
}
