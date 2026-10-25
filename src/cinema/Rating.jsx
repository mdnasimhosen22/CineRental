import star from "../assets/star.svg";

export default function Rating({ value }) {
  const Stars = Array(value).fill(star);
  return (
    <>
      {Stars.map((star, index) => (
        <img key={index} src={star} alt="satr" width="14" height="14" />
      ))}
    </>
  );
}
