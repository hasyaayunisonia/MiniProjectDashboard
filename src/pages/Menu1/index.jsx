import MainLayout from "../../layout/MainLayout";
import MapsWidget from "./components/MapsWidget";
import Chart1 from "./components/Chart1";
import Chart2 from "./components/Chart2";
import DataTable from "./components/DataTable";

export default function Menu1() {
  return (
    <MainLayout title="Menu 1">
      <MapsWidget />

      <div className="flex flex-wrap gap-4 mt-4">
        <div className="w-full md:w-[48%]">
          <Chart1 />
        </div>
        <div className="w-full md:w-[48%]">
          <Chart2 />
        </div>
      </div>

      <div className="mt-4">
        <DataTable />
      </div>
    </MainLayout>
  );
}
