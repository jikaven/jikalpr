import React from 'react';

const CarList = ({ data }) => {
  return (
    <div className="lg:ml-auto relative text-3xl place-items-center group">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Number Plate</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{item.time}</td>
                  <td className="px-4 py-2 text-center">{item.numberPlate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2" colSpan="2">No entries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarList;
