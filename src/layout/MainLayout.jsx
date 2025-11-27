export default function MainLayout({ title, children }) {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="border-b-2 border-x-2 border-gray-300 bg-white">
          <h1 className="ps-15 md:ps-10 text-2xl font-bold p-4 text-[#174143]">
            {title}
          </h1>
        </div>
      </div>

      <div className="p-4">{children}</div>
    </>
  );
}
