
function SubFooter() {
  return (
    <div className="flex flex-col md:flex-row bg-punch_gradient_gray justify-between px-5 p-3 border-t-gray-700 border-t md:px-10">
      <p className="text-white/50 text-sm">All rights reserved by Zwilt</p>
      <div className="flex space-x-5 items-center">
        <p className="text-white/50 text-sm underline">Privacy Policy </p>
        <p className="text-white/50 text-sm underline">Terms and Conditions </p>
      </div>
    </div>
  );
}

export default SubFooter