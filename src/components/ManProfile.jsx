import Man from "../assets/Man.png";

const ManProfile = () => {
  return (
    <>
      <img
        src={Man}
        alt="Man Icon"
        style={{
          width: "75px",
          height: "auto",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </>
  );
};

export default ManProfile;
