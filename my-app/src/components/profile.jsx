export const Profile = (props) => {
  return (
    <div>
      <h2 className="red-color">Nama: {props.nama}</h2>
      <p
        style={{
          color: "blue",
          fontSize: "20px",
        }}
      >
        Umur: {props.umur}
      </p>
    </div>
  );
};
