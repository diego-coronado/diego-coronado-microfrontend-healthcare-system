import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to the Healthcare System</h1>

        <p className="mt-3 text-2xl">Choose a module to get started:</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            to="/patient-records"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Patient Records &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage patient information and medical history.
            </p>
          </Link>

          <Link
            to="/appointments"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Appointments &rarr;</h3>
            <p className="mt-4 text-xl">
              Schedule and manage patient appointments.
            </p>
          </Link>

          <Link
            to="/billing"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Billing &rarr;</h3>
            <p className="mt-4 text-xl">
              Handle patient billing and financial records.
            </p>
          </Link>

          <Link
            to="/pharmacy"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Pharmacy &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage medication inventory and prescriptions.
            </p>
          </Link>

          <Link
            to="/laboratory"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Laboratory &rarr;</h3>
            <p className="mt-4 text-xl">
              Track and manage laboratory tests and results.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
