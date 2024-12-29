import React, { useState, ChangeEvent } from 'react';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

interface InputFieldProps {
  label: string;
  id: string;
  name: keyof FormData;
  value: string;
  type?: 'text' | 'email' | 'tel';
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  isTextArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  value,
  type = 'text',
  handleChange,
  required = false,
  isTextArea = false,
}) => (
  <div className={isTextArea ? styles.fieldTextArea : styles.field}>
    <label className={styles.inputName} htmlFor={id}>
      {label} {required && '*'}
    </label>
    {isTextArea ? (
      <textarea
        id={id}
        name={name}
        className={styles.textArea}
        value={value}
        onChange={handleChange}
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        className={styles.input}
        value={value}
        onChange={handleChange}
        required={required}
      />
    )}
  </div>
);

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container} id="form">
      <form
        className={styles.form}
        action="https://formspree.io/f/xdkozyav"
        method="POST"
      >
        <InputField
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          handleChange={handleChange}
          required
        />
        <InputField
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          handleChange={handleChange}
          type="email"
        />
        <InputField
          label="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          handleChange={handleChange}
          type="tel"
        />
        <InputField
          label="Message"
          id="message"
          name="message"
          value={formData.message}
          handleChange={handleChange}
          required
          isTextArea
        />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
