const { Router } = require("express");
const axios = require("axios");
const { configDepartureDateForFlightAPI } = require("../../Utils");
const apiFlightRequest = Router();

apiFlightRequest.get("/flightRequest", (req, res) => {
  let { closestAirCode, departingDate, departingAirCode } = req.body;
  departingAirCode = configDepartureDateForFlightAPI(departingAirCode);

  axios({
    method: "GET",
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${departingAirCode}-sky/${closestAirCode}-sky/${departingDate}`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "db84276602msh53492662015ad74p1eec6ejsn4e1c50f0e943",
      useQueryString: true,
    },
    params: {
      country: "US",
      currency: "USD",
      locale: "en-US",
      originplace: `${departingAirCode}`,
      destinationplace: `${closestAirCode}`,
      outboundpartialdate: `${departingDate}`,
    },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = apiFlightRequest;
