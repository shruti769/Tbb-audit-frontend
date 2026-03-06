import img1 from "/img1.png";
import img2 from "/img2.png";
import img3 from "/img3.png";
import img4 from "/img4.png";
import img5 from "/img5.png";
import img6 from "/img6.png";
import img7 from "/img7.png";

export const STORE_CARDS = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
];

export function PhoneMockup({ image }) {
  return (
    <div style={{ width: 220, height: 420 }}>
      <img
        src={image}
        alt="store"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: 16,
        }}
      />
    </div>
  );
}