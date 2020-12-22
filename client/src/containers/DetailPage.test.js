import { render } from "@testing-library/react";
import DetailPage from "./DetailPage";

const mockResponseData = {
  id: 3702318,
  name: "(2014 YC)",
  nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3702318",
  close_approach_date: "2020-12-20T00:06:00Z",
  relative_velocity: 50852.9277615971,
  estimated_diameter_min: 0.096506147,
  estimated_diameter_max: 0.2157943048,
  is_potentially_hazardous: false,
};

test("DetailPage should contain item info", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      json: () => {
        return mockResponseData;
      },
    })
  );
  const { findByText } = render(
    <DetailPage
      match={{ params: { id: 3702318 } }}
      history={{ goBack: () => {} }}
    />
  );
  const name = await findByText(/(2014 YC)/);
  expect(name).toBeInTheDocument();
});
