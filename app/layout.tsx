
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import  {store}  from '../redux/store'; // Adjust path if needed
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col md:flex-row">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-64">
              <Header />
              {children}
            </main>
          </div>
        </body>
      </html>
    </Provider>
  );
}

