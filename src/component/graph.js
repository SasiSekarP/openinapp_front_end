import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Linechart = () => {
  const data = [
    {
      name: "",
      user: 100,
      guest: 200,
    },
    {
      name: "Week 1",
      user: 410,
      guest: 380,
    },
    {
      name: "Week 2",
      user: 150,
      guest: 210,
    },
    {
      name: "Week 3",
      user: 450,
      guest: 300,
    },
    {
      name: "Week 4",
      user: 190,
      guest: 250,
    },
    {
      name: "Week 4",
      user: 250,
      guest: 450,
    },
  ];

  return (
    <ResponsiveContainer width={"100%"} height={250}>
      <LineChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="none" vertical={false} />
        <XAxis dataKey="name" axisLine={false} />
        <YAxis axisLine={false} />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          height={40}
        />
        <Line type="monotone" dataKey="user" stroke="#8884d8" />
        <Line type="monotone" dataKey="guest" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Linechart;
