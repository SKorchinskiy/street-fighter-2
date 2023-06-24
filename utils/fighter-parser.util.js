export function parseFighterFields(req, res, next) {
  let fighter = req.fighter;
  const { defense, power, health } = fighter;
  const parsed = parseIntPipe({ defense, power, health });
  fighter = {
    fighter,
    ...parsed,
  };
  req.fighter = fighter;
  next();
}

function parseIntPipe(props) {
  const parsed = {};
  Object.keys(props).forEach((key) => {
    parsed[key] = +props[key];
  });
  return parsed;
}
