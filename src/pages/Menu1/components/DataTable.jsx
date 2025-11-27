import { useEffect, useState } from "react";
import { getPosts } from "../../../services/api";
import Card from "../../../components/Card";

export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });
  }, []);

  return (
    <Card title="Data Table">
      <table className="w-full border">
        <thead className="bg-[#174143] text-white">
          <tr>
            <th className="p-2 border">User ID</th>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="p-2 border">{item.userId}</td>
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
