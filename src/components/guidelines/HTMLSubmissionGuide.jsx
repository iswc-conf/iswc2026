import React from "react";
import BaseContainer from "../general/BaseContainer";
import DeclareSoon from "../general/declareSoon";
import Header from "../general/Header";
import SubHeader from "../general/SubHeader";
import UnderlineHeader from "../general/UnderlineHeader";
import ExternalLink from "../general/ExternalLink";

export const HTMLSubmissionGuide = () => {
    return (
        <BaseContainer>
            <Header>HTML Submission Guide</Header>



            <p>
                ISWC 2026 welcomes research articles employing the Open Web Platform. This document provides guidance to authors who wish to make their contributions available in HTML and related technology stack.
            </p>


            <UnderlineHeader>General Guidance</UnderlineHeader>
            <p>
                Contributions in HTML should be shared in EasyChair as a ZIP archive that contains the complete and self-contained content of the article. It should include a main “index.html” and all used resources (like media, scripts) to guarantee a correct visualization of the document on common desktop and mobile Web browsers. Please note the following key requirements
            </p>

            <p>
                <ul className="list-disc list-inside">
                    <li><b>HTML template:</b> any tooling or process can be used to produce the HTML.</li>
                    <li><b>Content</b>: the full content of the article must be human-readable with HTML alone. The use of CSS and JavaScript is encouraged, but should not interfere with the accessibility of the content.</li>
                    <li><b>Offline-friendly</b>: there must not be any external dependencies (e.g., a network connection) to retrieve, to render, or to manipulate the content of the article.</li>
                    <li><b>Privacy</b>: scripts must not be used to identify or track readers.</li>
                    <li><b>View</b>: the rendered article (HTML+CSS) should have the “look and feel” of the LNCS authoring guidelines. Pixel-perfection is not expected. This is to ensure visual consistency of the proceedings as well as to have comparative page limits with the print-based publication. The HTML article has to be compliant with the page limit constraint.</li>
                </ul>
            </p>
            <p>
                It should be possible to read the HTML contributions on an average desktop computer or mobile computer that is equipped with a reasonably current, Javascript-enabled Web browser (e.g., Firefox, Chrome/Chromium, Internet Explorer, Brave, Safari). We encourage authors to make their articles as accessible as possible (for reading and interacting) because different consumers (in this case initially the reviewers and chairs) may have different environments and abilities.
            </p>

            <UnderlineHeader>Final (“camera-ready”) Version</UnderlineHeader>
            <p>
                <ul className="list-disc list-inside">
                    <li>The publisher for the Research, In-Use, and Resources tracks will be confirmed soon. It is likely that the publisher will require submissions in LaTeX (or possibly Word) format. If an article submitted in HTML is accepted, the authors can choose to convert their paper manually or using tool support as outlined below.</li>
                    <li>Articles accepted in the Posters & Demos track and in the Doctoral Consortium will be published as CEUR-WS.org proceedings volumes. CEUR-WS.org allows articles to be in HTML but, for guaranteed printability and archiving, requires an additional PDF, which should be a print-out of the HTML article in the LNCS layout.</li>
                    <li>Articles accepted in the Industry track will be published on the conference website. The same “HTML+PDF” rule applies as explained above for posters, demos and doctoral papers.</li>
                </ul>
            </p>

            <UnderlineHeader>Recommendations</UnderlineHeader>
            <p>
                We recommend that authors take the following steps independently of the general process:
            </p>
            <p>
                <ul className="list-disc list-inside">
                    <li>Before sharing your article with ISWC, self-publish your HTML version, eg. at a repository, personal or institution website that’s publicly accessible and archivable from a URL.</li>
                    <li>Include the URL of your self-published article along the lines of: “Identifier: http://example.org/article “ after the list of authors and/or include the URL in the abstract of your article.</li>
                    <li>Make sure to preserve this information in your camera-ready version.</li>

                    <li>Consider using a <ExternalLink href="https://creativecommons.org/">
                        Creative Commons
                    </ExternalLink> license like<ExternalLink href="https://creativecommons.org/licenses/by/4.0/">
                            CC BY 4.0
                        </ExternalLink>
                        on the self-published version.</li>
                    <li>
                        Create multiple archived copies of the self-published version using on-demand free archive services like{" "}
                        <ExternalLink href="https://web.archive.org/">
                            archive.org
                        </ExternalLink>,{" "}
                        <ExternalLink href="https://archive.is/">
                            archive.is
                        </ExternalLink>.
                    </li>

                    <li>
                        If you intend to also publish the “Author’s Accepted Manuscript” version following peer-review, note Springer’s{" "}
                        <ExternalLink href="https://www.springernature.com/gp/open-research/policies/journal-policies">
                            self-archiving policy
                        </ExternalLink>.
                    </li>

                    <li>
                        Send a notification about your original self-published article to the{" "}
                        <ExternalLink href="https://linkedresearch.org/">
                            Linked Open Research Cloud
                        </ExternalLink>{" "}
                        (LORC) to improve the discoverability of your article.
                    </li>

                    <li>
                        For additional help, authors are welcome to{" "}
                        <ExternalLink href="https://gitter.im/linkedresearch/chat">
                            join the public chat
                        </ExternalLink>{" "}
                        on{" "}
                        <ExternalLink href="https://linkedresearch.org/">
                            Linked Research
                        </ExternalLink>. Please note that this is not an official communication channel of the conference. It is an open community for scholarly communication and people passionate about the Web.
                    </li>

                    <li>
                        Authors are encouraged to use tooling and processes that work best for them.
                    </li>

                </ul>
            </p>

            <UnderlineHeader>dokieli</UnderlineHeader>
            <p>
                <ExternalLink href="https://dokie.li/">
                    dokieli
                </ExternalLink>{" "}
                is a client-side editor for decentralized article publishing in HTML+RDF annotations, notifications, and social interactions. It implements W3C Recommendations like{" "}
                <ExternalLink href="https://www.w3.org/TR/annotation-model/">
                    Web Annotation
                </ExternalLink>,{" "}
                <ExternalLink href="https://www.w3.org/TR/ldn/">
                    Linked Data Notifications
                </ExternalLink>, and{" "}
                <ExternalLink href="https://www.w3.org/TR/activitypub/">
                    ActivityPub
                </ExternalLink>.
            </p>

            <p>
                The LNCS author guidelines can be used as a template (ZIP package as expected for the submission). There is a list of{" "}
                <ExternalLink href="https://github.com/linkeddata/dokieli/wiki#examples-in-the-wild">
                    examples in the wild
                </ExternalLink>.
            </p>

            <p>
                Authors that would like to self-publish can use any HTTP server. Authors, reviewers, and readers can use their own WebID and Linked Data based personal storages, e.g.,{" "}
                <ExternalLink href="http://github.com/solid/node-solid-server/">
                    Solid
                </ExternalLink>, with dokieli. Join the{" "}
                <ExternalLink href="https://gitter.im/linkeddata/dokieli">
                    chat
                </ExternalLink>{" "}
                if you need help.
            </p>

            <UnderlineHeader>ScholarMarkdown</UnderlineHeader>

            <p>
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown">
                    ScholarMarkdown
                </ExternalLink>{" "}
                is a framework for writing articles in the lightweight Markdown syntax, with automatic translation into HTML+RDFa, and the option to output PDF. It provides syntactic sugar to easily perform common tasks such as citing articles, writing math equations, and more. Note: ScholarMarkdown requires{" "}
                <ExternalLink href="https://www.ruby-lang.org/en/documentation/installation/">
                    Ruby
                </ExternalLink>{" "}
                to be installed.
            </p>

            <p>
                To get started, follow the{" "}
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown#quick-start">
                    quick start guide
                </ExternalLink>, which provides the required LNCS template in Markdown. After compiling your Markdown files to HTML, an output directory will be created. This folder contains a standalone version of your article in HTML, and this is the folder that must be submitted on EasyChair. Further details on ScholarMarkdown can be found on the{" "}
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown/wiki">
                    wiki
                </ExternalLink>.
            </p>

            <p>
                The Markdown-based source files enables straightforward versioning and collaborative editing with version-control systems such as git, and integrates nicely with automated{" "}
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown/wiki/Self-publishing">
                    self-publishing via solutions such as GitHub pages
                </ExternalLink>, as demonstrated by the{" "}
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown/wiki/Examples">
                    examples in the wild
                </ExternalLink>.
            </p>

            <p>
                To get started, follow the{" "}
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown#quick-start">
                    quick start guide
                </ExternalLink>, which will provide you with the required LNCS template in Markdown (
                <ExternalLink href="https://iswc2019.semanticweb.org/files/2018/12/scholarmarkdown-template-initial-1ukmyy2.zip">
                    Example of the initial template
                </ExternalLink>
                ). After compiling your{" "}
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown#3-compile-your-article">
                    Markdown files to HTML
                </ExternalLink>, an output/ directory will be created (
                <ExternalLink href="https://iswc2019.semanticweb.org/files/2018/12/scholarmarkdown-template-compiled-10hkhxq.zip">
                    Example of the compiled template
                </ExternalLink>
                ). This output/folder contains a standalone version of your article in HTML, and this is the folder that must be submitted on EasyChair. Further details on ScholarMarkdown can be found on the{" "}
                <ExternalLink href="https://github.com/rubensworks/ScholarMarkdown/wiki">
                    wiki
                </ExternalLink>.
            </p>

            <SubHeader>Acknowledgements</SubHeader>

            <p className="text-md lg:text-lg font-[300]">
                We would like to thank{" "}
                <ExternalLink href="https://csarven.ca/#i">
                    Sarven Capadisli
                </ExternalLink>{" "}
                for his valuable contributions to these guidelines.
            </p>


        </BaseContainer>
    );
}

export default HTMLSubmissionGuide;
