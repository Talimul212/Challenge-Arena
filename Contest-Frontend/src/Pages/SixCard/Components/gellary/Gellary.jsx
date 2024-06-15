/* eslint-disable no-unused-vars */
import G1 from "../../../../assets/gallery/1st.jpg";
import G2 from "../../../../assets/gallery/2ndAnd3th.jpg";
import G3 from "../../../../assets/gallery/4thand5thT0.jpg";
import G4 from "../../../../assets/gallery/4thand5thT1.jpg";
import G5 from "../../../../assets/gallery/4thand5thT2.jpg";
import G7 from "../../../../assets/gallery/4thand5thT3.jpg";
import G8 from "../../../../assets/gallery/Bu.jpg";
import G9 from "../../../../assets/gallery/Department_Tour.jpg";
import G10 from "../../../../assets/gallery/DepartmentParty.jpg";
import G11 from "../../../../assets/gallery/FootballTeam.jpg";
import G12 from "../../../../assets/gallery/TeamCSE.jpg";
import G13 from "../../../../assets/gallery/x.mp4";
const Gellary = () => {
  const images = [
    {
      id: 1,
      image: G8,
    },
    {
      id: 1,
      image: G1,
    },
    {
      id: 2,
      image: G2,
    },
    {
      id: 1,
      image: G3,
    },
    {
      id: 4,
      image: G4,
    },
    {
      id: 4,
      image: G5,
    },
    {
      id: 4,
      image: G7,
    },
    {
      id: 4,
      image: G9,
    },
    {
      id: 4,
      image: G10,
    },
    {
      id: 4,
      image: G11,
    },
    {
      id: 4,
      image: G12,
    },
  ];
  return (
    <div className="pb-12">
      <div className="flex justify-between">
        <kbd className="kbd kbd-sm bg-white rounded text-[#00bf63]">Tours</kbd>
        <kbd className="kbd kbd-sm bg-white rounded text-[#00bf63]">Party</kbd>
        <kbd className="kbd kbd-sm bg-white rounded text-[#00bf63]">
          seminar
        </kbd>
        <kbd className="kbd kbd-sm bg-white rounded text-[#00bf63]">
          Contest
        </kbd>
        <kbd className="kbd kbd-sm bg-white rounded text-[#00bf63]">BU day</kbd>
      </div>
      <p className="text-black font-semibold text-xl  mb-2">
        {/* Department Tours: */}
      </p>
      {images.map((img, i) => (
        <div className="mb-5" key={img.id}>
          <div className="card w-auto bg-base-100 shadow rounded">
            <figure>
              <img src={img.image} className="  rounded" alt={img.image} />
            </figure>
            <div className="card-body p-3">
              <p>
                Probably last Picnic of University life.❤️ Computer Science and
                Engineering Department{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
      <video controls src={G13}></video>
    </div>
  );
};

export default Gellary;
