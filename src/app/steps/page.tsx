const data = [
    {
      title: "Step#1",
      description: "The first is the selection in your Eden company. Selection letter will be given.",
    },
    {
      title: "Step#2",
      description: "Your selection letter will be issued.",
    },
    {
      title: "Step#3",
      description: "Visa Stamp and Medical and Immigration.",
    },
  ];
  
  export default function Features() {
    return (
      <div className="lg:max-w-5xl  bg-slate-50 mx-auto">
        <h2 className="text-3xl mb-6 flex justify-center font-bold text-blue-600">
          Steps
        </h2>
        <ul className="gap-20 flex flex-col w-full lg:flex-row font-serif">
          {data.map((item, index) => (
            <li key={index} className="mx-auto p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 w-full lg:w-1/3">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }