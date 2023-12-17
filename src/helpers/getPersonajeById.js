import { useSelector } from "react-redux";

export const getPersonajeById = (id) => {
  const { personajes } = useSelector((state) => state.RickAndMorty);
  return personajes.filter((personaje) => {
    return personaje.id === id;
  });
};
