import ItemCard from "./ItemCard";
const data = [
  {
    description:
      "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids, Adjustable Steel Jump",
    amount: 1157,
    img: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL640_FMwebp_QL65_.jpg",
  },
  {
    description:
      "BOOMIBOO Jump Rope, Adjustable Jump Ropes,Skipping Rope Tangle-Free Rapid Speed with Ball Bearings for Women Men Kids,Exercise & Slim Body Jumprope at Home School Gym",
    amount: 697,
    img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL640_FMwebp_QL65_.jpg",
  },
  {
    description:
      "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Fitness and Exercise, Cardio, Boxing, and Weight Loss, Speed Rope, Men & Women",
    anount: 774,
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_SX679_.jpg",
  },
  {
    description:
      "LED Light Up Jump Rope for Kids – Glow, Rechargeable, Exercise | 7 Color Modes – Long Battery – Adjustable 9.2ft – Sweat-Proof Handles – Fun for Boys & Girls – Outdoor Play – Birthday Gift",
    amount: 1809,
    img: "https://m.media-amazon.com/images/I/61XprsOEstL._AC_SX679_.jpg",
  },
];
function MainSection() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((doc, index) => {
        return (
          <ItemCard key={index} description={doc.description} img={doc.img} />
        );
      })}
    </div>
  );
}
export default MainSection;