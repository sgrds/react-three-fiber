import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task UpHomes | Small Villa | Three JS",
  description:
    "Choose a 3D model (preferably a house) and use Three.js to create a scene that renders the model with the camera positioned at the top left of the model, tilted 45 degrees. Ensure the model is interactive, allowing users to rotate, zoom, and pan the model as they wish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
