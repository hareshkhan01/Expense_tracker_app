import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "January", expense: 186 },
  { month: "February", expense: 305 },
  { month: "March", expense: 237 },
  { month: "April", expense: 73 },
  { month: "May", expense: 2000 },
  { month: "June", expense: 5000 },
  { month: "July", expense: 7000},
  { month: "August", expense: 1000 },
  { month: "September", expense: 2000 },
  { month: "October", expense: 214 },
  { month: "November", expense: 6000 },
  { month: "December", expense: 700 },
]

const SimpleAreaChart= () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="expense" stroke="#e63c3c" fill="#e63c3c" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleAreaChart

