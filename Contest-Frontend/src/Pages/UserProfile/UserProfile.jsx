import { Link } from "react-router-dom";
import { Container, Div } from "../../Components/GobalStyle/AdsFormStyle";
import { IoMdArrowBack } from "react-icons/io";
import ProfileForm from "../../Components/Form/ProfileForm";
const UserProfile = () => {
  return (
    <Container>
      <Div>
        <Link to="/">
          <IoMdArrowBack />
        </Link>
        <p>
          <span className="text-[#00bf63]">Edit </span> Profile
        </p>
      </Div>
      <ProfileForm />
    </Container>
  );
};

export default UserProfile;
