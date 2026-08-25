import BaseContainer from '../general/BaseContainer'
import Header from '../general/Header'
import ExternalLink from '../general/ExternalLink'

export const Childcare = () => {
    return (
        <BaseContainer>
            <Header>Childcare</Header>

            <p className="iswc-callout">
                Below are some useful links you may use to arrange childcare during your
                stay in Bari. Please note that childcare is <b>not</b> a service offered by
                the ISWC conference; these are independent providers, listed here for your
                convenience.
            </p>

            <p>The following providers offer babysitting services in English:</p>

            <ul>
                <li><ExternalLink href="https://www.sitly.it/en/babysitter/bari">https://www.sitly.it/en/babysitter/bari</ExternalLink></li>
                <li><ExternalLink href="https://en.babysits.it/babysitter/bari/">https://en.babysits.it/babysitter/bari/</ExternalLink></li>
                <li><ExternalLink href="https://www.cronoshare.it/servizi/babysitter-inglese/bari/bari">https://www.cronoshare.it/servizi/babysitter-inglese/bari/bari</ExternalLink></li>
            </ul>

            <p>
                Please reach out to them directly to confirm their availability, rates and
                services, and to make any necessary reservations in advance.
            </p>

            <p>
                For further information, you can contact us at{" "}
                <ExternalLink href="mailto:iswc2026@cicsud.it">iswc2026@cicsud.it</ExternalLink>.
            </p>
        </BaseContainer>
    )
}

export default Childcare;
