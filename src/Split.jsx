import { useEffect, useState } from "react";

const Split = () => {
  const [selected, setSelected] = useState(new Set());
  const [isUnloading, setIsUnloading] = useState(false);

  const box = [
    [1, 0, 1],
    [1, 0, 0],
    [1, 1, 0],
  ];

  const flattenedBox = box.flat();
  const totalSelectableBoxes = flattenedBox.filter((item) => item === 1).length;

  const unload = () => {
    setIsUnloading(true);
    const keys = Array.from(selected);

    const removeNode = () => {
      if (keys.length) {
        const lastKey = keys.shift();
        setSelected((prev) => {
          const updatedSet = new Set(prev);
          updatedSet.delete(lastKey);
          return updatedSet;
        });
        setTimeout(removeNode, 500);
      } else {
        setIsUnloading(false);
      }
    };

    setTimeout(removeNode, 100);
  };

  useEffect(() => {
    if (selected.size >= totalSelectableBoxes) {
      unload();
    }
  }, [selected, totalSelectableBoxes]);

  const handleClick = (index) => {
    if (isUnloading) return;
    setSelected((prev) => new Set(prev).add(index));
  };

  return (
    <div className="grid grid-cols-3 max-w-fit p-10 gap-2">
      {flattenedBox.map((item, index) => (
        <div
          key={index}
          className={`p-4 border ${
            item === 0
              ? "opacity-0 cursor-not-allowed"
              : `opacity-100 ${
                  selected.has(index) ? "bg-green-500" : "bg-red-700"
                }`
          }`}
          onClick={() => handleClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Split;
