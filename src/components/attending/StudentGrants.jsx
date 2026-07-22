import BaseContainer from '../general/BaseContainer'
import DeclareSoon from '../general/declareSoon'
import Header from '../general/Header'
import SubHeader from '../general/SubHeader'
import UnderlineHeader from '../general/UnderlineHeader'
import ExternalLink from '../general/ExternalLink'
import { theme } from "../../theme";


export const StudentGrants = () => {
    return (
        <BaseContainer>
                <Header>Student Grants</Header>

                <p>If you are a student interested in attending ISWC 2026, you may be eligible to apply for travel grants to support the costs of travel and lodging. This year, travel grants are funded by the Semantic Web Science Association (SWSA).
</p>

<SubHeader>Funding Disclaimer</SubHeader>

<p>Please note that this is a form of financial support, not an award or prize. It is intended to assist students who do not have other means of covering their travel-related expenses. If your institution is able to fully fund your trip, we kindly ask that you refrain from applying, so that the limited resources can be directed to those with genuine financial need.</p>

<UnderlineHeader>Eligibility Criteria</UnderlineHeader>

<p>You must currently be a student at a higher education institution; and have an ISWC 2026 submission that has been accepted to either the doctoral consortium, the main conference, workshops, tutorials, the poster/demo session, or the Semantic Web challenge (you may have submissions to more than one of these categories). If additional funds are available, we will also consider supporting students who do not have papers at the conference.</p>

<UnderlineHeader>Selection Criteria</UnderlineHeader>

<ul className="ml-8">
       <li>Priority to students with papers in the doctoral symposium and the main track</li>
    <li>Priority to students from underrepresented groups</li>
    <li>Students with posters, demos, workshops, tutorials, and Semantic Web challenge papers if money is left</li>
    <li>Students without a paper if there is money left</li>
    </ul>

<UnderlineHeader>Application Process</UnderlineHeader>

<ol className='ol-decimal ml-8'>
        <li> Fill out and submit the ISWC 2026 Student Travel Award Application Form on EasyChair (https://easychair.org/conferences/?conf=iswc2026), choosing “Student Grants” when making a new submission.  <b>Applicants should use the title of their accepted contribution followed by "- Student grant" as the submission title</b>.
    
        <li>Ask your supervisor to email the student grants chairs using the following email address iswc2026-student-grants@easychair.org, confirming that you are a current student under their supervision and that you will be attending ISWC 2026. The subject of the email should be “ISWC 2026 Student Travel Award Application <strong>{'{'}EASYCHAIR SUBMISSION ID{'}'}</strong> - Verification for <b>{'{'}YOUR FULL NAME{'}'} </b>”. The text should read “I confirm that {'{'}YOUR FULL NAME{'}'} is a student that is currently under my supervision at  <b>{'{'}INSTITUTION NAME{'}'}</b> and that they will be attending ISWC 2026 to present work that they completed under my supervision. <b>{'{'}SUPERVISOR NAME{'}'}</b>”</li>
    </li>
    </ol>
        
<UnderlineHeader>Timeline</UnderlineHeader>

<ul className='ul-disc ml-8'>
    
        <li>Application opening date: <b>July 13th 2026</b></li>
    <li>Deadline for submission: <b>Sep 7th 2026 (or earlier if funds are no longer available)</b></li>
    <li>Notification of results: <b>Sep 21th 2026 (latest)</b></li>
    </ul>

<UnderlineHeader>Terms and Conditions</UnderlineHeader>
              <ul className='ul-disc ml-8'>
                  <li>Attend the conference</li>
                  <li>Reimbursement after the conference</li>
                  <li>Keep all receipts</li>
                  </ul>

<UnderlineHeader>Contacts</UnderlineHeader>
<p>Student Grants and Activities Chairs. Contact:  <ExternalLink href="mailto:iswc2026-student-grants@easychair.org">iswc2026-student-grants@easychair.org</ExternalLink></p>
            <ul className='ul-disc ml-8'>
                <li>George Hannah - University of Liverpool, UK</li>
                <li>Maria Angela Pellegrino - University of Salerno, Italy</li>
                </ul>
        </BaseContainer>
    )
}