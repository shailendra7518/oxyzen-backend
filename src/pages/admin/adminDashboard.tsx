// AdminDashboard.tsx

import React from "react";

interface SalesData {
  month: string;
  sales: number;
}

interface UserActivityData {
  type: string;
  count: number;
}

interface OrderData {
  product: string;
  quantity: number;
}

interface MonthlyExpenseData {
  category: string;
  amount: number;
}

const AdminDashboard: React.FC = () => {
  // Dummy data for charts
  const salesData: SalesData[] = [
    { month: "January", sales: 1200 },
    { month: "February", sales: 1500 },
    { month: "March", sales: 1800 },
    // Add more months and sales data
  ];

  const userActivityData: UserActivityData[] = [
    { type: "Login", count: 250 },
    { type: "Registration", count: 120 },
    { type: "Product View", count: 500 },
    // Add more user activity data
  ];

  const orderData: OrderData[] = [
    { product: "Product A", quantity: 30 },
    { product: "Product B", quantity: 45 },
    { product: "Product C", quantity: 20 },
    // Add more order data
  ];

  const monthlyExpenseData: MonthlyExpenseData[] = [
    { category: "Salaries", amount: 15000 },
    { category: "Utilities", amount: 5000 },
    { category: "Marketing", amount: 8000 },
    // Add more expense data
  ];

  // Dummy user data
  const userData = {
    name: "Admin User",
    email: "admin@example.com",
    role: "Admin",
    // Add more user data fields
  };

  return (
    <div className="flex h-screen bg-gray-100 mt-[80px]">
      {/* Sidebar */}
      <div className="flex-shrink-0 w-64 bg-gray-800 text-white">
        <div className="py-4 px-2">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
          {/* Section Links */}
          <div className="mb-4">
            <a href="#user">User Info</a>
          </div>
          <div className="mb-4">
            <a href="#sales">Sales Overview</a>
          </div>
          <div className="mb-4">
            <a href="#activity">User Activity</a>
          </div>
          <div className="mb-4">
            <a href="#orders">Order Details</a>
          </div>
          <div className="mb-4">
            <a href="#expenses">Monthly Expenses</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        {/* Header */}
        <header className="bg-white shadow-md p-4 mb-4">
          <h1 className="text-2xl font-bold">Welcome, {userData.name}!</h1>
          <p className="text-gray-500">Role: {userData.role}</p>
        </header>

        {/* User Data */}
        <section id="user" className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-semibold mb-4">User Information</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user data fields */}
        </section>

        {/* Charts */}
        <section id="sales" className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          {/* Render your bar chart using salesData */}
          <div className="flex items-center">
            {salesData.map((data, index) => (
              <div key={index} className="mr-4">
                <p>{data.month}</p>
                <p>{data.sales}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="activity"
          className="bg-white p-4 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-lg font-semibold mb-4">User Activity</h2>
          {/* Render your pie chart or any other component using userActivityData */}
          <div className="flex items-center">
            {userActivityData.map((data, index) => (
              <div key={index} className="mr-4">
                <p>{data.type}</p>
                <p>{data.count}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="orders" className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h2 className="text-lg font-semibold mb-4">Order Details</h2>
          {/* Render your table or any other component using orderData */}
          <table className="w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((data, index) => (
                <tr key={index}>
                  <td>{data.product}</td>
                  <td>{data.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section
          id="expenses"
          className="bg-white p-4 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-lg font-semibold mb-4">Monthly Expenses</h2>
          {/* Render your bar chart or any other component using monthlyExpenseData */}
          <div className="flex items-center">
            {monthlyExpenseData.map((data, index) => (
              <div key={index} className="mr-4">
                <p>{data.category}</p>
                <p>{data.amount}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul>
            {/* Render recent activity items using userActivityData */}
            <li>{`${userActivityData[0].type} - ${userActivityData[0].count} times`}</li>
            <li>{`${userActivityData[1].type} - ${userActivityData[1].count} times`}</li>
            <li>{`${userActivityData[2].type} - ${userActivityData[2].count} times`}</li>
            {/* Add more activity items */}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
