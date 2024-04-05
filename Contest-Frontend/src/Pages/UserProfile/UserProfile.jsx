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
        <span className="text-black">Edit Profile</span>
      </Div>
      <ProfileForm />
    </Container>
  );
};

export default UserProfile;
