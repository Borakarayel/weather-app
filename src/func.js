export const getData = async function (city) {
  try {
    const weatherInfo = await (
      await fetch(
        `https://api.weatherapi.com/v1/current.json?key=1caeeb5e29474c3b855191422230304&q=` +
          city +
          `&aqi=no`
      )
    ).json();

    cityId.textContent = `${weatherInfo.location.name}, ${weatherInfo.location.country}`;
    weatherInfoId.textContent = `${weatherInfo.current.condition.text}`;
    localTime.textContent = `Local Date: ${weatherInfo.location.localtime}`;
    temp.textContent = `${weatherInfo.current.temp_c} °C`;
  } catch (error) {
    console.log(Error);
  }
};
