import { useEffect, useState } from "react";
import { getPosts } from "../../../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../../../components/Card";

export default function Chart1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      const grouped = posts.reduce((acc, p) => {
        acc[p.userId] = (acc[p.userId] || 0) + 1;
        return acc;
      }, {});

      const formatted = Object.keys(grouped).map((key) => ({
        userId: `User ${key}`,
        posts: grouped[key],
      }));

      setData(formatted);
    });
  }, []);

  return (
    <Card title="Chart 1">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="userId"
            interval={0}
            angle={-30}
            textAnchor="end"
            tick={{ fontSize: 9 }}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="posts" fill="#F9B487" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
