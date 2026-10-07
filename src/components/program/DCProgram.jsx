import BaseContainer from '../general/BaseContainer'
import DeclareSoon from '../general/declareSoon'
import Header from '../general/Header'
import SubHeader from '../general/SubHeader'
import UnderlineHeader from '../general/UnderlineHeader'
import ExternalLink from '../general/ExternalLink'
import SubTitle from '../general/SubTitle'

// Page sections the table of contents jumps to. The ids are looked up and
// scrolled to in code rather than linked as `#anchors`, because HashRouter
// owns the URL hash (same approach as the Schedule page).
const SECTIONS = [
  { id: "dc-guide", label: "Guide" },
  { id: "dc-program", label: "Program" },
  { id: "dc-poster", label: "Poster" },
];

const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const Contents = () => (
  <nav className="iswc-track-index" aria-label="On this page">
    {SECTIONS.map(({ id, label }) => (
      <button
        type="button"
        key={id}
        className="iswc-track-index__item"
        // The pill's tight right padding is sized for a count badge; even it
        // out since these have none.
        style={{ paddingRight: "1rem" }}
        onClick={() => scrollToSection(id)}
      >
        {label}
      </button>
    ))}
  </nav>
);

export const DCProgram = () => {

  const Third = ({ children }) => (
  <h5 className="iswc-accent">
   {children}
  </h5>

  
);

  return (
    <BaseContainer>
      <Header>Doctoral Consortium Program</Header>

      <Contents />

      {/* `iswc-track` gives each jump target the scroll margin that clears
          the sticky navbar. */}
      <section id="dc-guide" className="iswc-track">

      <UnderlineHeader>A Guide for Doctoral Consortium Participants</UnderlineHeader>

      <p>Your Doctoral Consortium paper has been accepted; this is your moment to get valuable feedback on your research direction. Here's how to make the most of it.</p>

      <ul>
        <li><b>Doctoral Consortium “The Poster Icebreaker”
(October 25th, 16:20–18:00)</b><br></br>Focus on one main key message and a logical visual flow.
Prepare short, conversational pitches for visitors.
Familiarize yourself with your colleagues.
</li>
        <li><b>Doctoral Consortium “The Real Thing”
(October 26th, All Day)</b><br></br>Treat your presentation as a mentoring session. Frame the big picture, highlight uncertainties, show a realistic roadmap, prepare concrete questions, and actively listen during Q&A.</li>
      </ul>

      <br></br>
      <SubHeader>Understanding the DC Format</SubHeader>

      <p>The Doctoral Consortium isn't a mini-conference presentation: it's a mentoring session. You'll present your work to senior researchers who are there specifically to help you refine your research plan, identify gaps, and suggest new directions. Come prepared to listen as much as you talk.</p>

      <p>
        This year, besides the main DC day (October 26th), we will have a short DC poster session to serve as an icebreaker, meet your colleagues, and more senior researchers.
      </p>

      <Third>Schedule</Third>

      <ul>
        <li>October 25th, 16:20-18:00. DC Poster Session (<b>do NOT miss it!</b> This is your icebreaker ticket) </li>
        <li>October 26th, All Day. Main DC. (<b>Note: </b>Attendance for the <b>full day is mandatory</b> for all participants; do NOT plan to go in and out to attend other events)</li>
      </ul>


      <br></br>
      <SubHeader>Crafting Your Poster</SubHeader>

      <p>Create something that people will want to stop and read.</p>


     <Third>Structure over Design</Third>

      <p>Before designing your poster, outline your story:</p>

      <ul>
        <li><b>One key message:</b> What's the single thing you want viewers to remember?</li>
          <li><b>Logical flow:</b> Organize content so someone can understand your research topic and its motivation in 2-3 minutes. (Making the motivation clear is key!)</li>
      </ul>
       <Third >Design Principles</Third>
       <ul>
        <li><b>Readable from 2 meters away:</b> If you need to squint at your own poster from close-up, others will struggle from a distance.</li>
         <li><b>White space is your friend:</b> Dense posters get skipped. Leave generous margins and gaps between sections. Details can be found in the paper.</li>
          <li><b>Figures over text:</b> One clear graph beats a paragraph of description. Make axis labels large and legends simple. The main channel of text should be what you are saying. People cannot read and listen attentively at the same time.</li>
       </ul>
        <Third>The Technical Checklist</Third>

        <ul>
          <li>Size requirements: The maximum poster size is 70 cm (base) x 100 cm (height) in vertical orientation</li>
          <li>Print at least 2 days before travel (things go wrong)</li>
          <li>Use a sturdy poster tube for transport (most airlines will allow you to bring this as carry-on for free, but you might need to double-check)</li>
        </ul>
        <Third>Presenting the Poster</Third>

        <p>Prepare a 60-second pitch for busy passersby and a 5-minute deep dive for those interested in more details. Avoid monologues: present your work as part of a conversation. Allow the attendee to ask questions, make comments, and guide the conversation with you. Have a notebook handy to keep track of recommendations, doubts, feedback, etc.</p>

      <br></br>
      <SubHeader>Crafting Your Presentation</SubHeader>

      <Third>The Talk</Third>
      <ul>
        <li><b>Frame the big picture first:</b> Start with your overarching research question and why it matters to the Semantic Web community. Contextualize before diving into specifics.</li>
        <li><b>Be honest about uncertainties:</b> This is the place to discuss what you're unsure about. "I'm considering two approaches and here's my thinking..." is exactly what mentors want to hear.</li>
        <li><b>Show your roadmap:</b> Where are you now? What's already done? What's planned? Be realistic about timelines.</li>
        <li><b>Prepare specific questions:</b> Don't just ask "Any feedback?" Have 2-3 concrete questions ready: "Should I prioritize evaluation X or Y?" or "Are there related approaches I'm missing?"
</li>
        <li><b>Respect the time:</b> It is essential when presenting at research events to respect everyone’s time. Use the allocated time (10 minutes presentation, 5 minutes questions / feedback) effectively. Practice your talk beforehand. Avoid speedrunning the presentation.</li>
 
      </ul>
      <Third>The Q&A Session</Third>

      <p>You will receive questions from a fellow student, a senior researcher, and (if time permits) from the audience. You may also receive feedback.  Take notes during feedback (or ask someone to help). When you don't understand a suggestion, ask for clarification. Push back respectfully if something doesn't fit your context.</p>

      <p>As a DC student, you will also be assigned one paper of a fellow student to read and ask a question on. Please make sure that the question is clear and concise. Be ready to clarify or explain in more detail  your question if needed. A polite and friendly tone is best.</p>

      <Third>The Technical Checklist</Third>

      <ul>
        <li>Time requirements (15 minutes total, 10 for presentation + 5 for Q&A)</li>
        <li>Check that you can connect and present before the session</li>
      </ul>

      <br></br>
      <SubHeader>After The DC</SubHeader>

      <ul>
        <li>Follow up on suggested readings and connections.</li>
        <li>Email mentors with specific follow-up questions after you've had time to reflect.</li>
        <li>Update your research plan based on the feedback, as that's the whole point.</li>
      </ul>

      <p>The DC is your opportunity to discuss your ideas with experienced researchers who genuinely want you to succeed and also to make connections with student colleagues whom you might work with in the future. Come prepared, stay open-minded, and make the most of this focused mentoring time.</p>

      </section>


      <section id="dc-program" className="iswc-track">

<UnderlineHeader>ISWC 2026 Doctoral Consortium</UnderlineHeader>

      <p><b>October 26th, 9:00-18:00</b> - Room Auriga (Perseo)</p>

      <SubHeader>Opening Keynote - Irene Celino</SubHeader>

      <ul>
        <li><b>09:00 – 09:40:</b> Doctoral Consortium Keynote Speaker</li>
      </ul>


      <SubHeader>Session 1</SubHeader>

      <ul>
        <li><b>09:40 – 09:55: Miguel Vázquez</b><br></br>Verified Neuro-Symbolic Knowledge Graph Repair under Explicit and Evolving Constraints</li>
        <li><b>09:55 – 10:10: Gustavo Nuñez</b><br></br>Neuro-symbolic AI for Advanced Reasoning Over Marine Science Data</li>
        <li><b>10:10 – 10:25: Jui-Chien Lin</b><br></br>Modality-Aware Inductive Knowledge Graphs for Grounded Reasoning</li>
        <li><b>10:25 – 10:40: Victoria Chama</b><br></br>Designing and Evaluating Defeasible Ontologies for Non-Monotonic Knowledge Representation</li>
      </ul>

      <Third>Morning Break</Third>

      <ul>
        <li><b>10:40 – 11:10:</b> Coffee Break</li>
      </ul>


      <SubHeader>Session 2</SubHeader>

      <ul>
        <li><b>11:10 – 11:25: Marlin Kisia</b><br></br>From Regulation to Representation: Interoperability for Decentralised Data Exchange Under EU Data Law</li>
        <li><b>11:25 – 11:40: Danielle Villa</b><br></br>A knowledge graph of faithfulness measures to evaluate user priorities for LLM explanations</li>
        <li><b>11:40 – 11:55: Tarek Al Mustafa</b><br></br>You ask iAnswer: Simplifying Knowledge Graph Creation through Abstracted Mapping Authoring and Improving Question-Answering Systems through Structured Knowledge Representation</li>
        <li><b>11:55 – 12:10: Julian Gebhard</b><br></br>Semantic Validation of CAD Models</li>
        <li><b>12:10 – 12:25: Junda Huang</b><br></br>Requirements-Driven DCAT Profile Engineering for FAIR Metadata: Semi-Automated Generation and Validation</li>
        <li><b>12:25 – 12:40: Génesis Montenegro</b><br></br>Towards Ontology-Guided and Traceable GraphRAG for Legal Knowledge in Industrial Maintenance</li>
        <li><b>12:40 – 12:55: Rohitha Ravinder</b><br></br>Extracting and Representing Trustworthy Scientific Claims for Biomedical Knowledge Graphs</li>
      </ul>

      <Third>Lunch Break</Third>

      <ul>
        <li><b>12:55 – 14:10:</b> Lunch Break</li>
      </ul>


      <SubHeader>Session 3</SubHeader>

      <ul>
        <li><b>14:10 – 14:25: Minh Davide Ragagni</b><br></br>Making Epistemic Bias Explicit in and through Knowledge Engineering</li>
        <li><b>14:25 – 14:40: Ilyes Tebourski</b><br></br>Toward the Characterization and Understanding of Negative Facts in Knowledge Graph Embeddings</li>
        <li><b>14:40 – 14:55: Yijia Izzie He</b><br></br>Ever more land, labour, and information: Knowledge Graph construction for the seven most-traded commodities in the early nineteenth century</li>
        <li><b>14:55 – 15:10: Emin Osmanov</b><br></br>Integrating Knowledge Graphs with Large Language Models for Automated Due Diligence</li>
        <li><b>15:10 – 15:25: Luciana Tanevitch</b><br></br>Spatio-Temporal Question Answering over Dynamic Knowledge Graphs</li>
        <li><b>15:25 – 15:40: Benjamin Navet</b><br></br>Knowledge Graphs as External Memory for LLM-based Scientific Assistants</li>
      </ul>

      <Third>Afternoon Break</Third>

      <ul>
        <li><b>15:40 – 16:20:</b> Coffee Break</li>
      </ul>


      <SubHeader>Session 4</SubHeader>

      <ul>
        <li><b>16:20 – 16:35: Alexander Prock</b><br></br>Trustworthy Agentic AI for Knowledge Engineering</li>
        <li><b>16:35 – 16:50: Aleksandra Beliaeva</b><br></br>Neurosymbolic Artificial Intelligence in Biomedical and Neuroimaging Applications</li>
        <li><b>16:50 – 17:05: Najwa Alghamdi</b><br></br>Analyzing Inconsistencies in LLM-Generated Explanations: A Multi-Stage Framework using Knowledge Graph Validation and Neuro-Symbolic Reasoning</li>
      </ul>


      <SubHeader>Panel Session – Ask Us Anything (led by Chris Welty)</SubHeader>

      <ul>
        <li><b>17:05 – 18:05:</b> Panel Session & Closing Discussion, chaired by Chris Welty</li>
      </ul>

      </section>


      <section id="dc-poster" className="iswc-track">

      <UnderlineHeader>ISWC 2026 Doctoral Consortium Poster Session</UnderlineHeader>

      <p><b>October 25th, 16:20-18:00</b> - Room Auriga (Perseo)</p>

      <p>Poster Size requirements: 
</p>

<ul>
  <li>The maximum poster size is 70 cm (base) x 100 cm (height) in vertical orientation.</li>
  <li>Bring the poster with you.</li>
</ul>

      </section>

    </BaseContainer>
  )
}

export default DCProgram;