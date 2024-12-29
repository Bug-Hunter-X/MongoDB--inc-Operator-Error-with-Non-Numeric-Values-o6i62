# MongoDB $inc Operator Error with Non-Numeric Values
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment numeric fields.  Attempting to increment a non-numeric field or a field that doesn't exist will result in an error.

## Bug Description
The bug occurs when providing non-numeric values to the `$inc` operator in an update operation.  This leads to an error, typically a `TypeError` or a similar exception indicating an invalid type.  The code snippet in `bug.js` showcases the problematic usage, where the field `field2` is passed a non-numeric value.

## Solution
The solution is to ensure all fields passed to the `$inc` operator are numeric.  The `bugSolution.js` file provides a corrected implementation. Before performing the increment, you might consider using other MongoDB operators like $set or $setOnInsert to handle cases where a field does not exist or is of an incorrect type.
