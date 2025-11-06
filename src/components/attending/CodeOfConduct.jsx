import React from "react";
import './attending.css'

import SWSA from "../../assets/logos/swsa.png";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";

export const CodeOfConduct = () => {
    return (
        <BaseContainer>
                <Header>Code of Conduct</Header>

                <div className="flex justify-center mt-8 mb-8">
                    <img
                        src={ SWSA }
                        alt="Semantic Web Science Association"
                        className="w-full max-w-3xl rounded-xl shadow-md"
                    />
                </div>

                <div className="text-lg space-y-4 whitespace-pre-line">
                    <p>The International Semantic Web Conference (ISWC) is organized by the Semantic Web Science Association (SWSA) as a forum to encourage rich interactions and promote the free exchange of ideas to benefit the community. SWSA welcomes conference participants that foster inclusion and respect to all members of the community.</p>

                    <p>Our association is dedicated to providing a respectful and inclusive conference experience for everyone. Respectful behavior is always assumed and expected of community members during all conference events, online discussions about conference topics, and networking events held after hours. Conference participants are expected to interact with others in a respectful and courteous manner, regardless of age, race, ethnicity, national origin, ancestry, gender, sexual orientation, gender identity, gender presentation, physical appearance, religious affiliation, creed, marital status, differing abilities, medical conditions, personal characteristics, or technology choices.</p>

                    <p>Abusive, racist, sexist, homophobic, intimidating, harassing, or threatening behavior towards any other conference participant or directed at any organizer, student volunteer, sponsor, conference staff or locals, will not be tolerated.</p>

                    <p>SWSA disapproves of offensive actions, aggressive acts, or comments that intimidate or disparage others. SWSA will not tolerate any kind of harassment, including but not limited to:</p>

                    <ul className="ul-disc">
                        <li>Verbal attacks, accusations, bullying, or offensive comments</li>
                        <li>Aggressive or intimidatory questioning</li>
                        <li>Sustained disruption during presentations and other events</li>
                        <li>Unwelcome sexual attention</li>
                        <li>Inappropriate physical contact</li>
                        <li>Deliberate intimidation or stalking, both in person and online</li>
                        <li>Sexual and racist images and materials in public spaces</li>
                        <li>Ignoring, encouraging, or advocating any of the above behaviors</li>
                    </ul>

                    <p>SWSA expects all community members to endorse this code of conduct, and to prevent and discourage any undesired behaviors actively. Everyone should feel empowered to politely engage when themselves or others are disrespected, and to raise awareness and understanding of this code of conduct. Conference participants asked to stop any unacceptable behavior are expected to comply immediately.</p>

                    <p>To report any behavior that makes you or others uncomfortable, please contact (by email or in person) any of the SWSA members, who are committed to treating such reports confidentially.</p>

                    <p>Those violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of SWSA.</p>

                    <p>Sponsors are also subject to the code of conduct in events, images, and other materials.</p>

                    <p>This code of conduct complements all legal rights that apply to particular situations.</p>

                    <UnderlineHeader>References</UnderlineHeader>
                
                        <ul className="ul-disc lg:text-lg">
                            <li><ExternalLink href="http://confcodeofconduct.com/">confcodeofconduct.com</ExternalLink></li>
                            <li><ExternalLink href="https://www.w3.org/Consortium/cepc/">W3C Code of Ethics and Professional Conduct</ExternalLink></li>
                            <li><ExternalLink href="https://www.aclweb.org/adminwiki/index.php?title=Anti-Harassment_Policy">ACL Anti-Harassment Policy</ExternalLink></li>
                            <li><ExternalLink href="https://www.iscb.org/ismbeccb2015-general-info/ismbeccb2015-coc">ISMB ECCB Code of Conduct</ExternalLink></li>
                            <li><ExternalLink href="https://chi2017.acm.org/diversity-inclusion-statement.html">ACM CHI Diversity Statement</ExternalLink></li>
                            <li><ExternalLink href="https://sites.google.com/view/aiide2017/home/code-of-conduct?authuser=0">AIIDE 2017 Code of Conduct</ExternalLink></li>
                            <li><ExternalLink href="http://www.humancomputation.com/2017/codeofconduct.html">Human Computation CoC</ExternalLink></li>
                            <li><ExternalLink href="http://www.ifaamas.org/harassment.html">IFAAMAS Harassment Policy</ExternalLink></li>
                            <li><ExternalLink href="https://github.com/Polymer/polymer/wiki/Code-of-Conduct">Polymer GitHub CoC</ExternalLink></li>
                            <li><ExternalLink href="http://geekfeminism.wikia.com/">Geek Feminism Wiki</ExternalLink></li>
                            <li><ExternalLink href="http://geekfeminism.wikia.com/wiki/Timeline_of_incidents">Timeline of Incidents</ExternalLink></li>
                            <li><ExternalLink href="https://implicit.harvard.edu/implicit/takeatest.html">Harvard Implicit Bias Tests</ExternalLink></li>
                            <li><ExternalLink href="https://www.projectcallisto.org/">Project Callisto</ExternalLink></li>
                            <li><ExternalLink href="http://swsa.semanticweb.org/content/code-conduct-iswc">SWSA Code of Conduct</ExternalLink></li>

                        </ul>
                 
                    <br/>
                    <p>Source: <ExternalLink href="http://swsa.semanticweb.org/content/code-conduct-iswc"s>http://swsa.semanticweb.org/content/code-conduct-iswc</ExternalLink></p>
                </div>
        </BaseContainer>
    );
};

export default CodeOfConduct;
