// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';
// import React from 'react';

// const data = [
//   { month: 'Jan', members: 50 },
//   { month: 'Feb', members: 120 },
//   { month: 'Mar', members: 180 },
//   { month: 'Apr', members: 260 },
//   { month: 'May', members: 320 },
//   { month: 'Jun', members: 450 },
//   { month: 'Jul', members: 500 },
// ];

// const MemberGrowthChart: React.FC = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
//         Member Growth Over Time
//       </h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//           <XAxis dataKey="month" stroke="#9ca3af" />
//           <YAxis stroke="#9ca3af" />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: '#1f2937',
//               border: 'none',
//               color: 'white',
//             }}
//             labelStyle={{ color: 'white' }}
//             itemStyle={{ color: 'white' }}
//           />
//           <Line
//             type="monotone"
//             dataKey="members"
//             stroke="#3b82f6"
//             strokeWidth={2}
//             activeDot={{ r: 6 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default MemberGrowthChart;
