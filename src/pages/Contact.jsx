import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { directory, enquiryTypes } from '../data';
import { useSite } from '../site';
import { container } from '../theme';
import { IconArrow, IconChevron } from '../components/Icons';

const emptyForm = {
  firstName: '',
  surname: '',
  email: '',
  mobile: '',
  type: '',
  message: '',
  agree: false,
};

const Hero = styled.section`
  min-height: 300px;
  display: flex;
  align-items: center;
  color: white;
  background:
    linear-gradient(90deg, rgba(0, 58, 102, 0.72), rgba(0, 110, 170, 0.58)),
    url('/images/contact-hero.jpg') center 30% / cover no-repeat;
`;

const HeroInner = styled.div`
  ${container};
  padding-block: 48px;
`;

const Crumb = styled.p`
  font-size: 13px;
  margin-bottom: 18px;

  a { color: white; text-decoration: none; }
  a:hover { text-decoration: underline; }
  span { margin: 0 6px; }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-weight: 500;
  font-size: clamp(34px, 5vw, 48px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const HeroLead = styled.p`
  max-width: 560px;
  margin-top: 12px;
  font-size: 16.5px;
  line-height: 1.45;
`;

const Block = styled.section`
  ${container};
  padding: 48px 0 12px;
`;

const BlueTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  color: ${({ theme }) => theme.color.blue};
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 18px;
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
`;

const PhoneRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  color: ${({ theme }) => theme.color.blue};
  margin-bottom: 16px;

  strong { display: block; font-size: 15px; font-weight: 600; }
  a {
    color: ${({ theme }) => theme.color.blue};
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
  }
`;

const Clock = styled.span`
  width: 42px;
  height: 42px;
  border: 2px solid ${({ theme }) => theme.color.blue};
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: none;
`;

const Copy = styled.div`
  max-width: 760px;
  color: #5d7080;
  font-size: 15.5px;
  line-height: 1.55;

  p + p { margin-top: 14px; }
  a { color: ${({ theme }) => theme.color.link}; }
`;

const Sign = styled.button`
  margin-top: 8px;
  background: none;
  border: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.link};
  font-size: 15.5px;
  text-decoration: underline;
`;

const FormWrap = styled.section`
  ${container};
  padding: 28px 0 64px;
  scroll-margin-top: 140px;
`;

const Form = styled.form`
  width: min(680px, 100%);
  margin: 0 auto;
`;

const Names = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const Field = styled.label`
  display: block;
  margin-top: 14px;
  color: ${({ theme }) => theme.color.blue};
  font-size: 14.5px;
  font-weight: 600;

  input, select, textarea {
    display: block;
    width: 100%;
    margin-top: 6px;
    border: 1px solid #cfd8e3;
    background: white;
    color: #243b4c;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 12px;
  }

  textarea { min-height: 110px; resize: vertical; }
  input:focus, select:focus, textarea:focus { outline: 2px solid #9fd4f0; border-color: #7ec4e6; }
`;

const Error = styled.span`
  display: block;
  color: #b42318;
  font-size: 13px;
  font-weight: 600;
  margin-top: 4px;
`;

const Check = styled.label`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin: 16px 0 18px;
  color: #5d7080;
  font-size: 14.5px;
  font-weight: 500;

  input { margin-top: 3px; }
  button {
    background: none;
    border: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.link};
    text-decoration: underline;
    font-size: inherit;
  }
`;

const Submit = styled.button`
  background: ${({ theme }) => theme.color.blue};
  color: white;
  border: 0;
  min-width: 120px;
  height: 40px;
  padding: 0 22px;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: 13px;

  &:hover { filter: brightness(1.06); }
`;

const Thanks = styled.div`
  width: min(680px, 100%);
  margin: 0 auto;
  background: #f4fafd;
  border-left: 4px solid ${({ theme }) => theme.color.blue};
  padding: 18px 20px;

  h3 { color: ${({ theme }) => theme.color.blue}; margin-bottom: 8px; }
  p { color: #4d6272; }
  button {
    margin-top: 12px;
    background: none;
    border: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.link};
    font-weight: 700;
  }
`;

const DirectoryBand = styled.section`
  background: #eef6fb;
  padding: 42px 0 28px;
`;

const DirectoryInner = styled.div`
  ${container};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px 48px;

  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const Entry = styled.article`
  h3 {
    color: ${({ theme }) => theme.color.blue};
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  align-items: center;
  margin-top: 6px;
  min-height: 24px;

  a, button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.link};
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
`;

const Media = styled.p`
  ${container};
  text-align: center;
  color: #5d7080;
  font-size: 14.5px;
  padding: 28px 0 8px;

  a { color: ${({ theme }) => theme.color.link}; }
`;

const Location = styled.section`
  ${container};
  padding: 36px 0 20px;
  scroll-margin-top: 140px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 800px) { grid-template-columns: 1fr; }
`;

const Address = styled.address`
  font-style: normal;
  color: ${({ theme }) => theme.color.blue};
  font-size: 16px;
  line-height: 1.55;
  font-weight: 600;
`;

const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  color: ${({ theme }) => theme.color.link};
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 13px;
`;

const Quiet = styled.button`
  display: block;
  margin-top: 10px;
  background: none;
  border: 0;
  padding: 0;
  color: ${({ theme }) => theme.color.link};
  text-decoration: underline;
  font-size: 14.5px;
`;

const Note = styled.p`
  margin-top: 10px;
  color: #5d7080;
  font-weight: 500;
  font-size: 14.5px;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 280px;
  border: 0;
  background: #e7eef3;
`;

const Cards = styled.section`
  ${container};
  padding: 10px 0 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 22px;

  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

const Card = styled.article`
  text-align: center;

  img { width: 100%; height: 190px; object-fit: cover; }
  h3 {
    margin-top: 12px;
    color: ${({ theme }) => theme.color.blue};
    font-size: 18px;
    font-weight: 600;
  }
  p {
    margin: 8px auto 0;
    max-width: 460px;
    color: #667887;
    font-size: 14.5px;
    line-height: 1.45;
  }
  button {
    margin-top: 10px;
    background: none;
    border: 0;
    color: ${({ theme }) => theme.color.link};
    padding: 4px;
  }
`;

const tel = (value) => value.replace(/\s/g, '');

export function Contact() {
  const { openModal } = useSite();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [satellite, setSatellite] = useState(false);
  const [patientNote, setPatientNote] = useState(false);

  function setField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function startEnquiry(name, type = 'General enquiry') {
    setSent(false);
    setForm((current) => ({
      ...current,
      type,
      message: name ? `Enquiry about ${name}.` : current.message,
    }));
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (!form.firstName.trim()) next.firstName = 'Enter your first name.';
    if (!form.surname.trim()) next.surname = 'Enter your surname.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (form.mobile.trim().length < 7) next.mobile = 'Enter your mobile number.';
    if (!form.type) next.type = 'Choose a type of enquiry.';
    if (!form.message.trim()) next.message = 'Enter your enquiry.';
    if (!form.agree) next.agree = 'Please agree before submitting.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <main>
      <Hero>
        <HeroInner>
          <Crumb>
            <Link to="/">Home</Link>
            <span>›</span>
            Contact
          </Crumb>
          <HeroTitle>Contact</HeroTitle>
          <HeroLead>
            Unable to find the information you are looking for? Use our contact form to request any additional information which you require about Beacon Hospital.
          </HeroLead>
        </HeroInner>
      </Hero>

      <Block>
        <BlueTitle>General contacts</BlueTitle>
        <PhoneRow>
          <Clock aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8v5l3 2" strokeLinecap="round" />
            </svg>
          </Clock>
          <div>
            <strong>Call our front desk</strong>
            <a href="tel:012936600">01 293 6600</a>
          </div>
        </PhoneRow>
        <Copy>
          <p>
            These queries will be answered during regular office hours (i.e. not during evenings, weekends or Bank Holidays). For urgent medical or appointment related enquiries (including cancellations) please telephone the Hospital Switch at any time.
          </p>
          <p>
            Please do NOT email any personal or sensitive medical information to this address. Instead please telephone the Hospital Switch for assistance.
          </p>
          <p>
            If you have a job or career-related enquiry, please use the email address{' '}
            <a href="mailto:beaconrecruitment@beaconhospital.ie">beaconrecruitment@beaconhospital.ie</a>
            , which is accessed by Human Resources. Thank you for your interest.
          </p>
          <p><strong>Sign Up for Our Seasonal Newsletter!</strong></p>
          <p>
            Beacon Hospital’s Seasonal Newsletter covers the latest news and current information, including Consultants and services available at Beacon Hospital.
          </p>
          <p>
            In addition to this, there will be pieces from our consultants and team with tips for health and well-being, and useful advice for the whole family.
          </p>
        </Copy>
        <Sign type="button" onClick={() => startEnquiry('', 'Seasonal newsletter')}>
          Sign Up Now!
        </Sign>
      </Block>

      <FormWrap id="enquiry">
        <BlueTitle $center>Make an enquiry</BlueTitle>
        {sent ? (
          <Thanks>
            <h3>Enquiry noted on this page</h3>
            <p>
              Thanks, {form.firstName}. This preview does not send your message to the hospital. Call 01 293 6600 if you need the front desk.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setForm(emptyForm);
              }}
            >
              Send another enquiry
            </button>
          </Thanks>
        ) : (
          <Form onSubmit={submit} noValidate>
            <Names>
              <Field>
                First Name *
                <input value={form.firstName} onChange={(event) => setField('firstName', event.target.value)} autoComplete="given-name" />
                {errors.firstName && <Error>{errors.firstName}</Error>}
              </Field>
              <Field>
                Surname *
                <input value={form.surname} onChange={(event) => setField('surname', event.target.value)} autoComplete="family-name" />
                {errors.surname && <Error>{errors.surname}</Error>}
              </Field>
            </Names>
            <Field>
              Email Address *
              <input
                type="email"
                value={form.email}
                placeholder="e.g. johnndoe@gmail.com"
                onChange={(event) => setField('email', event.target.value)}
                autoComplete="email"
              />
              {errors.email && <Error>{errors.email}</Error>}
            </Field>
            <Field>
              Mobile Number *
              <input
                type="tel"
                value={form.mobile}
                placeholder="+353 000 0000"
                onChange={(event) => setField('mobile', event.target.value)}
                autoComplete="tel"
              />
              {errors.mobile && <Error>{errors.mobile}</Error>}
            </Field>
            <Field>
              Type of Enquiry
              <select value={form.type} onChange={(event) => setField('type', event.target.value)}>
                <option value="">Select option</option>
                {enquiryTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
              {errors.type && <Error>{errors.type}</Error>}
            </Field>
            <Field>
              Message
              <textarea
                id="enquiry-message"
                value={form.message}
                placeholder="Your Enquiry"
                onChange={(event) => setField('message', event.target.value)}
              />
              {errors.message && <Error>{errors.message}</Error>}
            </Field>
            <Check>
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(event) => setField('agree', event.target.checked)}
              />
              <span>
                Agree to the event{' '}
                <button type="button" onClick={() => openModal('terms')}>Terms & Conditions</button>
                {' '}and{' '}
                <button type="button" onClick={() => openModal('privacy')}>GDPR</button>
              </span>
            </Check>
            {errors.agree && <Error>{errors.agree}</Error>}
            <Submit type="submit">Submit</Submit>
          </Form>
        )}
      </FormWrap>

      <DirectoryBand>
        <DirectoryInner>
          <BlueTitle>Contact directory:</BlueTitle>
          <Grid>
            {directory.map((entry) => (
              <Entry key={entry.name}>
                <h3>
                  {entry.name}
                  <IconChevron width="14" height="14" />
                </h3>
                <Meta>
                  {entry.phones[0] && (
                    <a href={`tel:${tel(entry.phones[0])}`}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M7 3h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3c0 1-1 2-2 2C10 19 5 14 5 5c0-1 1-2 2-2z" />
                      </svg>
                      {entry.phones[0]}
                    </a>
                  )}
                  {entry.more && (
                    <button type="button" onClick={() => startEnquiry(entry.name)}>
                      Click here
                      <IconArrow width="14" height="14" />
                    </button>
                  )}
                  {entry.phones[1] && (
                    <a href={`tel:${tel(entry.phones[1])}`}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M7 3h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3c0 1-1 2-2 2C10 19 5 14 5 5c0-1 1-2 2-2z" />
                      </svg>
                      {entry.phones[1]}
                    </a>
                  )}
                </Meta>
              </Entry>
            ))}
          </Grid>
        </DirectoryInner>
      </DirectoryBand>

      <Media>
        Media Enquiries: All Media or PR enquiries should be directed to Lorna,{' '}
        <a href="mailto:lorna@jslpr.ie">lorna@jslpr.ie</a>
      </Media>

      <Location id="location">
        <div>
          <BlueTitle>Our location</BlueTitle>
          <Address>
            Beacon Hospital<br />
            Sandyford<br />
            Dublin 18<br />
            D18 AK68<br />
            Ireland.<br />
            Registration number, 400575
          </Address>
          <TextLink
            href="https://www.google.com/maps/dir/?api=1&destination=Beacon%20Hospital%20Sandyford%20Dublin%2018"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
            <IconArrow />
          </TextLink>
          <Quiet type="button" aria-expanded={satellite} onClick={() => setSatellite((open) => !open)}>
            Click for Satellite Clinic Details
          </Quiet>
          {satellite && (
            <Note>
              Mullingar Satellite Clinic — 044 933 0449. Beacon Hospital main switchboard is 01 293 6600.
            </Note>
          )}
        </div>
        <MapFrame
          title="Map showing Beacon Hospital, Sandyford, Dublin 18"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-6.225%2C53.268%2C-6.185%2C53.288&layer=mapnik&marker=53.2776%2C-6.2052"
        />
      </Location>

      <Cards>
        <Card>
          <img src="/images/card-emergency.jpg" alt="Hospital emergency bay" />
          <h3>Emergency Department</h3>
          <p>Beacon Hospital’s Emergency Department is consultant-led and over 90% of private health insurance plans cover the ED.</p>
          <button type="button" aria-label="Emergency Department details" onClick={() => openModal('emergency')}>
            <IconArrow />
          </button>
        </Card>
        <Card>
          <img src="/images/card-exterior.jpg" alt="Hospital exterior and grounds" />
          <h3>Getting Here & Parking</h3>
          <p>Helping you to get to Beacon Hospital via car, LUAS or bus.</p>
          <button type="button" aria-label="Jump to location" onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}>
            <IconArrow />
          </button>
        </Card>
        <Card>
          <img src="/images/card-patient.jpg" alt="Nurse with a patient" />
          <h3>Patient Information</h3>
          <p>Useful information for patients and visitors on everything from how we’re keeping you safe to visiting hours and more.</p>
          <button type="button" aria-expanded={patientNote} aria-label="Patient information" onClick={() => setPatientNote((open) => !open)}>
            <IconArrow />
          </button>
          {patientNote && (
            <Note>
              For visiting and appointment questions, call the front desk on 01 293 6600 during office hours, or the hospital switch at any time for urgent changes.
            </Note>
          )}
        </Card>
        <Card>
          <img src="/images/card-bill.jpg" alt="Person reviewing a hospital invoice" />
          <h3>Pay a Bill</h3>
          <p>Use your invoice number to pay a bill or portion of a bill hassle-free online from the comfort of your own home.</p>
          <button type="button" aria-label="Pay a bill" onClick={() => openModal('bill')}>
            <IconArrow />
          </button>
        </Card>
      </Cards>
    </main>
  );
}
