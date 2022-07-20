import React from 'react';
import NetlifyForm from 'react-netlify-form';

import styles from './style';

// must also deploy with Netlify to take advantage of this form
export default function Form() {
  return (
    <NetlifyForm name="contact">
      {({ loading, error, success }) => (
        <div css={styles.formContainer}>
          {loading && <p>Loading...</p>}
          {error && <p>Your submission was not sent. Please try again later.</p>}
          {success && <p>Thank you for the submission!</p>}
          {!loading && !success && (
            <>
              <div css={styles.formFieldsContainer}>
                <label>Name *</label>
                <span>
                  <div css={styles.nameContainer}>
                    <div css={styles.firstNameContainer}>
                      <input type="text" id="first_name" name="first_name" required />
                      <label htmlFor="first_name">First name</label>
                    </div>
                    <div css={styles.lastNameContainer}>
                      <input type="text" id="last_name" name="last_name" required />
                      <label htmlFor="last_name">Last name</label>
                    </div>
                  </div>
                </span>
              </div>
              <div css={styles.formFieldsContainer}>
                <label htmlFor="email">Email *</label>
                <span>
                  <input type="email" id="email" name="email" required />
                </span>
              </div>
              <div css={styles.formFieldsContainer}>
                <label htmlFor="subject">Subject *</label>
                <span>
                  <input type="text" id="subject" name="subject" required />
                </span>
              </div>
              <div css={styles.formFieldsContainer}>
                <label htmlFor="message">Message *</label>
                <span>
                  <textarea id="message" name="message" rows={3} required />
                </span>
              </div>
              <button css={styles.submitButton}>send message</button>
            </>
          )}
        </div>
      )}
    </NetlifyForm>
  );
}
