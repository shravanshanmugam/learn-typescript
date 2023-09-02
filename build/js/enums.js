"use strict";
// Enums are not a type-level addition
var Grade;
(function (Grade) {
    Grade[Grade["a"] = 1] = "a";
    Grade[Grade["b"] = 2] = "b";
    Grade[Grade["c"] = 3] = "c";
    Grade[Grade["d"] = 4] = "d";
    Grade[Grade["f"] = 5] = "f";
})(Grade || (Grade = {}));
console.log(Grade.a, Grade.f); // ordinal
