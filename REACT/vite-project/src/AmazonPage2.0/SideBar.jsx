import FilterList from "./filterList.jsx";

function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        width: "500px",
        flexDirection: "column",
      }}
    >
      <FilterList title={"Conditions"} options={["New", "Used", "Renewed"]} />
      <FilterList
        title={"Material"}
        options={["Aluminium", "Rubber", "PVC", "wood ", "fibre"]}
      />
      <FilterList
        title={"Uses"}
        options={[
          "Exersice",
          "Speed And Endurance",
          "Meditation",
          "Body Building",
          "Yoga",
        ]}
      />
      <FilterList
        title={"Brand"}
        options={["Vault ", "Endurance", "Sport Bit", "Canon Sprot", "Adidas"]}
      />
    </div>
  );
}

export default SideBar;
