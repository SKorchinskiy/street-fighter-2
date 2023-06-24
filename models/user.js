const USER = {
  id: "",
  firstName: "^(?!s*$).+",
  lastName: "^(?!s*$).+",
  email: "^[a-zA-Z0-9.+-]+@gmail.com",
  phoneNumber: `^\\+380[0-9]{9}$`,
  password: "^.{3,}$", // min 3 symbols
};

export { USER };
