import Women from "../assets/Women.png";

const WomenProfile = () => {
  return (
    <>
      <img
        src={Women}
        alt="Women Icon"
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

export default WomenProfile;
