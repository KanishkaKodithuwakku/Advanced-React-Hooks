import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const useSearchData = (searchText, gender) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const characters = [
    {
      id: uuidv4(),
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
    },
    {
      id: uuidv4(),
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
    },
    {
      id: uuidv4(),
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      gender: "Female",
    },
    {
      id: uuidv4(),
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      gender: "Female",
    },
    {
      id: uuidv4(),
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fiterallData = () => {
      try {
        const fiteredData = characters.filter((character) => {
          const lowerCasetoName = searchText.toLowerCase();
          const lowerCasetoGender = gender.toLowerCase();

          return (
            character.name.toLowerCase().includes(lowerCasetoName) &&
            character.gender.toLowerCase() === lowerCasetoGender
          );
        });
        
        const finalFiterdData =
          fiteredData.length > 0 ? fiteredData : characters;

        setData(finalFiterdData);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fiterallData();
  }, [searchText, gender]);

  return [loading, error, data];
};

export default useSearchData;
