import { generateUri } from "@/utils/index";

describe("generateUri", () => {
  it("should return a valid uri for page 1", () => {
    const uri = generateUri("react");
    console.log(uri);
    expect(uri).toMatch(/q=react/);
    expect(uri).not.toMatch(/page=2$/);
  });
})

//`/search/repositories?q=${searchTerm}&sort=stars&order=desc&per_page=25&page=${pageNumber}`