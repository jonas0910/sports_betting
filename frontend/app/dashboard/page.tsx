import { redirect } from "next/navigation";

const Dashboard = () => {
  redirect("/dashboard/events");
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
