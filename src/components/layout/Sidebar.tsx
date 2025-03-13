// import React from "react";

// export const Sidebar: React.FC = () => {
//   return (
//     <div className="w-56 min-h-screen bg-white border-r border-gray-200">
//       <div className="p-4 border-b border-gray-200">
//         <button className="w-full text-left p-2 text-gray-600 hover:bg-gray-100 rounded-md">
//           <span className="text-lg">←</span>
//         </button>
//       </div>
//       <nav className="p-4">
//         <ul className="space-y-2">
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
//             >
//               <span className="mr-3">◯</span> Dashboard
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 bg-blue-50 text-blue-600 rounded-md"
//             >
//               <span className="mr-3">◯</span> Tasks
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
//             >
//               <span className="mr-3">◯</span> Members
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
//             >
//               <span className="mr-3">◯</span> Reports
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
//             >
//               <span className="mr-3">◯</span> Payments
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
//             >
//               <span className="mr-3">◯</span> Integrations
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <div className="absolute bottom-0 w-56 p-4 border-t border-gray-200">
//         <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
//           <span className="mr-3">◯</span> Search
//         </div>
//         <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
//           <span className="mr-3">◯</span> Help Centre
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { BiArrowBack, BiSearch, BiHelpCircle } from "react-icons/bi";
import {
  FiHome,
  FiCheckSquare,
  FiUsers,
  FiPieChart,
  FiDollarSign,
  FiGrid,
} from "react-icons/fi";

export const Sidebar: React.FC = () => {
  return (
    <div className="w-56 min-h-screen bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <button className="w-full text-left p-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <BiArrowBack className="text-lg" />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <FiHome className="mr-3" /> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 bg-blue-50 text-blue-600 rounded-md"
            >
              <FiCheckSquare className="mr-3" /> Tasks
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <FiUsers className="mr-3" /> Members
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <FiPieChart className="mr-3" /> Reports
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <FiDollarSign className="mr-3" /> Payments
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <FiGrid className="mr-3" /> Integrations
            </a>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 w-56 p-4 border-t border-gray-200">
        <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <BiSearch className="mr-3" /> Search
        </div>
        <div className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <BiHelpCircle className="mr-3" /> Help Centre
        </div>
      </div>
    </div>
  );
};
