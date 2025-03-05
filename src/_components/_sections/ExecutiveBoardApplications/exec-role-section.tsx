export const RoleSection = ({
  title,
  items,
  icon,
  bgColor,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  bgColor: string;
}) => (
  <div className={`rounded-lg p-6 my-4 ${bgColor}`}>
    <div className="flex items-center mb-4">
      <div className="mr-3">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="inline-block w-2 h-2 mt-2 mr-2 bg-teal-500 rounded-full"></span>
          <span className="flex-1">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
