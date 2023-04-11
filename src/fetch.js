export const getData = async function (city) {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=1caeeb5e29474c3b855191422230304&q=` +
        city +
        `&days=7&aqi=yes&alerts=no`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
