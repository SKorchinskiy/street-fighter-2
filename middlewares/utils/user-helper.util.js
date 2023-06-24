import { USER } from "../../models/user.js";
import createError from "http-errors";

export function userValidationCheck() {
  const expectedFields = getUserModelFields();
  const partialCheck = partialValidationCheck(expectedFields);
  const fullCheck = fullValidationCheck(expectedFields);
  return {
    partialCheck,
    fullCheck,
  };
}

function partialValidationCheck(expectedFields) {
  return (received) => {
    const receivedKeys = Object.keys(received);
    receivedKeys.forEach((fieldName) => {
      const regex = expectedFields.get(fieldName);
      if (!regex) {
        throw new createError(
          400,
          `Redundant field detected when validating user: ${fieldName}`
        );
      } else if (!RegExp(regex).test(received[fieldName])) {
        throw new createError(
          400,
          `Field ${fieldName} doesn't meet the requirements: ${received[fieldName]}`
        );
      }
      return true;
    });
  };
}

function fullValidationCheck(expectedFields) {
  const partialCheck = partialValidationCheck(expectedFields);
  return (received) => {
    const receivedKeys = Object.keys(received);
    if (expectedFields.size !== receivedKeys.length) {
      throw new createError(
        400,
        `The number of received fields ${receivedKeys.length} doesn't match the number of expected fields ${expectedFields.size}`
      );
    }
    return partialCheck(received);
  };
}

function getUserModelFields() {
  const fieldsStorage = new Map();
  Object.keys(USER).forEach((field) => {
    if (field !== "id") {
      fieldsStorage.set(field, USER[field]);
    }
  });
  return fieldsStorage;
}
