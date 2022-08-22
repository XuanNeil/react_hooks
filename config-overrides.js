// config customize cra with react-app rewired
// https://www.npmjs.com/package/react-app-rewired

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {override, useBabelRc} = require("customize-cra");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);