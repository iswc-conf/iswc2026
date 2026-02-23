import React from "react";
import './sponsorship.css';
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import DeclareSoon from "../general/declareSoon";
import { theme } from "../../theme";
import UnderlineHeader from "../general/UnderlineHeader";


export const SponsorshipPackages = () => {
    return (
        
        

            <>
    <div className="mt-[150px] px-4 pt-2 bg-white flex items-center justify-center"></div>
    <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12 max-w-6xl">



            <Header>Sponsorship Packages</Header>

            <UnderlineHeader>Sponsorship Packages</UnderlineHeader>

            <div className="w-full overflow-x-auto">
                
    <center>
                <table className="custom-table">
                    <thead style={{ backgroundColor: theme.colors.logo_black }}>
                        <tr>
                            <th>Sponsor Benefits</th>
                            <th className="bronze">Bronze</th>
                            <th className="silver">Silver</th>
                            <th className="gold">Gold</th>
                            <th className="platinum">Platinum</th>
                            <th className="diamond">Diamond</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Logo on conference website</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Acknowledgment in ISWC proceedings</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Promotional materials at venue</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>

                        <tr>
                            <td>Logo displayed between talks</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>



                        <tr>
                            <td>Free conference registrations</td>
                            <td>-</td>
                            <td>1️⃣</td>
                            <td>1️⃣</td>
                            <td>2️⃣</td>
                            <td>3️⃣</td>
                        </tr>

                        <tr>
                            <td>Job posting on conference website and access to Job Fair CV repository</td>
                            <td>-</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>

                                                <tr>
                            <td>Social media promotions (ISWC channels)</td>
                            <td>-</td>
                            <td>-</td>
                            <td>1️⃣</td>
                            <td>2️⃣</td>
                            <td>3️⃣</td>
                        </tr>

                        <tr>
                            <td>Company booth</td>
                            <td>-</td>
                            <td>-</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Short presentation at the PhD Symposium</td>
                            <td>-</td>
                            <td>-</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Sponsored Poster/Demo presentation</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Sponsored Tutorial or Industry Talk</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Organize an industry–research discussion/round table</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td>Investment level (€)</td>
                            <td><b>1,500 €</b></td>
                            <td><b>2,500 €</b></td>
                            <td><b>4,000 €</b></td>
                            <td><b>6,000 €</b></td>
                            <td><b>9,000 €</b></td>
                        </tr>

                    </tbody>
                </table>
                </center>
            </div>

            <UnderlineHeader>À la carte Sponsorship Opportunities</UnderlineHeader>

            <p>
                <ul className="ul-disc">
                    <li>Doctoral Consortium Sponsor [exclusive] (1.000 €)</li>
                    <li>Posters and Demo Reception</li>
                    <li>Opportunity to be named as sponsor for the prize of one of the best paper awards at the conference</li>
                    <li>Open to any other suggestions</li>

                </ul>
            </p>




           </div>
    </>
    );
};

export default SponsorshipPackages;