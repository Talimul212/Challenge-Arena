import { Link, useLocation } from "react-router-dom";
import { Container, Div } from "../../Components/GobalStyle/AdsFormStyle";
import { IoMdArrowBack } from "react-icons/io";
import ProfileForm from "../../Components/Form/ProfileForm";
const UserProfile = () => {
  const { state } = useLocation();
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
      <ProfileForm state={state?.formData} />
    </Container>
  );
};

export default UserProfile;
