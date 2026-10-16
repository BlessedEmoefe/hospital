import { useState } from 'react';
import styled from 'styled-components';
import { useSite } from '../site';
import { Modal } from './Modal';

const pages = {
  about: {
    title: 'About us',
    body: 'Beacon Hospital provides consultant-led private care, with dedicated teams and modern facilities across a wide range of specialties.',
  },
  careers: {
    title: 'Careers',
    body: 'Clinical and support roles are advertised by the hospital. This page does not accept job applications.',
  },
  limerick: {
    title: 'Limerick',
    body: 'Limerick services sit alongside the departments and consultants listed on this page.',
  },
  gp: {
    title: 'GP Information',
    body: 'General practitioners can use the department and consultant listings to see each specialty and the contact path published with it.',
  },
  privacy: {
    title: 'Privacy Policy',
    body: 'This page is a visual recreation. It does not collect or store personal information on a server.',
  },
  terms: {
    title: 'Disclaimer and Terms of Use',
    body: 'The layout matches the hospital homepage for design practice. It is not medical advice, and it is not the hospital’s live website.',
  },
  cookies: {
    title: 'Cookie Policy',
    body: 'This demonstration does not set tracking cookies.',
  },
  emergency: {
    title: 'Emergency Department',
    body: 'If this is a life-threatening emergency, call 112 or 999 now. The emergency department provides private urgent care at the hospital.',
  },
};

const Field = styled.label`
  display: block;
  margin: 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.blue};

  input {
    display: block;
    width: 100%;
    margin-top: 6px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.color.line};
    border-radius: 4px;
    padding: 0 12px;
    font-size: 16px;
    font-weight: 500;
    color: #244154;
  }
`;

const Submit = styled.button`
  margin-top: 6px;
  background: ${({ theme }) => theme.color.blue};
  color: white;
  border: 0;
  border-radius: 999px;
  padding: 11px 18px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 13px;
`;

const Note = styled.p`
  background: #f3fafd;
  border-left: 3px solid ${({ theme }) => theme.color.blue};
  padding: 10px 12px;
`;

function PayBill({ onClose }) {
  const [done, setDone] = useState(false);

  return (
    <Modal title="Pay a bill" onClose={onClose}>
      {done ? (
        <Note>This demonstration does not take payment. Use the hospital’s own payment service to pay a bill.</Note>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setDone(true);
          }}
        >
          <p>Enter the details printed on your invoice. Card details are not collected here.</p>
          <Field>
            Invoice reference
            <input name="invoice" required autoComplete="off" />
          </Field>
          <Field>
            Amount
            <input name="amount" required inputMode="decimal" autoComplete="off" />
          </Field>
          <Submit type="submit">Continue</Submit>
        </form>
      )}
    </Modal>
  );
}

export function Modals() {
  const { modal, closeModal } = useSite();
  if (!modal) return null;
  if (modal === 'bill') return <PayBill onClose={closeModal} />;

  const page = pages[modal];
  if (!page) return null;

  return (
    <Modal title={page.title} onClose={closeModal}>
      <p>{page.body}</p>
      {modal === 'emergency' && (
        <p>
          <a href="tel:112">Call 112</a>
          {' or '}
          <a href="tel:999">call 999</a>
        </p>
      )}
    </Modal>
  );
}
