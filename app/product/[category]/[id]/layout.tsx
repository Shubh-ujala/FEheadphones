// export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       {/* You can design completely NEW layout here */}
//       <div className="max-w-4xl mx-auto">
//         {children}
//       </div>
//     </div>
//   );
// }

import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-screen bg-neutral-400 mt-[-80]'>
      {children}
    </div>
  )
}

export default layout
