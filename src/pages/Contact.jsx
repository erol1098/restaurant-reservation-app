import React from 'react';

import { GoMailRead } from 'react-icons/go';
import { MdPhoneInTalk, MdLocationPin } from 'react-icons/md';

import ContactWrapper from '../Layouts/Contact/ContactWrapper';

const Contact = () => {
  return (
    <ContactWrapper>
      <section>
        <h2>Contact </h2>
        <div>
          <MdLocationPin size={50} />
          <b>Hükümet St. No:2 Seferihisar/Izmir</b>
        </div>
        <div>
          <MdPhoneInTalk size={50} />
          <b>
            <a href='tel:+905551112233'>+90 555 111 2233</a>
          </b>
        </div>
        <div>
          <GoMailRead size={50} />
          <b>
            <a href='mailto:merkezlokantasi@gmail.com'>
              merkez_lokantasi@gmail.com
            </a>
          </b>
        </div>
      </section>
    </ContactWrapper>
  );
};

export default Contact;
