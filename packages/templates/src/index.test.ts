import { test } from "vitest";

import { getTemplate, getTemplateByName } from "./index.ts";

test("getTemplateByName finds something", ({ expect }) => {
  expect(
    getTemplateByName("DF4_Demon_Hunter_Vengeance_rings_SingleTargetRaid"),
  ).toBeTruthy();
});

test("getTemplate finds something given a good value", ({ expect }) => {
  const template = getTemplate({
    profile: "DF4_Demon_Hunter_Vengeance",
    encounterType: "singleTargetRaid",
    generator: "rings",
  });
  expect(template).toBeDefined();
  expect(template?.trim()).not.toEqual("");
});

test("getTemplate finds nothing given a bad value", ({ expect }) => {
  expect(
    getTemplate({
      profile: "DF4_Demon_Hunter_Vengeance",
      encounterType: "singleTargetRaid",
      generator: "embellishments",
    }),
  ).toBeUndefined();
});
