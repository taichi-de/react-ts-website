import { add } from "../components/TestPrograms";
import { test, expect, it } from "vitest";

test("add", () => {
  it("1+2=3", () => {
    expect(add(1, 2)).toEqual(3);
  });
  it("11+12=23", () => {
    expect(add(11, 12)).toEqual(23);
  });
  it("21+22=43", () => {
    expect(add(21, 22)).not.toEqual(33);
  });
});

test("contain", () => {
  const test = ["abc", "efg", "hij"];
  expect(test).toContain("efg");
  expect("abcdefghij").toContain("efg");
});

test("Falsy", () => {
  const test = false;
  expect(test).toBeFalsy();
});
