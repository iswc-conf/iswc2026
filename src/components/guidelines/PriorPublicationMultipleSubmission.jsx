import React from "react";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";

export const PriorPublicationMultipleSubmission = () => {
    return (
        <BaseContainer>
            <Header>Prior Publications and Simultaneous Submissions</Header>





            <p>
                ISWC 2026 will not accept research/resource/in-use papers that, at the time of submission, are under review for or have already been published in, or accepted for publication, in a journal or another conference. Prior submissions to workshops are acceptable, provided that the authors avoid self-plagiarism, hold sufficient rights to publish overlapping content in the proceedings, and significantly extend it with 30% of novel work. The conference organizers may share information on submissions with other venues to ensure that this rule is not violated.
            </p>

            <p>
                Depositing articles to preprint servers is allowed. However, Research Track submissions must adhere to the following policy (inspired by{" "}
                <ExternalLink href="https://www.aclweb.org/adminwiki/index.php/ACL_Policies_for_Review_and_Citation">
                    ACL’s policy
                </ExternalLink>
                ):
            </p>

            <p>
                <ul className="list-disc list-inside">
                    <li><b>Anonymized</b> preprints within the anonymity period are allowed. Please note that some preprint servers such as Arxiv do not support this option. </li>
                    <li>
                        <b>Non-anonymized</b> preprints before the anonymity period are allowed. The anonymity period starts on <b>TBA</b> (one week before abstract submission) and ends on  <b>TBA</b> (deadline review). We encourage authors to wait to post non-anonymized preprints until after the anonymity period has ended.
                    </li>
                    <li>
                        If a <b>non-anonymized</b> preprint version exists, authors should not cite it and are asked not to publicize it further during the anonymity period, as the submitted paper should be as anonymous as possible.
                    </li>
                </ul>
            </p>



        </BaseContainer>
    );
}

export default PriorPublicationMultipleSubmission;
