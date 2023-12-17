import { RickAndMortyApi } from "../../api/RickAndMortyApi";
import { setPersonajes, startLoadingPersonajes } from "./RickAndMortySlice";

export const getPersonajes = (personaje = "", page = 0, next = "") => {
  return async (dispatch, getState) => {
    if (next != null) {
      page = page + 1;
    }

    dispatch(startLoadingPersonajes());

    try {
      const response = await RickAndMortyApi.get(
        `/character?name=${personaje}&page=${page}`
      );

      const { data } = response;

      dispatch(
        setPersonajes({
          personajes: data.results,
          page: page,
          next: data.info.next,
          maxPage: data.info.pages,
        })
      );
    } catch (error) {
      dispatch(
        setPersonajes({
          personajes: [],
          page: 1,
          next: null,
          maxPage: 1,
          error: `No hay personajes con el nombre ${personaje}`,
        })
      );
    }
  };
};

export const PreviousPersonajes = (personaje = "", page = 1, next = "") => {
  return async (dispatch, getState) => {
    if (page <= 1) {
      page = 1;
    } else {
      page = page - 1;
    }
    dispatch(startLoadingPersonajes());

    try {
      const response = await RickAndMortyApi.get(
        `/character?name=${personaje}&page=${page}`
      );

      const { data } = response;

      dispatch(
        setPersonajes({
          personajes: data.results,
          page: page,
          next: data.info.next,
        })
      );
    } catch (error) {
      dispatch(
        setPersonajes({
          personajes: [],
          page: 1,
          next: null,
          maxPage: 1,
          error: `No hay personajes con el nombre ${personaje}`,
        })
      );
    }
  };
};
