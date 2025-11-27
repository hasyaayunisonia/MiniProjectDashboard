import { useEffect, useState } from "react";
import { getPosts } from "../../../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "../../../components/Card";

export default function Chart2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      const user1 = posts.filter((p) => p.userId === 1);
      const user2 = posts.filter((p) => p.userId === 2);

      const maxLength = Math.max(user1.length, user2.length);

      const result = Array.from({ length: maxLength }).map((_, i) => ({
        index: i + 1,
        user1Posts: user1[i] ? 1 : 0,
        user2Posts: user2[i] ? 1 : 0,
      }));

      setData(result);
    });
  }, []);

  return (
    <Card title="Chart 2">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#444" strokeWidth={1} />

          <XAxis dataKey="index" stroke="#000" />

          <YAxis stroke="#000" />

          <Tooltip />

          <Line
            type="linear"
            dataKey="user1Posts"
            stroke="red"
            dot={false}
            strokeWidth={2}
          />

          <Line
            type="linear"
            dataKey="user2Posts"
            stroke="green"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
