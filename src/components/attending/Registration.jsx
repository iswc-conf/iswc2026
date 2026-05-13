import React from "react";
import './attending.css'

import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import SubTitle from "../general/SubTitle"
import UnderlineHeader from "../general/UnderlineHeader";
import SubHeader from "../general/SubHeader";

export const Registration = () => {
  return (
    <BaseContainer>
      <Header>Registration</Header>
      <p>After reviewing the conditions below, please proceed with your registration by clicking the "Register" button at the bottom of the page.</p>


      <UnderlineHeader>Fees</UnderlineHeader>
      <SubHeader>Main Conference</SubHeader>

       <p style={{fontSize:18, color:"#083562"}}><b><em>All registration fees are listed in EUR and do not include tax (22% VAT)</em></b>
      </p>
      <br></br>

      <table
        style={{

        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}></th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Early Fee
              <br />
              (Until August 31st, 2026)
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Regular Fee
              <br />
              (From Sept 1st to Oct. 18th, 2026)
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Late/Onsite Fee
              <br />
              (From Oct 19th)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Regular</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>810 EUR</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>990 EUR</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>1150 EUR</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Academic*</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>670 EUR</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>830 EUR</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>990 EUR</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>Student</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>500 EUR</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>600 EUR</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>760 EUR</td>
          </tr>
        </tbody>
      </table>


      <p>* <b>Academic registration</b> refers to persons that are affiliated with a University or Research Institute. It does not refer to persons from industry for whom the Regular registration fee applies.</p>
     

      <SubHeader>Pre-conference Days, Oct. 25-26 (Workshops/Tutorials/Ph.D. Symposium)</SubHeader>

      <p><b>Additional Fee: 250,00 EUR</b></p>
      <p>Available only to Main Conference registrants. This option allows them to also attend the Pre-conference Days (Oct. 25-26). All registration fees are listed in EUR and do not include tax (22% VAT)</p>

      <SubHeader>Pre-conference Days, Oct. 25-26 (Workshops/Tutorials/Ph.D. Symposium) ONLY</SubHeader>

      <p><b>Fee: 350,00 EUR</b></p>

      <p>This ticket is for those NOT registered to the Main Conference.
        To attend both, please register and pay for both "the Main Conference (Oct. 27-29)" and "the Pre-conference Days (Oct. 25-26) option"
      </p>

      <SubHeader>Additional Gala Dinner Ticket for an Accompanying Persons</SubHeader>

      <p><b>Fee: 100,00 EUR (VAT Included)</b></p>

      <p>Note:</p>
      <p>
        <ul className="ul-disc ml-8">

          <li>If you wish to attend <b>both the Main Conference (Oct. 27-29) and the Pre-conference Days (Oct. 25-26)</b>, please ensure you select both the appropriate <b>"Main Conference Registration fee" and "the Pre-conference Days, Oct. 25-26 (Workshops / Tutorials / Ph.D. Symposium) option"</b>, and proceed with payment accordingly.</li>
          <li>If you wish to attend <b>ONLY the Pre-conference Days (Oct. 25-26)</b>, please select "the <b>Pre-conference Days, Oct. 25-26 (Workshops / Tutorials / Ph.D. Symposium) ONLY"</b>.</li>
        </ul>
      </p>


      <UnderlineHeader>Main Conference Registration includes:</UnderlineHeader>
      <p>
        <ul className="ul-disc ml-8">

          <li>Access to all main conference sessions (October 27-29, 2026)</li>
          <li>Lunch and coffee breaks during the main conference (Oct. 27-29, 2026)</li>
          <li>Conference materials</li>
          <li>Welcome Reception (October 26, 2026)</li>
          <li>Posters & Demos session and reception (to be fixed in the program, probably on October 27, 2026)</li>
          <li>Gala Dinner (October 28, 2026)</li>
          <li>Access to the exhibition area</li>
        </ul>
      </p>

      <UnderlineHeader>Pre-conference Days option includes:</UnderlineHeader>
      <p>
        <ul className="ul-disc ml-8">
          <li>Access to Workshops/Tutorials/Ph.D. Symposium sessions (October 25-26, 2026)</li>
          <li>Lunch and coffee breaks during both days (October 25-26, 2026)</li>
        </ul>
      </p>

      <UnderlineHeader>Additional Gala Dinner Ticket for an Accompanying Persons includes:</UnderlineHeader>

      <p>
        <ul className="ul-disc ml-8">
          <li>Gala Dinner (October 28, 2026)</li>

        </ul>
      </p>

      <UnderlineHeader>Terms & Conditions</UnderlineHeader>

      <p>
        <ul className="ul-disc ml-8">
          <li>All registration fees are listed in EUR and do not include tax (22% VAT).</li>
          <li>Payment in any other currency will not be accepted.</li>
          <li>The applicable fee is based on the date of receipt of both the registration request and payment. If either is received after midnight (CEST) on the relevant deadline date, the higher fee will apply.</li>
          <li>A confirmation email including a receipt will be sent after your registration is completed.</li>
          <li>Please present the receipt at the registration desk at the conference venue</li>
        </ul>
      </p>

      <UnderlineHeader>Payment Details</UnderlineHeader>
      <p>
        <ul className="ul-disc ml-8">
          <li>Registration fees can be paid by credit card.</li>
          <li>Accepted cards: VISA, MasterCard.</li>
          <li>Payment is confirmed at the time of registration.</li>
        </ul>
      </p>
      <SubHeader>Invoicing</SubHeader>

      <p>Invoices will be sent once the payment is received. Please ensure that the details you enter during registration exactly match the billing details required for your invoice (legal entity name, full address, VAT ID where applicable). Invoices cannot be modified or re-issued after they have been issued, except where required by applicable law.</p>


      <UnderlineHeader>Attendance and Accommodations</UnderlineHeader>

      <p>During the registration it will be possible to select hotels among those reserved by the conference organization with reduced fees.</p>

      <UnderlineHeader>Cancellation & Alteration Policy</UnderlineHeader>


      <p>
        <ul className="ul-disc ml-8">
          <li>All cancellations or changes must be made in writing via email to: iswc2026@cicsud.it</li>
          <li>Cancellation fees apply as follows: <ul className="ml-16">
            <li>
              Until September 2, 2026: A refund will be issued after deducting a 6% processing fee from the total registration fee.
            </li>
            <li>
              From September 3, 2026 onward: No refund will be issued
            </li>

          </ul></li>
        </ul>
      </p>

      <a
        href="https://iscrizioni.cicsud.it/cmsweb/Login.asp?IDcommessa=2634&Lang=IT"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button
          style={{
            display: "block",
            margin: "24px auto",
            padding: "12px 22px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#023558",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Register to ISWC 2026
        </button>
      </a>

    </BaseContainer>
  );
}

export default Registration;
