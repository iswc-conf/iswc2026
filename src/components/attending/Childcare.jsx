import BaseContainer from '../general/BaseContainer'
import DeclareSoon from '../general/declareSoon'
import Header from '../general/Header'
import SubHeader from '../general/SubHeader'
import UnderlineHeader from '../general/UnderlineHeader'
import ExternalLink from '../general/ExternalLink'
import { theme } from "../../theme";


export const Childcare = () => {
    return (
        <BaseContainer>
            <Header>Childcare</Header>
            <p>If you are planning to travel to ISWC with your kids and need to arrange childcare, the following providers offer services in English:</p>

            <ul>
                <li><ExternalLink href="https://www.sitly.it/en/babysitter/bari">https://www.sitly.it/en/babysitter/bari</ExternalLink></li>
                <li><ExternalLink href="https://en.babysits.it/babysitter/bari/">https://en.babysits.it/babysitter/bari/</ExternalLink></li>
                <li><ExternalLink href="https://www.cronoshare.it/servizi/babysitter-inglese/bari/bari">https://www.cronoshare.it/servizi/babysitter-inglese/bari/bari</ExternalLink></li>
            </ul>

            <p>Please reach out to them directly to confirm their availability, rates, and services, and to make any necessary reservations in advance.</p>

             <p className="iswc-callout">Please note that childcare is not provided by the ISWC conference itself; these are independent providers. Nonetheless, do not hesitate to contact us if you require assistance</p>
    
        </BaseContainer>
    )
}

export default Childcare;