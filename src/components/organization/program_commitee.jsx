import program_commitee_list from "../../assets/people/program_commitee_list"
/*import Sponsor from "./Sponsor"*/
import banner from "../../assets/logos/logo_banner.png"
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";
import Sponsor from "./Sponsor.jsx";

const ProgramCommitee = () => {
      return (

    <BaseContainer>
      <Sponsor users={program_commitee_list} hideImage={true} word="Program Committee" />

    </BaseContainer>

  
  );
};
export default ProgramCommitee;