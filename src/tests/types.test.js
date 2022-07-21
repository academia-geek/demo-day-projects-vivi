import { typesEvents, typesFavorite, typesInfo, typesLogin, typesRegister, typesSchedule } from "../redux/types/types";

describe("Check if the data types are correct", () => {
  test("Validate the types of typesRegister", () => {
    expect(typesRegister).toEqual({
      REGISTER: "REGISTER USER",
    });
  });
  test("Validate the types of typesLogin", () => {
    expect(typesLogin).toEqual({
      LOGIN: "LOGIN USER",
      LOGOUT: "LOGOUT",
    });
  });
  test("Validate the types of typesInfo", () => {
    expect(typesInfo).toEqual({
      list_info: "list",
    });
  });
  test("Validate the types of typesEvents", () => {
    expect(typesEvents).toEqual({
      add: "[Events]agregar",
      list: "[Events]list",
      delete: "[Events]eliminar",
      edit: "[Events]edit",
    });
  });
  test("Validate the types of typesSchedule", () => {
    expect(typesSchedule).toEqual({
      add_Schedule: "[Schedule]Add",
      list_Schedule: "[Schedule]list",
      delete_Schedule: "[Schedule]delete",
      edit_Schedule: "[Schedule]edit",
    });
  });
  test("Validate the types of typesFavorite", () => {
    expect(typesFavorite).toEqual({
      ADD_TO_FAVORITE: "ADD FAVORITE EVENT",
      REMOVE_FROM_FAVORITE: "REMOVE FAVORITE EVENT",
      LIST_FAVORITE: "LIST FAVORITE EVENT",
    });
  });
});
