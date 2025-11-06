/*import program_commitee_list from "../../assets/people/program_commitee_list"*/
/*import Sponsor from "./Sponsor"*/
import banner from "../../assets/logos/logo_banner.png"
import DeclareSoon from "../general/declareSoon";
import BaseContainer from "../general/BaseContainer";
import Header from "../general/Header";

const ProgramCommitee = () => {
      return (
        <div className="flex justify-center items-center flex-col text-center mt-10" id="img">
        <div className="w-full mb-8 pt-16 relative">
          <img
            src={ banner }
            alt="Banner"
            className="w-full h-auto object-cover"
          />
    <BaseContainer>
      <Header>Program Commitee Liste</Header>
       <DeclareSoon></DeclareSoon>

            {/*
    <>
        <div className="flex justify-center items-center flex-col text-center" id="img">
        <div className="w-full mb-8 pt-16  mt-10 relative">
          <img
            src={ banner }
            alt="Banner"
            className="w-full h-auto object-cover"
          />
        </div>
          <Sponsor users={program_commitee_list} hideImage={true} word="Program Committee" />
        </div>
    </>)
};
  */}
    </BaseContainer>
   </div>
      </div>
  
  );
};
export default ProgramCommitee;